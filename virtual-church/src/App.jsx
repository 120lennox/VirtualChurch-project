import logo from './logo.svg';
import './App.css';
import{Routes, Route} from "react-router-dom"
import Buttons from './build_tools/Buttons';
import InputBox from './build_tools/InputBox';

function App() {
  return (
    <div>
      <InputBox type="text" placeholder="Enter email" />
      <br />
      <Buttons label="Login" width="w-40" />
      
    </div>
  );
}

export default App;
