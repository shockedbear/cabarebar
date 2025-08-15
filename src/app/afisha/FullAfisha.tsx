'use client'


import AfishaCard from "@/components/AfishaCard"

import { EVENTSINFOALL } from "@/data/events.all.data"
import Link from "next/link"


export default function FullAfisha() {

   

    return(
        <div className="max-w-5xl mx-auto mt-10 mb-10">
                    <div className="mx-5">
                        <h1  data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1500" className="text-center text-white text-6xl    mb-10 font-cactus-classical ">АФИША</h1>
                        <div className="grid grid-cols-2 lg:grid-cols-3  justify-center gap-y-8 gap-5 lg:gap-10">
                        {
                            EVENTSINFOALL.map((item) => (
                                 <AfishaCard id={item.id} key={item.id} img={item.img} title={item.title} description={item.description} date={item.date} price={item.price} />
                                
                            ))
                            
                        }
                        </div>
                       
                    </div>
                    <div>
                        
                        
                    </div>
                </div>
    )
}

