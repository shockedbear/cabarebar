'use client'


import Image from "next/image"

type Props = {
  img: string
}

export function AfishaCard({img}:Props) {


  return(
    <div>
      <Image src={img} alt="img" width={500} height={500} data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
     data-aos-duration="2000"
 
    />
    </div>
  )
}