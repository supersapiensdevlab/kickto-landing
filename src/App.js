import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import One from "./components/sections/one";
import Two from "./components/sections/two";
import Three from "./components/sections/three";
import Footer from "./components/footer/footer";

function App() {
  return (
   
   <> <Navbar/>
   <div className='bg-black '>
    <Hero/>
    <One/>
    <Two/>
    <Three/>
    <Footer/></div>
     
    </>
    );
}

export default App;
