import shoe from "../../assets/images/shoe1.png";
import shoe2 from "../../assets/images/shoe2.png";
import Lottie from "lottie-react";
import lottie from 'lottie-web';

import shoe3 from "../../assets/images/shoe3.png";

import vector from "../../assets/gif/shoes.gif";
import vector2 from "../../assets/gif/shoes2.gif";
import vector3 from "../../assets/gif/shoes3.gif";
import vector4 from "../../assets/gif/shoes4.gif";

import icon from "../../assets/images/icon1.png";
import shoehalf from "../../assets/images/shoes-half.png";
import coins from "../../assets/images/coins.png";
// import run from "../../assets/images/run.png";
import run2 from "../../assets/images/run2.png";
import run from "../../assets/run.json";
import cat from "../../assets/cat.json";
import social from "../../assets/social.json";
import { useState } from "react";
 
function Three() {


  const [shoeStat,setShoeStat] = useState(0);


  return (
    <div className="hero min-h-screen   text-black/80 ">
      <div className="hero-content   grid  grid-cols-3    gap-4">
        <div data-aos="fade-right" 
    data-aos-duration="500"
    data-aos-delay="200"
    data-aos-offset="400"
    data-aos-easing="ease-in-out" className="p-6 w-full text-3xl font-semibold bg-blur-pattern  border-gray-300 border rounded-xl h-full align-middle items-center col-span-3 md:col-span-2 flex-col bg-white bg-opacity-10">
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
          <div className="grid grid-cols-2 items-center align-baseline w-full    p-6 gap-12">
            <div className="flex flex-col   mx-auto">
              <img src={vector} className="md:h-52 " />
               
            </div>
            <div className="flex flex-col   mx-auto">
              <img src={vector2} className="md:h-52 " />
               
            </div>
            <div className="flex flex-col   mx-auto">
              <img src={vector3} className="md:h-52 " />
               
            </div>
            <div className="flex flex-col   mx-auto">
              <img src={vector4} className="md:h-52 " />
               
            </div>
          </div>
        </div>

        <div data-aos="fade-left" 
    data-aos-duration="500"
    data-aos-offset="400"
    data-aos-easing="ease-in-out" className="p-6 pb-0 text-3xl font-semibold  border-gray-300 border rounded-xl h-full align-middle items-center col-span-3 md:col-span-1  flex-col bg-white bg-opacity-10">
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
