import shoes from "../../assets/images/shoe-nft.webp";
import blurElements from "../../assets/images/blur-elements.png";
import React, { useState, useEffect, useRef } from "react";
import TRUNK from "vanta/dist/vanta.trunk.min";

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
        TRUNK({
          el: myRef2.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xffffff,
          backgroundColor: "#7b3fe4",
          spacing: 1.0,
          backgroundAlpha: 1,
        })
      );
    }
    return () => {
      if (vantaEffect2) vantaEffect2.destroy();
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="hero min-h-screen bg-transparent  h-screen ">
      <div className="hero-content text-center text-neutral-content z-50">
        <div className="  grid   lg:grid-cols-2 grid-cols-1  items-center align-middle p-4">
          <div>
            {/* <h1
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              className="mb-5 sm:mb-0 -mt-24  sm:mt-12  text-7xl md:text-9xl font-bold col-span-1 drop-shadow-md text-white sm:text-left italic"
            >
              Kickto
            </h1>
             */}

            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="1500"
              data-aos-easing="ease-in-out"
              className="w-full col-span-1 drop-shadow-md md:px-12 sm:px-8 "
            >
              <h1 className="text-7xl font-bold italic hero-title  text-left">Kickto</h1>
              <p className="text-lg  text-left">A revolution in Walk 2 Earn</p>
            </div>

            <p
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              className=" text-lg sm:text-left text-white drop-shadow-md hidden"
            >
              A revolution in Walk 2 Earn
            </p>
          </div>
          <img
            src={shoes}
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="1500"
            data-aos-easing="ease-in-out"
            className="  w-full   h-full  sm:block lg:scale-150   sm:p-6"
          />
          <div
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
          </div>
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
