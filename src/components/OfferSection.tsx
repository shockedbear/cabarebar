import Image from "next/image"
import { Button } from "./ui/Button"

export function OfferSection() {
    return(
        <div className="max-w-5xl mx-auto mt-20">
            <div className="mx-5">
                <div className="flex flex-col  items-center">
                    <h1 className="text-center text-white text-5xl lg:text-6xl    mb-10 font-cactus-classical">МЕРОПРИЯТИЯ</h1>
                    <p className="text-white text-center mb-5">Чтобы заказать шоу-программу на ваше мероприятие, пожалуйста, предоставьте дополнительные детали, 
такие как ваши контактные данные, 
дата и ожидаемое количество гостей. 
Это поможет нам подготовить наилучшее предложение 
и обсудить детали вашего заказа. </p>
                    <Image alt="img" width={400} height={500} src='/images/2w2.png'/>
                    <div className="mt-10 ">
                        <Button>Заказать мероприятие</Button>
                    </div>
                 </div>
            </div>
        </div>
    )
}