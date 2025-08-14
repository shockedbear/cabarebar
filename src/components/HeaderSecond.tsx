'use client'

import { MenuItem } from "./MenuItem"
import { MENU } from "@/data/menu.data";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export function HeaderSecond() {
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
    };
  }, [isOpen]);

  return (
    <header className="max-w-5xl mx-auto w-full relative z-50">
      {/* Верхняя панель */}
      <div className="flex justify-between items-center gap-10 lg:p-6 p-6 pb-0  lg:border-b-2 border-red-800">
        <Link href={'/'}>
          <div className="text-red-600 text-4xl font-normal font-['Allura']">musical</div>
        </Link>

        {/* Меню для больших экранов */}
        <nav className="hidden md:flex gap-10 justify-between items-center">
          {MENU.map((item) => (
            <MenuItem key={item.name} name={item.name} href={item.href} />
          ))}
        </nav>

        {/* Телефон */}
        <div className="hidden md:block text-white font-['EB_Garamond']">
          +7 (900) 636-13-22
        </div>

        {/* Бургер для мобилок */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(true)}
        >
          <HiOutlineMenu />
        </button>
      </div>

      {/* Выезжающее меню */}
      <div
        className={`fixed top-0 right-0 h-full w-50 bg-[#121212] shadow-lg transform transition-transform duration-300 z-50 
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end items-center pt-3 pr-3">
          <button className="text-white font-['EB_Garamond']" onClick={() => setIsOpen(false)}>
            <HiOutlineX />
          </button>
        </div>

        <nav className="flex flex-col gap-2 p-3">
          {MENU.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-white  hover:text-gray-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="p-6 text-white font-['EB_Garamond']">
          +7 (900) 636-13-22
        </div>
      </div>
    </header>
  );
}
