
import Link from 'next/link'

export default function Sidebar(){
  return (
    <aside className="w-64 hidden md:block border-r bg-white/80">
      <div className="px-4 py-6">
        <nav className="flex flex-col gap-2">
          <Link href="/app"><a className="px-3 py-2 rounded hover:bg-purple-50">Dashboard</a></Link>
          <Link href="/app/strategy"><a className="px-3 py-2 rounded hover:bg-purple-50">Strategy</a></Link>
          <Link href="/app/analytics"><a className="px-3 py-2 rounded hover:bg-purple-50">Analytics</a></Link>
          <Link href="/app/settings"><a className="px-3 py-2 rounded hover:bg-purple-50">Settings</a></Link>
        </nav>
      </div>
    </aside>
  )
}
