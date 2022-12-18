import shoe from "../../assets/images/shoe1.png";
import shoe2 from "../../assets/images/shoe2.png";
import Lottie from "lottie-react";
import lottie from "lottie-web";

import shoe3 from "../../assets/images/shoe3.png";
import box from "../../assets/images/Kicktobox.png";

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
  const [shoeStat, setShoeStat] = useState(0);

  return (
    <div className="hero min-h-screen   text-black/80   ">
      <div className="hero-content       gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <div className="py-6 pb-0 text-3xl font-semibold bg-blur-pattern  border-2 border-primary rounded-xl   align-middle items-center col-span-3  md:col-span-1 flex-col bg-white bg-opacity-10">
            <div className="justify-between flex px-6 text-primary">
              <p>Our in-app marketplace for your perfect shoes</p>
              <div className="rounded-full bg-primary h-10 w-10 flex align-middle items-center  px-4  mr-2 text-white text-base font-bold">
                <p>2</p>
              </div>
            </div>
            <div className="text-base font-normal pt-4 px-6">
              Choose from our wide variety of NFT shoes, the ones best suited to
              your routine. Each shoe helps you earn KICKTO tokens differently.
              Own more shoes with time to grow on the platform. You can sell
              your old shoes on the same marketplace.
            </div>
            <img
              src={box}
              className="h-max w-72 mx-auto aspect-auto animate-bouncer    "
            />
          </div>
          <div className="col-span-3 md:col-span-2 ">
            <div className="p-4 text-3xl font-semibold mb-4 border-primary border-2 rounded-xl   align-middle items-center col-span-2 flex-col bg-white bg-opacity-10">
              <div className="justify-between flex mb-2 text-primary">
                <p>
                  Keep track of your <br></br>daily fitness routine
                </p>
                <div className="rounded-full bg-primary h-10 w-10 flex align-middle items-center text-white text-base px-4 mr-2   font-bold">
                  <p>1</p>
                </div>{" "}
              </div>
              <div className="text-base font-normal">
                Your NFT shoes are crucial to earning KICKTO tokens. You have to
                pick the ones you like and switch that GPS on to begin your
                Kickto Journey.
              </div>
            </div>

            <div className=" p-4 text-3xl font-semibold grid grid-cols-3   border-2 border-primary rounded-xl   col-span-2  bg-white bg-opacity-10">
              <div className="px-4 sm:mr-3 mb-2 sm:mb-0 col-span-3 sm:col-span-1 flex flex-col bg-primary bg-opacity-10 pt-4   sm:h-96 rounded-lg align-middle items-center ">
                <div className="  ">
                  <p className="text-base mt-4">
                    Share your daily fitness on social channels
                  </p>{" "}
                  <div className="w-full h-fit">
                    <Lottie
                      className="m-4  max-w-xs"
                      animationData={run}
                      speed={2}
                      loop={true}
                    />
                  </div>
                </div>
              </div>

              <div className=" px-4 mb-2 sm:mb-0 sm:mr-3 col-span-3 sm:col-span-1 flex flex-col bg-primary bg-opacity-10 pt-4   sm:h-96 rounded-lg align-middle items-center ">
                <div className=" ">
                  <p className="text-base mt-4">
                    Invite your friends to increase your token profit
                  </p>{" "}
                  <Lottie animationData={cat} loop={true} />{" "}
                </div>
              </div>

              <div className="px-4 col-span-3 sm:col-span-1 flex flex-col bg-primary bg-opacity-10 pt-4   sm:h-96 rounded-lg align-middle items-center ">
                <div className="  ">
                  <p className="text-base mt-4">
                    Share your daily fitness on social channels
                  </p>
                  <Lottie animationData={social} loop={true} />{" "}
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Three;
