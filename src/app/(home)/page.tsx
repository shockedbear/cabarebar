'use client'

import dynamic from "next/dynamic";
import { SectionImage } from "@/components/SectionImage";
import { SectionAbout } from "@/components/SectionAbout";

// Lazy load для нижних секций
const SectionAfisha = dynamic(() => import("@/components/SectionAfisha"), {
  loading: () => <p className="text-white ">Загрузка афиши...</p>,
  ssr: false
});

const SectionBar = dynamic(() => import("@/components/SectionBar"), {
  loading: () => <p className="text-white ">Загрузка бара...</p>,
  ssr: false
});

const SectionMenu = dynamic(() => import("@/components/SectionMenu"), {
  loading: () => <p className="text-white ">Загрузка меню...</p>,
  ssr: false
});

const SectionOffer = dynamic(() => import("@/components/SectionOffer"), {
  loading: () => <p className="text-white ">Загрузка мероприятий...</p>,
});

export default function Home() {
  return (
    <>
      {/* Первые секции грузятся сразу */}
      <SectionImage />
      <SectionAbout />

      {/* Нижние секции грузятся лениво */}
      <SectionAfisha />
      <SectionBar />
      <SectionMenu />
      <SectionOffer />
    </>
  );
}
