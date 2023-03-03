import "@splidejs/react-splide/css";
import React from "react";
import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import One from "./sections/one";
import Two from "./sections/secTwo";
import Three from "./sections/secThree";
import Four from "./sections/secFour";
import Five from "./sections/secFive";
import Tokenomics from "../components/sections/tokenomics";
import FiveHalf from "./sections/secFiveHalf";
import Six from "./sections/secSix";
import SixHalf from "./sections/secSixHalf";
import Seven from "./sections/secSeven";
import Footer from "./footer/footer";
import { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";
import Roadmap from "./sections/Roadmap-back";
import Track from "./sections/Track.jsx";
import Partners from "./sections/Partners";
import NavbarAlt from "../components/navbar/Navbar-alt";

const LandingPage = () => {
  const [showElement, setShowElement] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 3000);
  }, []);

  return (
    <>
      <NavbarAlt />

      <Hero />
      <One />
      <Partners />
      <Two />

      <Three />

      <Four />

      <Five />
      <FiveHalf />
      <Six />
      <Track />
      <Tokenomics />
      <Footer />
    </>
  );
};

export default LandingPage;
