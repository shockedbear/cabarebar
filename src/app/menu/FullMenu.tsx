import Image from "next/image"

export function FullMenu() {
    return(
       <div className="max-w-5xl mx-auto mt-10">
                    <div className="mx-6">
                        <h1   data-aos="flip-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2000" className="text-center text-white text-5xl lg:text-6xl    mb-5 font-cactus-classical ">МЕНЮ</h1>
            <div className="flex-col justify-center items-center">
                <Image src='/images/menu/imgPage1.jpg' width={1000} height={200} alt="img"/>
                <Image src='/images/menu/imgPage2.jpg' width={1000} height={200} alt="img"/>
                <Image src='/images/menu/imgPage3.jpg' width={1000} height={200} alt="img"/>
                <Image src='/images/menu/imgPage4.jpg' width={1000} height={200} alt="img"/>
                <Image src='/images/menu/imgPage5.jpg' width={1000} height={200} alt="img"/>

            </div>
            </div>
        </div>
    )
}