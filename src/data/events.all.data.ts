export type PropsEvent = {
    id: string,
    img: string,
    title: string,
    description: string,
    price: number,
    date: string,
}

export const EVENTSINFOALL: PropsEvent[] = [
    {
        id: "1",
        img: '/imagesForAfisha/shoy1.png',
        title: 'Вечер кабаре',
        description: 'Погрузитесь в атмосферу парижской ночи с живой музыкой, танцами и изысканными костюмами.',
        price: 2500,
        date: '2025-08-20'
    },
    {
        id: "2",
        img: '/imagesForAfisha/shoy2.png',
        title: 'Шоу-балет "Мулен Руж"',
        description: 'Захватывающее представление с элементами бурлеска, акробатики и яркого света.',
        price: 3000,
        date: '2025-08-22'
    },
    {
        id: "3",
        img: '/imagesForAfisha/shoy3.png',
        title: 'Ночь джаза и кабаре',
        description: 'Живой оркестр, винтажные костюмы и настоящий дух 20-х годов.',
        price: 2200,
        date: '2025-08-25'
    },
    {
        id: "4",
        img: '/imagesForAfisha/shoy1.png',
        title: 'Кабаре "Цвет ночи"',
        description: 'Театральное представление с музыкой, мимикой и световым шоу.',
        price: 2800,
        date: '2025-08-27'
    },
    {
        id: "5",
        img: '/imagesForAfisha/shoy2.png',
        title: 'Танцы и шампанское',
        description: 'Лёгкий вечер с выступлениями артистов и бесплатным бокалом шампанского каждому гостю.',
        price: 2000,
        date: '2025-08-30'
    },
    {
        id: "6",
        img: '/imagesForAfisha/shoy3.png',
        title: 'Burlesque Night',
        description: 'Откровенные костюмы, элегантные танцы и атмосфера настоящего бурлеск-клуба.',
        price: 3500,
        date: '2025-09-01'
    },
]
