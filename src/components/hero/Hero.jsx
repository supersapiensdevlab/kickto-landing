import shoes from "../../assets/images/1386.webp";
import blurElements from "../../assets/images/blur-elements.png";
import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";

import * as THREE from "three";
import logoWhite from "../../assets/images/kickto-logo-text-white.svg";

function Hero() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const [vantaEffect2, setVantaEffect2] = useState(null);

  const myRef = useRef(null);
  const myRef2 = useRef(null);

  useEffect(() => {
    if (!vantaEffect2) {
      setVantaEffect2(
        BIRDS({
          el: myRef2.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color1: "#7b3fe4",
          color2: "#7b3fe4",
          backgroundColor: "#e4d7f9",
        })
      );
    }
    return () => {
      if (vantaEffect2) vantaEffect2.destroy();
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="hero min-h-screen bg-transparent  h-screen  overflow-hidden">
      <div className="hero-content text-center text-neutral-content z-50">
        <div className="  grid   lg:grid-cols-2 grid-cols-1  items-center align-middle p-4">
          <img
            src={shoes}
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="1500"
            data-aos-easing="ease-in-out"
            className="  w-full   h-full     rotate-[30deg] col-span-1"
          />
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="1500"
            data-aos-easing="ease-in-out"
            className="w-full col-span-1 drop-shadow-md  "
          >
            <p className="text-3xl font-bold italic hero-title  text-left text-primary">
              Kickto
            </p>
            <p className="text-lg  text-left text-primary font-semibold">
              A revolution in Move 2 Earn
            </p>
          </div>

          {/* <div
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            className="col-span-1 sm:text-left hidden  lg:pl-12   "
          >
            <h2 className="text-3xl font-bold text-black/80 text-primary">
              A Revolution in Walk2Earn
            </h2>
            <p className="mb-5 hidden lg:max-w-xs text-black/80">
              Kickto is changing the way people perceive fitness, making you
              rich while you get fit. With Kickto NFT sneakers, you earn while
              you run!
            </p>
          </div> */}
        </div>
      </div>

      <div ref={myRef} className="w-screen h-screen hidden md:block ">
        {" "}
      </div>
      <div
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        ref={myRef2}
        className="w-screen h-screen  "
      >
        {" "}
      </div>
    </div>
  );
}

export default Hero;
