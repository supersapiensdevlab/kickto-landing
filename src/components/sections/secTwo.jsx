import shoe from "../../assets/images/shoe-details.png";
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
      setVantaEffect(
        DOTS({
          el: myRef.current,
          mouseControls: true,
          touchControls: false,
          gyroControls: true,
          minHeight: 200.0,
          minWidth: 100.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x7b3fe4,
          backgroundColor: "#7b3fe4",
          backgroundAlpha: 0,
          showLines: false,
          spacing: 49.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div className="hero my-12 md:my-16    text-black/80  " id="whatiskickto">
      <div ref={myRef} className="w-screen   hidden  "></div>

      <div className="  bg-white"></div>

      <div className=" hero-content  grid grid-cols-2   ">
        <div className="col-span-2 md:col-span-1  ">
          <h1 className="text-5xl font-bold text-primary ">What is Kickto?</h1>
          <p className="py-6">
            Kickto is a revolutionary Web 3 platform that brings together
            fitness and earning. Kickto allows you to make every step count with
            their amazing NFT sneakers that allow you earn KICKTO tokens every
            time you go out for a walk or your daily run. With time, you can
            earn and upgrade your NFT sneakers to level up your fitness.
            Kickto’s NFT Marketplace allows you to choose from a variety of
            sneakers, each designed with a unique motive. Choose yours and get
            ready to earn more at every step.
          </p>
          <div className="grid grid-cols-2 gap-4  ">
            <div className="col-span-1 hidden">
              <h1 className="text-xl font-extrabold text-primary">Mechanics</h1>
              <p className="py-2 max-w-xs">
                With Kickto NFT shoes, each user gets to earn every time they
                step out of their home for a run. Every step counts and as users
                earn KICKTO tokens, they can upgrade their shoes, buy new or
                sell the old ones on the market place.
              </p>
            </div>
            <div className="col-span-1 hidden">
              <h1 className="text-xl font-extrabold text-primary">Mission</h1>
              <p className="py-2 max-w-xs">
                Our motive with Kickto is to make fitness lucrative. With most
                people stuck in a sedentary lifestyle, we wish to encourage them
                to care for their health by aiding their finances.
              </p>
            </div>
          </div>
          <div className="col-span-1 hidden">
            <h1 className="text-xl font-extrabold text-primary">Technology</h1>
            <p className="py-2  ">
              The Kickto Realverse is set to revolutionize the modern fitness
              space with Web 3 platforms. Our apps allow our users to become
              healthy while becoming wealthy.
            </p>
          </div>
          <div className="grid  md:grid-cols-2 gap-6">
            <div className="text-left">
              <div className="font-bold text-primary">Mission</div>
              Our mission is to empower individuals to break free from a
              sedentary, screen-bound lifestyle and replace it with a dynamic,
              active one through our innovative Move-2-Earn program. We aim to
              make fitness accessible, enjoyable, and rewarding for everyone,
              ultimately fostering a healthier and happier society.
            </div>
            <div className="text-left">
              <div className="font-bold text-primary">Vision</div> Our vision is
              to revolutionize the way people think about fitness and health by
              creating a movement that inspires individuals to prioritize their
              well-being and actively earn rewards through physical activity.
            </div>
          </div>
        </div>
        <div className=" drop-shadow-md px-6 border-2 border-primary bg-blur-pattern mt-20 md:mx-6 rounded-2xl h-max py-12 align-middle items-center col-span-2 md:col-span-1 flex bg-white bg-opacity-10">
          <img src={shoe} className="mx-auto " />
        </div>
      </div>
    </div>
  );
}

export default Hero;
