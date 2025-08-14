import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'


export default async function AdminPage() {
  const cookieJar = await cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () =>
          cookieJar.getAll().map((c) => ({ name: c.name, value: c.value })),
        setAll: (cookiesToSet) => {
          for (const cookie of cookiesToSet) {
            cookieJar.set(cookie.name, cookie.value, cookie.options)
          }
        },
      },
    }
  )


  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user || user.user_metadata.role !== 'admin') {
    redirect('/admin-login')
  }


  const { data: events, error: dataError } = await supabase
    .from('events')
    .select('*')

  if (dataError) {
    return <div>Ошибка загрузки данных: {dataError.message}</div>
  }

  return (
    <div className="p-8">
      <h1 className="text-white text-center text-3xl mb-8">Админка</h1>
      <table className="w-full text-white border-collapse border border-gray-600">
        <thead>
          <tr>
            <th className="border border-gray-600 p-2">ID</th>
            <th className="border border-gray-600 p-2">Название</th>
            <th className="border border-gray-600 p-2">Цена</th>
          </tr>
        </thead>
        <tbody>
          {events?.map(event => (
            <tr key={event.id} className="border border-gray-600">
              <td className="border border-gray-600 p-2">{event.id}</td>
              <td className="border border-gray-600 p-2">{event.title}</td>
              <td className="border border-gray-600 p-2">{event.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
