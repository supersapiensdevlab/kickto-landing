import shoe from "../../assets/images/shoe1.png";
import shoe2 from "../../assets/images/shoe2.png";
import Lottie from "lottie-react";
import lottie from 'lottie-web';

import shoe3 from "../../assets/images/shoe3.png";

import vector from "../../assets/vectors/shoe599.png";
import vector2 from "../../assets/vectors/shoe600.png";
import vector3 from "../../assets/vectors/shoe601.png";
import vector4 from "../../assets/vectors/shoe602.png";

import icon from "../../assets/images/icon1.png";
import shoehalf from "../../assets/images/shoes-half.png";
import coins from "../../assets/images/coins.png";
// import run from "../../assets/images/run.png";
import run2 from "../../assets/images/run2.png";
import run from "../../assets/run.json";
import cat from "../../assets/cat.json";
import social from "../../assets/social.json";
import { useState,useEffect,useRef } from "react";
 
function Three() {


  const [shoeStat,setShoeStat] = useState(0);

  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    console.log(rect);
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

 
  
 
  return (
    <div className="hero  md:my-16   text-black/80 ">
      <div className="hero-content   grid  grid-cols-3    gap-4">
        <div  className="p-6 w-full text-3xl font-semibold drop-shadow-lg border-primary  border-2 rounded-xl h-full align-middle items-center col-span-3 md:col-span-2 flex-col bg-white ">
 
          <div className="justify-between flex text-primary">
            <p>Get your NFT shoes to begin!</p>
            <div className="rounded-full bg-primary h-10 w-10 flex align-middle items-center text-white px-4 text-base   font-bold">
              <p>1</p>
            </div>{" "}
          </div>
          <div className="text-base font-normal">
            Your NFT shoes are crucial to earning KICKTO tokens. You have to
            pick the ones you like and switch that GPS on to begin your Kickto
            Journey.
          </div>
          <div id="shoe-box" className="grid grid-cols-2 items-center   mt-22 w-full     p-6 gap-12  ">
            <div  
               className="flex flex-col text-center  mx-auto mt-12">
              <img   src={vector} className="md:h-32 " />
               <h3 className=" text-primary font-bold text-base mt-4">Walker</h3>
            </div>
            <div className="flex flex-col  text-center mx-auto mt-12">
              <img   src={vector2} className="md:h-32 " />
              <p className="text-primary font-bold text-base mt-4">Jogger</p>
            </div>
            <div className="flex flex-col  text-center mx-auto mt-18">
              <img   src={vector3} className="md:h-32 " />
              <p className="text-primary font-bold text-base mt-4">Runner</p>
            </div>
            <div className="flex flex-col text-center  mx-auto mt-18">
              <img   src={vector4} className="md:h-32 " />
              <p className="text-primary font-bold text-base mt-4">Trainer</p>
            </div>
          </div>
        </div>

        <div   className="p-6 pb-0 text-3xl font-semibold  bg-center drop-shadow-md   border-primary border-2 rounded-xl h-full align-middle items-center col-span-3 md:col-span-1  flex-col bg-white ">
          <div className="justify-between flex text-primary">
            <p>Our in-app marketplace for your perfect shoes</p>
            <div className="rounded-full bg-primary h-10 w-12 flex align-middle items-center text-white text-base px-4  mr-2   font-bold">
              <p>2</p>
            </div>{" "}
          </div>
          <div className="text-base font-normal pt-4 ">
            Choose from our wide variety of NFT shoes, the ones best suited to
            your routine. Each shoe helps you earn KICKTO tokens differently.
            Own more shoes with time to grow on the platform. You can sell your
            old shoes on the same marketplace.
          </div>
          <img src={shoehalf} className=" h-max w-max  mt-auto pt-16 align-bottom mx-auto" />
        </div>
       
      </div>
    </div>
  );
}

export default Three;
