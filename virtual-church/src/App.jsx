import logo from './logo.svg';
import './App.css';
import{Routes, Route} from "react-router-dom"
import Buttons from './build_tools/Buttons';
import InputBox from './build_tools/InputBox';
import Nav_Bar from './nav-elements/Nav_bar';

function App() {
  return (
    <section className="flex sm:flex-col md:flex-col bg-slate-200 w-screen h-screen">
      <Nav_Bar />
      <main className="max-w-2xl" >
        
      </main>
    </section>
  );
}

export default App;
