
import Link from 'next/link'

export default function Header(){
  return (
    <header className="w-full border-b bg-white/80 backdrop-blur sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-purple-600 flex items-center justify-center text-white font-bold">SF</div>
          <Link href="/"><a className="font-semibold">SarosFlow</a></Link>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="/"><a className="text-sm">Home</a></Link>
          <Link href="/app"><a className="text-sm">App</a></Link>
        </nav>
      </div>
    </header>
  )
}
