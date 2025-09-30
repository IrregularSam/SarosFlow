import AppShell from '../../components/AppShell';
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
export default function PAGE(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main><AppShell page="Strategy"/></main>
</div>
<script>
        // Mock interaction to open slide-over. In a real app, this would be tied to clicking a canvas block.
        document.querySelector('.group.cursor-grab')?.addEventListener('click', () => {
            document.getElementById('slideover-panel').classList.add('open');
        });
         // Mock interaction to show simulation results
        document.querySelector('.bg-accent-blue.text-white')?.addEventListener('click', (e) => {
            e.preventDefault();
            const resultsPanel = document.getElementById('simulation-results');
            resultsPanel.classList.add('visible');
        });
        // CSS for toggle switch
        const style = document.createElement('style');
        style.innerHTML = \`
            .toggle-checkbox:checked {
                right: 0;
                border-color: #EF4444;
            .toggle-checkbox:checked + .toggle-label {
                background-color: #EF4444;
        \`;
        document.head.appendChild(style);
    </script>

        </main>
      </div>
    </div>
  )