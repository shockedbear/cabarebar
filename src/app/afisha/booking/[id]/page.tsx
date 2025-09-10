import { EVENTSINFOALL } from "@/data/events.all.data"

export function generateStaticParams() {
  return EVENTSINFOALL.map(event => ({
    id: event.id
  }))
}

export default async function Booking({params}: {params: Promise<{ id: string }>})  {
  const {id} = await params

  const event = EVENTSINFOALL.find(e => e.id === id)
  if (!event) return <p>Событие не найдено</p>

  return (
    <div >
      <span
        data-tc-event-inline={event.dataTcEvent}
        data-tc-token={event.dataTcToken}
      ></span>
    </div>
  )
}
