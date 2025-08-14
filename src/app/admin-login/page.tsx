// app/admin-login/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'

export default function AdminLogin() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      alert(error.message)
      return
    }

    router.push('/admin')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 text-white placeholder-white"
      />
      <input
        type="password"
        placeholder="Пароль"
        onChange={(e) => setPassword(e.target.value)}
        className="border text-white placeholder-white p-2"
      />
      <button onClick={handleLogin} className="bg-black text-white px-4 py-2">
        Войти
      </button>
    </div>
  )
}
