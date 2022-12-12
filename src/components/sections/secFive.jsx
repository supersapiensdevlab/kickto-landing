import shoe from "../../assets/images/shoe1.png";
import shoe2 from "../../assets/images/shoe2.png";
import Lottie from "lottie-react";
import lottie from "lottie-web";

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
  const [shoeStat, setShoeStat] = useState(0);

  return (
    <div className="hero min-h-screen   text-black/80 ">
      <div
        data-aos="fade-in"
        data-aos-duration="500"
        data-aos-offset="400"
        data-aos-easing="ease-in-out"
        className="   text-3xl font-semibold  border-gray-300 border rounded-xl align-middle items-center col-span-3 flex-col bg-white bg-opacity-10"
      >
        <div className="grid grid-cols-3  ">
          <div className="col-span-3 md:col-span-1 bg-primary/20 rounded-l-xl bg-opacity-10 pt-4 md:text-left text-center">
            <p className="px-6 text-primary ">Sneakers Details</p>
            <div className="flex-col text-base font-semibold md:mt-24  space-y-2 mt-4 lg:mx-4 md:mx-0 mx-12 mb-8">
              <p
                onMouseOver={() => setShoeStat(1)}
                className="hover:bg-primary hover:text-white cursor-pointer  p-4 rounded-lg "
              >
                Feature 1
              </p>
              <p
                onMouseOver={() => setShoeStat(2)}
                className="hover:bg-primary hover:text-white cursor-pointer  p-4 rounded-lg"
              >
                Feature 2
              </p>
              <p
                onMouseOver={() => setShoeStat(3)}
                className="hover:bg-primary hover:text-white cursor-pointer  p-4 rounded-lg"
              >
                Feature 3
              </p>
            </div>
          </div>
          <div className=" col-span-3 md:col-span-2 p-4 bg-primary bg-opacity-10 bg-blur-pattern ">
            <div className="flex-col flex justify-between">
              <div className="flex space-x-2">
                <div className="border bg-yellow-600 rounded-full h-6 w-6"></div>
                <div className="border bg-orange-600 rounded-full h-6 w-6"></div>
                <div className="border bg-pink-600 rounded-full h-6 w-6"></div>
                <div className="border bg-violet-600 rounded-full h-6 w-6"></div>
              </div>
              <div className="flex-col mt-6">
                <div className="flex align-middle items-center justify-between">
                  <p className="text-base">Performance </p>
                  <div
                    className={`rounded-lg w-${
                      shoeStat + 1
                    }/6 h-2 bg-primary mx-2`}
                  ></div>
                </div>
                <div className="flex align-middle items-center justify-between">
                  <p className="text-base">Fortune</p>
                  <div
                    className={`rounded-lg w-${
                      shoeStat + 2
                    }/6 h-2 bg-primary mx-2`}
                  ></div>
                </div>
                <div className="flex align-middle items-center justify-between">
                  <p className="text-base">Joy</p>
                  <div
                    className={`rounded-lg w-${
                      shoeStat + 1
                    }/6 h-2 bg-primary mx-2`}
                  ></div>
                </div>
                <div className="flex align-middle items-center justify-between">
                  <p className="text-base">Duration</p>
                  <div
                    className={`rounded-lg w-${
                      shoeStat + 3
                    }/6 h-2 bg-primary mx-2`}
                  ></div>
                </div>
              </div>
            </div>

            <img src={shoe2} className="w-full h-84 px-8" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Three;
