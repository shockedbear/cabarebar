import Image from "next/image"


import { EVENTSINFOALL } from "@/data/events.all.data"
import Link from "next/link"


export default function FullPosters() {
    return(
        <div className="max-w-5xl mx-auto mt-10 mb-10">
                    <div className="mx-5">
                        <h1 className="text-center text-white text-6xl    mb-5 font-cactus-classical ">АФИША</h1>
                        <div className="grid grid-cols-2 lg:grid-cols-3  justify-center gap-5 lg:gap-10">
                        {
                            EVENTSINFOALL.map((item,index) => (
                                <AfishaCardAll key={index} href={`/afisha/${item.id}`} img={item.img}/>
                                
                            ))
                            
                        }
                        </div>
                       
                    </div>
                </div>
    )
}

type Props = {
    img:string,
    href: string
}

function AfishaCardAll({img, href}: Props) {
    return(
        <div>
              <Image src={img} alt="img" width={500} height={500}/>
              <div className="mt-3 flex items-center justify-center">
                <Link href={href}>
                    <button className="py-3  border-2 font-cactus-classical rounded-2xl px-10 lg:px-15 text-sm lg:text-xl hover:bg-red-950 transition-colors duration-150 border-[#F0C471] bg-[#520000] text-[#F0C471] cursor-pointer ">Купить билет</button>
                </Link>
              </div>
        </div>
    )
}