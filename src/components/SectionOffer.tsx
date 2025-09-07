import Image from "next/image"


export default function SectionOffer() {
    return(
        <div className="max-w-5xl mx-auto mt-20">
            <div className="mx-6">
                <div className="flex flex-col  items-center">
                    <h1  className="text-center text-white text-4xl lg:text-6xl    mb-2 font-cactus-classical">ЧАСТНЫЕ МЕРОПРИЯТИЯ</h1>
                    <p className="text-white text-center font-extralight text-sm  mb-4">Наше кабаре — идеальное место для банкетов, корпоративов и праздников с шоу.
Роскошная атмосфера, изысканная кухня и профессиональные артисты создают уникальный вечер для вас и ваших гостей.
Позвоните или напишите в мессенджер, и мы поможем организовать событие вашей мечты, где каждая деталь будет продумана до совершенства.</p>
                    <Image alt="img" width={400} height={500} src='/images/main/offer1.png' />
                    
                 </div>
                 <div>
                    <h2 className="text-4xl lg:text-5xl  font-eb-garamond font-semibold mt-20 mb-10 text-center bg-[linear-gradient(to_right,#F5DB96,#CC9D49,#EFD48F,#CD9B49,#F3DB93,#CF9A4A)] bg-clip-text text-transparent">
  НАШИ <br/>ПРЕИМУЩЕСТВА:
</h2>

                    <div className="grid grid-cols-2 items-stretch lg:items-center space-x-5 lg:gap-x-20 text-white font-extralight text-sm ">
                        <div className="flex flex-col gap-y-5 lg:gap-y-10 text-left leading-relaxed lg:leading-normal">
                            <p>- Каждые выходные - феерия на сцене!</p>
                            <p>- Изысканная кухня - достойное дополнение!<br/>Здесь стираются границы между сценой и залом.</p>
                            <p>- Интерьер, дышащий историей!<br/>Каждый предмет интерьера - это антикварный артефакт.</p>
                        </div>
                        <div className="flex flex-col gap-y-5 lg:gap-y-10 text-right leading-relaxed lg:leading-normal">
                            <p>- Камерность, рождающая близость!<br/>Здесь стираются границы между сценой и залом.</p>
                            <p>- Атмосфера, которую нельзя описать словами!</p>
                            <p>- По средам - магия слова!<br/> Погрузитесь в мир литературы на наших камерных спектаклях.</p>
                        </div>
                    </div>
                    <h3 className="text-xl lg:text-3xl text-[#D1AC66] font-eb-garamond  font-semibold mt-10 text-center ">“МЮЗИКЛ” - это место,<br/> 
где рождаются воспоминания. </h3>
                 </div>
            </div>
        </div>
    )
}