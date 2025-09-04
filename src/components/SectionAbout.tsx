'use client'

import Image from "next/image"
import { Button } from "./ui/Button"
import Link from "next/link"
import 'aos/dist/aos.css'
import Aos from 'aos'
import { useEffect } from "react"

export function SectionAbout() {
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div className="max-w-5xl mx-auto lg:my-10 ">
      <div className="flex flex-col md:flex-row justify-between md:items-center items-center gap-10 mx-6">
        
        <div className="w-[350px] lg:w-[500px]" data-aos='fade-right' data-aos-duration="2000">
          <Image src='/images/main/aboutlogo.png' width={600} height={600} alt="img" className="mt-10 lg:mt-0"  />
          
          <div className="text-white text-lg font-extralight font-['EB_Garamond'] mt-5  text-center">
           Cabaret&Bar Мюзикл — окунитесь в волшебство наших шоу!
Здесь каждый вечер превращается в спектакль: изысканная кухня, живая музыка и эксклюзивные номера, от которых захватывает дух. Почувствуйте магию Cabaret&Bar — место, где ваши мечты становятся реальностью.
          </div>
          
          <div className="mt-3 flex justify-center lg:justify-center">
            <Link href={'/afisha'}>
              <Button>Смотреть афишу</Button>
            </Link>
          </div>
        </div>

        <div 
  data-aos="fade-left" 
  data-aos-duration="2000" 
  className="hidden lg:flex items-end justify-end h-full"
>
  <Image 
    src="/images/main/about1.png" 
    width={400} 
    height={400} 
    alt="img" 
  />
</div>

      </div>
    </div>
  )
}
