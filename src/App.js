import './App.css';
import Home from "./components/Home/Home"
import About from './components/About/About';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [t, i18n] = useTranslation("global")
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      
    </>
  );
}

export default App;
