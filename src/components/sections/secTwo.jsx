import shoe from "../../assets/images/shoe2.png";
import shoeMobile from "../../assets/images/shoe-mobile.svg";
import mobile from "../../assets/images/mobile-alt.png";
import { FullPage, Slide } from "react-full-page";
import DOTS from "vanta/dist/vanta.dots.min";
import React, { useState, useEffect, useRef } from "react";

function Hero() {
   const [vantaEffect, setVantaEffect] = useState(null);
 
  const myRef = useRef(null);
 
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect( DOTS({
        el: myRef.current,
        mouseControls: true,
  touchControls: false,
  gyroControls: true,
  minHeight: 200.00,
  minWidth: 100.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x7b3fe4,
  backgroundColor: "#7b3fe4",
  backgroundAlpha:0,
  showLines:false,
  spacing: 49.00,

      }))
    
}
return () => {
   if (vantaEffect) vantaEffect.destroy();

};
}, [vantaEffect]);
  return (
    
      <div  className="hero min-h-screen   text-black/80  ">
                <div ref={myRef} className="w-screen h-screen  ">  </div>

        <div   className=" hero-content  grid grid-cols-2   ">
          <div  className="col-span-2 md:col-span-1 ">
            <h1 
              className="text-5xl font-bold text-primary"
            >
              What is Kickto?
            </h1>
            <p
         
              className="py-6"
            >
              Kickto is a revolutionary Web 3 platform that brings together
              fitness and earning. Kickto allows you to make every step count
              with their amazing NFT sneakers that allow you earn KICKTO tokens
              every time you go out for a walk or your daily run. With time, you
              can earn and upgrade your NFT sneakers to level up your fitness.
              Kickto’s NFT Marketplace allows you to choose from a variety of
              sneakers, each designed with a unique motive. Choose yours and get
              ready to earn more at every step.
            </p>
            <div className="grid grid-cols-2 gap-4  ">
              <div
                 
                className="col-span-1 hidden"
              >
                <h1 className="text-xl font-extrabold text-primary">
                  Mechanics
                </h1>
                <p className="py-2 max-w-xs">
                  With Kickto NFT shoes, each user gets to earn every time they
                  step out of their home for a run. Every step counts and as
                  users earn KICKTO tokens, they can upgrade their shoes, buy
                  new or sell the old ones on the market place.
                </p>
              </div>
              <div
                 
                className="col-span-1 hidden"
              >
                <h1 className="text-xl font-extrabold text-primary">Mission</h1>
                <p className="py-2 max-w-xs">
                  Our motive with Kickto is to make fitness lucrative. With most
                  people stuck in a sedentary lifestyle, we wish to encourage
                  them to care for their health by aiding their finances.
                </p>
              </div>
            </div>
            <div
         
              className="col-span-1 hidden"
            >
              <h1 className="text-xl font-extrabold text-primary">
                Technology
              </h1>
              <p className="py-2  ">
                The Kickto Realverse is set to revolutionize the modern fitness
                space with Web 3 platforms. Our apps allow our users to become
                healthy while becoming wealthy.
              </p>
            </div>
          </div>
          <div
            
            className="drop-shadow-md border bg-blur-pattern mt-20 md:mx-6 rounded-2xl h-max py-12 align-middle items-center col-span-2 md:col-span-1 flex bg-white bg-opacity-10"
          >
            <img src={shoe} className="mx-auto p-5" />
          </div>
          

        </div>
      </div> 
  );
}

export default Hero;
