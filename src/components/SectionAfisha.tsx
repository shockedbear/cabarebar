import { AfishaCard } from "./AfishaCard";
import { EVENTSINFO } from "@/data/events.data";
import { Button } from "./ui/Button";
import Link from "next/link";

export function SectionAfisha() {
    return(
        <div className="max-w-5xl mx-auto mt-20">
            <div className="mx-5">
                <h1 className="text-center text-white text-5xl lg:text-6xl    mb-10 font-cactus-classical ">АФИША</h1>
                <div className="grid  grid-cols-2 md:grid-cols-3 justify-center gap-5 lg:gap-10">
                {
                    EVENTSINFO.map((item,index) => (
                        <AfishaCard key={index} img={item.img}/>
                    ))
                }
                </div>
                <div className="flex justify-end mt-5">
                    <Link href={'/afisha'}>
                        <Button>Смотреть еще</Button>
                    </Link>
                    </div>
            </div>
        </div>
    )
}