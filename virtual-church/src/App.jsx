import logo from './logo.svg';
import './App.css';
import{Routes, Route} from "react-router-dom"
import Buttons from './build_tools/Buttons';

function App() {
  return (
    <div>
      <Buttons type="submit" value="Login" />
    </div>
  );
}

export default App;
