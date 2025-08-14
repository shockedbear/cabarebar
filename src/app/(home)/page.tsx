import { SectionAfisha } from "@/components/SectionAfisha"
import { Footer } from "@/components/Footer"
import { HeaderSecond } from "@/components/HeaderSecond"
import { SectionAbout } from "@/components/SectionAbout"
import { SectionImageSecond } from "@/components/SectionImageSecond"

import { SectionBar } from "@/components/SectionBar"
import { OfferSection } from "@/components/OfferSection"
import { SectionDirector } from "@/components/SectionDirector"
import { FooterSecond } from "@/components/FooterSecond"
import { SectionVideo } from "@/components/SectionVideo"
export default function Home() {
  return(
    <div>
      {/*
      <SectionImageSecond/>
      */}

      <SectionAbout/>
      


      
      <SectionAfisha/>
      {/* 
        <SectionVideo/>
      */}

      <SectionBar/>

 

      <OfferSection/>

   
 
    </div>
  )
}