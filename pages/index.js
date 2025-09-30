
import Header from '../components/Header'
import Link from 'next/link'
export default function Home(){
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-20">
        <section className="text-center">
          <h1 className="text-4xl font-extrabold mb-4">Automated Liquidity, Simplified.</h1>
          <p className="text-gray-600 mb-8">Rebalance, simulate, and analyze your Saros DLMM positions with ease.</p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/app"><a className="px-6 py-3 bg-purple-600 text-white rounded">Launch App</a></Link>
            <a href="#features" className="px-6 py-3 border rounded">Learn More</a>
          </div>
        </section>
        <section id="features" className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded shadow">
            <h3 className="font-semibold mb-2">Strategy Automation</h3>
            <p className="text-sm text-gray-600">Set auto-rebalancing rules and let SarosFlow handle the rest.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="font-semibold mb-2">Simulation</h3>
            <p className="text-sm text-gray-600">Test strategies risk-free before deploying live.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="font-semibold mb-2">Analytics</h3>
            <p className="text-sm text-gray-600">Track performance, fees earned, and IL vs HODL.</p>
          </div>
        </section>
      </main>
    </>
  )
}
