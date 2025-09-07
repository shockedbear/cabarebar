'use client'

import dynamic from "next/dynamic";
import { SectionImage } from "@/components/SectionImage";
import { SectionAbout } from "@/components/SectionAbout";


const SectionAfisha = dynamic(() => import("@/components/SectionAfisha"), {
  loading: () => <p></p>,
  ssr: false
});

const SectionBar = dynamic(() => import("@/components/SectionBar"), {
  loading: () => <p></p>,
  ssr: false
});

const SectionMenu = dynamic(() => import("@/components/SectionMenu"), {
  loading: () => <p></p>,
  ssr: false
});

const SectionOffer = dynamic(() => import("@/components/SectionOffer"), {
  loading: () => <p></p>,
});

export default function Home() {
  return (
    <>

      <SectionImage />
      <SectionAbout />

   
      <SectionAfisha />
      <SectionBar />
      <SectionMenu />
      <SectionOffer />
    </>
  );
}
