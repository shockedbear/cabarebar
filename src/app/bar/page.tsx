import { FullBar } from "./FullBar";
import type { Metadata } from "next";
import { SectionImageBar } from "./SectionImageBar";


export const metadata: Metadata = {
  title: "Бар Cabare & Bar Мюзикл — коктейли и атмосфера в Пскове",
  description:
    "Откройте для себя авторские коктейли, напитки и уютную атмосферу Cabare & Bar «Мюзикл» в Пскове. Идеальное место для вечера с друзьями или романтического свидания.",
}
export default function Bar() {
    return(
        <>
        <SectionImageBar/>
        <FullBar/>
        
       
        </>
    )
}