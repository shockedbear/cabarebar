import Image from "next/image"
import { Button } from "./Button"
import Link from "next/link"

type Props = {
    img: string,
    name: string,
    href: string
}

export function AboutCard({img, name, href}:Props) {
    return(
        <div className="relative">
            <Image width={1000} height={1000} src={img} alt="img" className="object-cover rounded-xl"/>
            <h2 className=" absolute bottom-25 left-5  text-5xl   font-eb-garamond font-semibold  bg-[linear-gradient(to_right,#F5DB96,#CC9D49,#EFD48F,#CD9B49,#F3DB93,#CF9A4A)] bg-clip-text text-transparent">
                {name}
            </h2>
            <div className="mt-5 ">
                <Link href={href}>
                    <Button size={1}>Подробнее</Button>
                </Link>
            </div>
        </div>
    )
}