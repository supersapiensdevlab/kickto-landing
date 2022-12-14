import logo from "./logo.svg";
import "./App.css";
import "@splidejs/react-splide/css";
import React from "react";
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

import ReactFullpage from "@fullpage/react-fullpage";

const anchors = ["firstPage", "secondPage", "thirdPage"];

//const [showElement,setShowElement] = React.useState(true)
// useEffect(()=>{
//   setTimeout(function() {
//     setShowElement(false)
//        }, 3000);
//      },
//  [])

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollBar={false}
    fadingEffect={true}
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (<>
        <ReactFullpage.Wrapper><Navbar />
          <div className="section">
            <>
              {/* <video width="320" height="240" autoPlay loop>
              <source src={anim} type="video/mp4"/> 
            </video> */}
              

              <Hero />
              <One />
              {/* <SplashScreen  className={`${showElement?"opacity-100":"opacity-0"}`} />   */}
            </>
          </div>
         
          <div className="section">
            <Two />
          </div>
          <div className="section">
            <Three />
          </div>
          <div className="section">
            <Four />
          </div>
          <div className="section">
            <Five />
          </div>
          <div className="section">
            <FiveHalf />
          </div>
          <div className="section">
            <Six />
          </div>
          <div className="section">
            <SixHalf />
          </div>
          <div className="section">
            <Tokenomics />
            <Footer/>
          </div>
        </ReactFullpage.Wrapper>
        </>
      );
    }}
  />
);

// // Component for Splash Screen
// class SplashScreen extends React.Component {
//   render() {
//     const style = { top: 0, bottom: 0, right: 0, left: 0, position: "fixed" };

//     return (
//       <div className="w-full h-full  "  >
//       <video width="320" height="240" autoPlay  src={anim} style={style} className="w-screen bg-white h-full z-50">

//         </video></div>
//     );
//   }
// }
export default Fullpage;
