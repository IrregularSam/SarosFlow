import AppShell from '../../components/AppShell';
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
export default function PAGE(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main><AppShell page="Settings"/></main>
</div>

        </main>
      </div>
    </div>
  )