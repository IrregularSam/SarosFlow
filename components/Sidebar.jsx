import React from "react";
import Link from "next/link";
export default function Sidebar(){
  return (
    <aside className="w-64 bg-slate-950 p-4 hidden lg:flex flex-col">
      <div className="mb-6 text-white font-bold">Menu</div>
      <nav className="flex flex-col gap-2 text-sm">
        <Link href="/app"><a className="py-2 px-3 rounded hover:bg-slate-800">Dashboard</a></Link>
        <Link href="/app/strategy"><a className="py-2 px-3 rounded hover:bg-slate-800">Strategy</a></Link>
        <Link href="/app/analytics"><a className="py-2 px-3 rounded hover:bg-slate-800">Analytics</a></Link>
        <Link href="/app/settings"><a className="py-2 px-3 rounded hover:bg-slate-800">Settings</a></Link>
      </nav>
    </aside>
  )
}