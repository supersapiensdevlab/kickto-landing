import shoe from "../../assets/images/89.webp";
import shoe2 from "../../assets/images/63.webp";
import Lottie from "lottie-react";
import lottie from "lottie-web";

import shoe3 from "../../assets/images/20.webp";

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
import { useState, useEffect } from "react";

import orangebox from "../../assets/images/orange-box.svg"
import bluebox from "../../assets/images/blue-box.svg"
import purplebox from "../../assets/images/purple-box.svg"
import shield from "../../assets/images/shield.gif"

function Three() {
  const [shoeStat, setShoeStat] = useState(0);
  useEffect(() => {
    // Initialize the variable
    let x = 0;

    // Set the interval in milliseconds (1000 milliseconds = 1 second)
    const interval = 5000;

    // Call the increment function at regular intervals
    setInterval(() => {
      // Increment the variable
      x += 1;

      setShoeStat(x);
      // Set the variable to 0 after 3
      if (x >= 3) {
        x = 0;
      }
    }, interval);

    // return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero min-h-screen   text-black/80  p-4 ">
      <div className="hero-content animate-border  rounded-3xl inline-block bg-white from-purple-200 via-blue-500 to-purple-500 bg-[length:400%_400%] p-1  bg-gradient-to-r  grid  grid-cols-3 ">
        <div className="  text-3xl font-semibold  border-gray-300/30   rounded-3xl align-middle items-center col-span-3 flex-col bg-white  ">
          <div className="grid grid-cols-4 border-0 ">
            <div className="col-span-4 md:col-span-1 bg-primary/50 sm:rounded-l-3xl sm:rounded-tr-none rounded-t-3xl   pt-4 md:text-left text-center">
              <p className="px-6 text-primary text-center mt-12">
                Sneakers Details
              </p>
              <div className="flex-col text-base font-semibold md:mt-24  space-y-2 mt-4 lg:mx-4 md:mx-0 mx-12 mb-8 text-primary text-center">
                <p
                  onMouseOver={() => setShoeStat(1)}
                  className={`${
                    shoeStat === 1 ? "bg-white text-primary" : "text-white"
                  }  hover:bg-white    hover:text-primary cursor-pointer  p-4 rounded-lg `}
                >
                  Quality
                </p>
                <p
                  onMouseOver={() => setShoeStat(2)}
                  className={`${
                    shoeStat === 2 ? "bg-white text-primary" : "text-white"
                  } hover:bg-white    hover:text-primary cursor-pointer  p-4 rounded-lg `}
                >
                  Health Power
                </p>
                <p
                  onMouseOver={() => setShoeStat(3)}
                  className={`${
                    shoeStat === 3 ? "bg-white text-primary" : "text-white"
                  } hover:bg-white    hover:text-primary cursor-pointer  p-4 rounded-lg `}
                >
                  Sneaker Characteristics
                </p>
              </div>
              <div className="rounded-full bg-white h-10 w-10 mt-auto  bottom-0 flex align-middle items-center text-primary text-base px-4  ml-2   font-bold">
              <p>3</p>
            </div>
            </div>
            <div className=" col-span-4 md:col-span-3   bg-primary bg-opacity-10 bg-blur-pattern rounded-3xl">
              <div className="flex-col flex justify-between mb-6 p-4">
                <div className="w-1/6 w-2/6 w-3/6 w-5/6 w-4/6 hidden w-6/6"></div>
                <div className="grid sm:grid-cols-2 text-primary">
                  <div>

                  <div className="flex space-x-2 w-full ml-auto ">
                    <div className="pt-2 pl-2 pr-3 pb-3 border drop-shadow-sm rounded-md bg-primary/30">
                  <img src={orangebox} className={`h-12 w-12 transition-all duration-500 ${
                  shoeStat == 1
                    ? "opacity-100":"opacity-0"
                }`}/>
                  </div>
                  <div className="pt-2 pl-2 pr-3 pb-3 border drop-shadow-sm rounded-md bg-primary/30">
                  <img src={bluebox} className={`h-12 w-12 transition-all duration-500 ${
                  shoeStat == 2
                    ?   "opacity-100":"opacity-0"
                }`}/>
                  </div>
                  <div className="pt-2 pl-2 pr-3 pb-3 border drop-shadow-sm rounded-md bg-primary/30">
                  <img src={purplebox} className={`h-12 w-12 transition-all duration-500 ${
                  shoeStat == 3
                    ?   "opacity-100":"opacity-0"
                }`}/>
                  </div>
                    </div>
                  </div>
                  <div className="flex-col ">
                    <div className="flex align-middle items-center justify-between">
                      <p className="text-base">Performance </p>
                      <div
                        className={`transition-all duration-300 rounded-lg w-${
                          shoeStat + 1
                        }/6 h-2 bg-primary mx-2`}
                      ></div>
                    </div>
                    <div className="flex align-middle items-center justify-between">
                      <p className="text-base">Fortune </p>
                      <div
                        className={`transition-all duration-300 rounded-lg w-${
                          shoeStat + 2
                        }/6 h-2 bg-primary mx-2`}
                      ></div>
                    </div>
                    <div className="flex align-middle items-center justify-between">
                      <p className="text-base">Joy</p>
                      <div
                        className={`transition-all duration-300 rounded-lg w-${
                          shoeStat + 1
                        }/6 h-2 bg-primary mx-2`}
                      ></div>
                    </div>
                    <div className="flex align-middle items-center justify-between">
                      <p className="text-base">Duration</p>
                      <div
                        className={`transition-all duration-300 rounded-lg w-${
                          shoeStat == 3 ? 2 : shoeStat + 3
                        }/6 h-2 bg-primary mx-2`}
                      ></div>
                    </div>
                  </div>
                  <div></div>
                  <div className="grid grid-cols-2 pr-3 mt-1">
                    {" "}
                    {/* <div className="flex space-x-2 w-full ml-auto  ">
                      <div className="border bg-yellow-600 rounded-full h-6 w-6"></div>
                      <div className="border bg-orange-600 rounded-full h-6 w-6"></div>
                      <div className="border bg-pink-600 rounded-full h-6 w-6"></div>
                      <div className="border bg-violet-600 rounded-full h-6 w-6"></div>
                    </div> */}
                     <div></div>
                    <div className="justify-end text-right flex align-middle ">
                   
                    <div className="mt-2">{shoeStat*33}/100 </div>
                    <img src={shield} className="h-12 w-12"/></div>
                    
                  </div>
                </div>
              </div>

              <img
                src={`${
                  shoeStat == 1
                    ? shoe
                    : shoeStat == 2
                    ? shoe2
                    : shoeStat == 3
                    ? shoe3
                    : shoe
                }`}
                className="w-fit h-84  "
              />
 <div className=" text-left mx-4    text-primary  ">{shoeStat}/3 </div>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Three;
