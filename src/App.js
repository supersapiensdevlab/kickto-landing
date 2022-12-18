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
import { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";
import { FullPage, Slide } from "react-full-page";
import anim from "./assets/videos/anim.m4v";
import Tokenomics from "./components/sections/tokenomics";
import Roadmap from "./components/sections/Roadmap";
import ReactFullpage from "@fullpage/react-fullpage";
import { motion, useMotionValue, useSpring } from "framer-motion";

const anchors = ["firstPage", "secondPage", "thirdPage"];

// const FullpageClass = () => (
//   <ReactFullpage
//     //fullpage options
//     licenseKey={"YOUR_KEY_HERE"}
//     scrollBar={false}
//     fadingEffect={true}
//     scrollingSpeed={200} /* Options here */
//     render={({ state, fullpageApi }) => {
//       return (
//         <>
//           <Navbar />
//           <ReactFullpage.Wrapper>
//             <div className="section  ">
//               <Hero />
//               <One />
//             </div>

//             <div className="section">
//               <Two />
//             </div>
//             <div className="section">
//               <Three />
//             </div>

//             <div className="section">
//               <Four />
//             </div>
//             <div className="section">
//               <Five />
//             </div>
//             <div className="section">
//               <FiveHalf />
//             </div>
//             <div className="section">
//               <Six />
//             </div>

//             <div className="section">
//               <Tokenomics />
           
//             </div>
//             <div className="section">
//               <Roadmap />
//               <Footer />
//             </div>

         
//           </ReactFullpage.Wrapper>
//         </>
//       );
//     }}
//   />
// );

function App() {
  const size = useWindowSize();
  const [showElement, setShowElement] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 3000);
  }, []);


  const handleScroll = () => {
    console.log('Scrolling...');
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
  
    // Remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  return (
    <>
      {size.width > 512 ? (
        <div>
          <Navbar />

          <Hero />
          <One />

          <Two />

          <Three />

          <Four />

          <Five />
          
          <FiveHalf />
          <Six />

          {/* <SixHalf /> */}

          {/* <Tokenomics /> */}
             
          <Roadmap />

          <Footer />
        </div>
      ) : (
        <div>
          {/* <FullpageClass /> */}
        </div>
      )}
    </>
  );
}

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    //window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    //return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

// Component for Splash Screen
class SplashScreen extends React.Component {
  render() {
    const style = { top: 0, bottom: 0, right: 0, left: 0, position: "fixed" };

    return (
      <div className="w-full h-full  ">
        <video
          width="320"
          height="240"
          autoPlay
          src={anim}
          style={style}
          className="w-screen bg-white h-full z-50"
        ></video>
      </div>
    );
  }
}
export default App;
