import logo from './logo.svg';
import './App.css';
import Nav_Bar from './nav-elements/Nav_bar';

function App() {
  return (
    <main class="min-h-screen bg-cyan-50 dark:bg-cyan-950 text-slate-900 dark:text-cyan-50 font-poppins scroll-smoth scrollbar scrollbar-track-yellow-300" >
      <section className="max-w-4xl mx-auto" >
        <Nav_Bar />
      </section>   
    </main>
  );
}

export default App;
