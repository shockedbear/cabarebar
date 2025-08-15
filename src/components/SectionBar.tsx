"use client"
import { BarCard } from "./BarCard"
import { BARDATA } from "@/data/bar.data";
import { Button } from "./ui/Button";
import { useState, useEffect } from "react";
import Link from "next/link";

export function SectionBar() {
  const [cardCount, setCardCount] = useState(4);

  useEffect(() => {
    const updateCardCount = () => {
      if (window.innerWidth >= 1024) {
        setCardCount(3); // lg и больше
      } else {
        setCardCount(4); // меньше lg
      }
    };

    updateCardCount();
    window.addEventListener("resize", updateCardCount);

    return () => window.removeEventListener("resize", updateCardCount);
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-20">
      <div className="mx-6">
        <h1  data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500" className="text-center text-white text-5xl lg:text-6xl font-cactus-classical">БАР</h1>
        <h2  data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500" className="text-white text-center text-3xl mt-5 mb-10 font-cactus-classical">Авторские коктейли</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 justify-center gap-5 lg:gap-10">
          {BARDATA.slice(0, cardCount).map((item, index) => (
            <BarCard key={index} img={item.img} />
          ))}
        </div>

        <div className="flex justify-end mt-5">
          <Link href='/bar'>
            <Button>Смотреть еще</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
