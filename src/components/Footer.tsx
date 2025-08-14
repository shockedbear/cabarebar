import Image from "next/image"

export function Footer() {
  return (
    <footer id="footer" className="border-t-2 border-red-800 py-8 w-full bg-black mx-auto ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-white/80 font-serif">
        {/* Левая колонка */}
        <div className="text-center md:text-left space-y-2 text-sm md:text-base">
          <span className="block text-amber-100 uppercase tracking-wide">
            МЮЗИКЛ | Ресторан - кабаре бар | Псков
          </span>
          <p className="text-amber-100">Часы работы:</p>
          <ul className="space-y-1">
            <li>ВС–ЧТ — с 12:00 до 22:00</li>
            <li>ПТ–СБ — с 12:00 до 00:00</li>
          </ul>
        </div>

        {/* Правая колонка */}
        <div className="text-center md:text-right space-y-2 text-sm md:text-base">
          <p className="text-amber-100">Контакты:</p>
          <ul className="space-y-1">
            <li>+7 (900) 636-13-22</li>
            <li>@cabarete_bar</li>
            <li>Советская 53/15, Псков</li>
          </ul>
        </div>
      </div>

      {/* Нижний блок */}
      <div className="border-t max-w-5xl md:border-hidden border-amber-100 mt-8 md:mt-0 pt-4 md:pt-0 flex flex-col md:flex-row items-center gap-4 text-white/30 text-xs md:text-sm">
        {/* Тексты */}
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-start gap-2 md:gap-x-6 flex-1 text-center md:text-left pt-4">
          <p className="italic">@2025 CabaretBar — МЮЗИКЛ</p>
          <p className="hover:text-white transition-colors cursor-pointer">Политика конфиденциальности</p>
          <p className="hover:text-white transition-colors cursor-pointer">Оферта</p>
          <p className="hover:text-white transition-colors cursor-pointer">Сайт разработан</p>
        </div>

        {/* Логотип — снизу на мобильных, справа на десктопе */}
        <div className="md:ml-auto self-center">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={60}
            height={60}
            className="transition-transform duration-300 hover:rotate-6"
          />
        </div>
      </div>
    </footer>
  )
}
