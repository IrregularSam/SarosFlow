import React from "react";
export default function Header(){ return (
  <header className="flex items-center justify-between p-4 border-b border-slate-800">
    <div className="text-lg font-semibold">SarosFlow</div>
    <div className="text-sm text-slate-400">Wallet: —</div>
  </header>
) }