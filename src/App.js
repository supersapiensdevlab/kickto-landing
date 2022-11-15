import logo from './logo.svg';
import './App.css';
import '@splidejs/react-splide/css';

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import One from "./components/sections/one";
import Two from "./components/sections/two";
import Three from "./components/sections/three";
import Four from "./components/sections/four";
import Footer from "./components/footer/footer";

function App() {
  return (
   
   <><Navbar/>
   <div className='bg-black  '>
    <Hero/>
    <div className='px-4'>
    <One/>
    <Two/>
    <Three/>
    <Four/></div>
    <Footer/></div>
    </>
    );
}

export default App;
