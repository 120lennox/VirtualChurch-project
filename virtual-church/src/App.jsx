import logo from './logo.svg';
import './App.css';
import{Routes, Route} from "react-router-dom"
import Buttons from './build_tools/Buttons';
import InputBox from './build_tools/InputBox';
import Nav_Bar from './nav-elements/Nav_bar';
import Home from './nav-elements/Home';

function App() {
  return (
    <main class="min-h-screen bg-cyan-50 dark:bg-cyan-950 text-slate-900 dark:text-cyan-50 font-poppins scroll-smoth scrollbar scrollbar-track-yellow-300" >
      <section className="max-w-4xl mx-auto" >
        <Home />
      </section>
    </main>
  );
}

export default App;
