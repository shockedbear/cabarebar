'use client'

import { useState } from "react"
import React from "react"
import Image from "next/image"
import Modal from "./Modal"
import { Button } from "./Button"


import { PropsEvent } from "@/data/events.all.data"

export function AfishaCard({img, title, description, date, price}: PropsEvent) {

    const [isOpenModal, setIsOpenModal] = useState(false)

        function handleOpenModal() {
        setIsOpenModal(true)
    }
    return (
        <div className="cursor-pointer">
            <Image onClick={handleOpenModal}
                src={img} 
                alt="img" 
                width={500} 
                height={500} 
                data-aos="zoom-in"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1500"
                 loading="lazy"
            />
             {isOpenModal && <Modal onClose={() => setIsOpenModal(false)}> 
                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center ">
                        <div className="w-[300px]">
                        <Image onClick={handleOpenModal}
                            src={img} 
                            alt="img" 
                            width={300} 
                            height={300} 
                            className="w-[300px] h-[365px]  lg:w-[250px] lg:h-[350px] mx-auto lg:mx-0"
                        />
                        </div>
                        <div className=" w-[300px]">
                           <div className="flex flex-col h-full justify-between  rounded-xl">
                            <div>
                                <h1 className="text-center text-white text-2xl mt-5 lg:mt-0 font-cactus-classical">{title}</h1>
                                <p className="text-white text-lg font-extralight font-['EB_Garamond'] mt-3 px-2 text-center">
                                {description}
                                </p>
                                <div className="flex justify-between items-center mt-5 px-2">
                                    <span className="text-[#F0C471] text-xl font-eb-garamond">{date}</span>
                                    <p className="text-[#F0C471] text-xl font-eb-garamond">Цена: {price}</p>
                                </div>
                                <p className="text-red-600 text-center text-sm mt-5 lg:mt-15">Возврат билетов возможен не позднее, чем за 15 дней до мероприятия.</p>
                            </div>

                            <div className="flex justify-center mt-5">
                                <Button size={2}>Купить билет</Button>
                            </div>
                            </div>

                            
                        </div>
                    </div>
                            
                </Modal>}
           
        </div>

    )
}

