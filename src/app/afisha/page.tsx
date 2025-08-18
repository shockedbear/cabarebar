import  FullAfisha  from "./FullAfisha"

import type { Metadata } from "next"

export const metadata: Metadata = {
     title: "Афиша Cabare & Bar Мюзикл — события в Пскове",
  description:
    "Смотрите актуальные шоу, концерты и вечеринки в Cabare & Bar «Мюзикл» в Пскове. Планируйте свой вечер и бронируйте столик заранее!",

}

export default function Afisha() {
    return(
        <>
            <FullAfisha/>
        </>
    )
}