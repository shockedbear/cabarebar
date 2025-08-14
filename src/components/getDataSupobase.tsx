import { supabase } from '@/lib/supabase'

export default async function getDataSupobase() {
  const { data: events, error } = await supabase
    .from('events')
    .select('*')
    .order('date', { ascending: true })

  if (error) {
    return <p className="text-red-500">Ошибка: {error.message}</p>
  }

  return (
    <div id='next-section' className="bg-black w-full py-16">
      <h1 className="text-5xl font-bold text-center font-serif text-amber-100 pb-10 border-b border-amber-100 max-w-4xl mx-auto">Афиша</h1>

      <div className="flex flex-wrap justify-center gap-10 px-5 mt-10">
        {events?.map(event => (
          <div
            key={event.id}
            className="bg-black border border-amber-100 shadow-xl rounded-xl p-6 max-w-sm transition-transform duration-300 hover:scale-105 w-100"
          >
            <h2 className="text-2xl font-bold text-amber-100 font-serif mb-2">{event.title}</h2>
            <p className="text-amber-50 mb-3">{event.description}</p>
            <p className="text-amber-200"><span className="font-semibold">Дата:</span> {new Date(event.date).toLocaleString()}</p>
            <p className="text-amber-200"><span className="font-semibold">Цена:</span> {event.price} €</p>
          </div>
        ))}
      </div>
    </div>
  )
}