import Image from "next/image"


export function SectionOffer() {
    return(
        <div className="max-w-5xl mx-auto mt-20">
            <div className="mx-5">
                <div className="flex flex-col  items-center">
                    <h1 className="text-center text-white text-5xl lg:text-6xl    mb-10 font-cactus-classical">МЕРОПРИЯТИЯ</h1>
                    <p className="text-white text-center mb-5">Наше кабаре — идеальное место для банкетов, корпоративов и праздников с шоу.
Роскошная атмосфера, изысканная кухня и профессиональные артисты создают уникальный вечер для вас и ваших гостей.
Позвоните или напишите в мессенджер, и мы поможем организовать событие вашей мечты, где каждая деталь будет продумана до совершенства.</p>
                    <Image alt="img" width={400} height={500} src='/images/main/offer1.png'/>
                    
                 </div>
            </div>
        </div>
    )
}