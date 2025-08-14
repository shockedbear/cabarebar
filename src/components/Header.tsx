import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Логотип</div>

      {/* Кнопка бургер */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="md:hidden"
      >
        {open ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Меню */}
      <nav
        className={`${
          open ? "block" : "hidden"
        } absolute top-full left-0 w-full bg-gray-700 md:static md:block md:w-auto`}
      >
        <ul className="flex flex-col md:flex-row md:gap-6 p-4 md:p-0">
          <li><a href="#" className="block p-2 hover:bg-gray-600">Главная</a></li>
          <li><a href="#" className="block p-2 hover:bg-gray-600">О нас</a></li>
          <li><a href="#" className="block p-2 hover:bg-gray-600">Контакты</a></li>
        </ul>
      </nav>
    </header>
  );
}
