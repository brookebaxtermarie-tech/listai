import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  return (
    <div style={{ maxWidth: 600, margin: '100px auto', padding: '0 20px' }}>
      <h1>Dashboard</h1>
      <p>Logged in as {user.email}</p>
      <p>This is where the listing tool will live.</p>
    </div>
  )
}