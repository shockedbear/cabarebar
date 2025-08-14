export type PropsEventAll = {
    id: number,
    img: string,
    title: string,
    description: string,
    price: number,
    date: string,
}

export const EVENTSINFO: PropsEventAll[] = [
 {
        id: 1,
        img: '/images/trtr.png',
        title: 'Вечер французского кабаре',
        description: 'Погрузитесь в атмосферу парижской ночи с живой музыкой, танцами и изысканными костюмами.',
        price: 2500,
        date: '2025-08-20'
    },
    {
        id: 2,
        img: '/images/1233.png',
        title: 'Шоу-балет "Мулен Руж"',
        description: 'Захватывающее представление с элементами бурлеска, акробатики и яркого света.',
        price: 3000,
        date: '2025-08-22'
    },
    {
        id: 3,
        img: '/images/qwqw.png',
        title: 'Ночь джаза и кабаре',
        description: 'Живой оркестр, винтажные костюмы и настоящий дух 20-х годов.',
        price: 2200,
        date: '2025-08-25'
    },
]