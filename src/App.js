import logo from "./logo.svg";
import "./App.css";
import "@splidejs/react-splide/css";

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import One from "./components/sections/one";
import Two from "./components/sections/secTwo";
import Three from "./components/sections/secThree";
import Four from "./components/sections/secFour";
import Five from "./components/sections/secFive";

import FiveHalf from "./components/sections/secFiveHalf";
import Six from "./components/sections/secSix";
import SixHalf from "./components/sections/secSixHalf";
import Seven from "./components/sections/secSeven";
import Footer from "./components/footer/footer";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";
import { FullPage, Slide } from "react-full-page";
import anim from "./assets/videos/anim.m4v";
import Tokenomics from "./components/sections/tokenomics";
function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      {/* <video width="320" height="240" autoPlay loop>
          <source src={anim} type="video/mp4"/> 
        </video> */}
      <Navbar />
       
        
          <Hero />
        

        
          <One />
        

        
          <Two />
        

        
          <Three />
        

        
          <Four />
        
        
          <Five />
        
        
          <FiveHalf />
        
        
          <Six />
        
        
          <SixHalf />
        
        
          <Seven />
        
        
          <Footer />
        
        
        <div className="h-screen">
        <Tokenomics/>
        </div>
       
    </>
  );
}

export default App;
