import { EVENTSINFOALL } from "@/data/events.all.data"

type Props = {
    params: Promise<{ slug: string }>
}

export default async function AfishaPost({ params }: Props) {
    const { slug } = await params 
    const eventId = Number(slug)
    const event = EVENTSINFOALL.find(e => e.id === eventId)

    if (!event) {
        return <h1 className="text-white">Событие не найдено</h1>
    }

    return (
        <div className="max-w-5xl mx-auto mt-10 text-white">
            <div className="mx-6">
                <h1 className="text-center text-white text-6xl mb-5 font-stretch-50% ">Оформление билета</h1>
            </div>
            
           
        </div>
    )
}



