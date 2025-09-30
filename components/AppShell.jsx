import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import TransactionsTable from "./TransactionsTable";
import useDemoData from "../hooks/useDemoData";

export default function AppShell({ page }) {
  const { demoMode, mockPositions, mockTransactions } = useDemoData();
  return (
    <div className="flex h-screen bg-slate-900 text-slate-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="col-span-2">
              <div className="rounded-2xl bg-slate-800 p-6 shadow">
                <h2 className="text-lg font-semibold mb-2">Dashboard — {page}</h2>
                <p className="text-sm text-slate-400 mb-4">Demo Mode: {demoMode ? "ON" : "OFF"}</p>
                <div className="grid grid-cols-2 gap-4">
                  {mockPositions.slice(0,2).map((p,i)=>(
                    <div key={i} className="p-4 bg-slate-700 rounded-lg">
                      <div className="text-xs text-slate-400">{p.pair}</div>
                      <div className="text-xl font-bold">{p.value}</div>
                      <div className="text-sm text-slate-300">{p.drft} drift • Fees {p.fees}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-2xl bg-slate-800 p-6 shadow">
                <h3 className="text-base font-semibold mb-2">Quick Actions</h3>
                <button className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600">Launch App</button>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <div className="rounded-2xl bg-slate-800 p-6 shadow">
              <h3 className="text-base font-semibold mb-4">Transactions</h3>
              <TransactionsTable transactions={mockTransactions} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
