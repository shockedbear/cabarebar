"use client"
import AfishaCard from "./AfishaCard";
import { EVENTSINFOALL } from "@/data/events.all.data";
import { Button } from "./ui/Button";
import Link from "next/link";
import { useEffect, useState } from "react";

export function SectionAfisha() {
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
      <div className="mx-5">
        <h1
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2000"
          className="text-center text-white text-5xl lg:text-6xl mb-10 font-cactus-classical"
        >
          АФИША
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 justify-center gap-5 lg:gap-10">
          {EVENTSINFOALL.slice(0, cardCount).map((item) => (
            <AfishaCard id={item.id} key={item.id} img={item.img} title={item.title} description={item.description} date={item.date} price={item.price} />
          ))}
        </div>

        <div className="flex justify-end mt-5">
          
          <Link href={"/afisha"}>
            <Button>Смотреть еще</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
