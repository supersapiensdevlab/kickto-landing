import shoe from "../../assets/images/shoe1.png";
import shoe2 from "../../assets/images/shoe2.png";

import shoe3 from "../../assets/images/shoe3.png";

import vector from "../../assets/vectors/shoe599.png";
import vector2 from "../../assets/vectors/shoe600.png";
import vector3 from "../../assets/vectors/shoe601.png";
import vector4 from "../../assets/vectors/shoe602.png";

import icon from "../../assets/images/icon1.png";
import shoehalf from "../../assets/images/shoes-half.png";
import coins from "../../assets/images/coins.png";
import run from "../../assets/images/run.png";
import run2 from "../../assets/images/run2.png";

function hero() {
  return (
    <div className="hero min-h-screen   text-white ">
      <div className="hero-content   grid  grid-cols-3    gap-4">
        <div className="p-6 w-full text-3xl font-semibold bg-blur-pattern  border-gray-300 border rounded-xl h-full align-middle items-center col-span-3 md:col-span-2 flex-col bg-white bg-opacity-10">
          <div className="justify-between flex">
            <p>Get your NFT shoes to begin!</p>
            <div className="rounded-full bg-slate-800 h-10 w-10 flex align-middle items-center text-base px-4 mr-2   font-bold">
              <p>1</p>
            </div>{" "}
          </div>
          <div className="text-base font-normal">
            Your NFT shoes are crucial to earning KICKTO tokens. You have to
            pick the ones you like and switch that GPS on to begin your Kickto
            Journey.
          </div>
          <div className="grid grid-cols-2 items-center align-baseline w-full   md:mt-36 p-6 gap-12">
            <div className="flex flex-col   mx-auto">
              <img src={vector} className="md:h-24 " />
              <p className="text-base text-center font-light mt-2">Hiker</p>
            </div>
            <div className="flex flex-col   mx-auto">
              <img src={vector2} className="md:h-24 " />
              <p className="text-base text-center font-light mt-2">Hiker</p>
            </div>{" "}
            <div className="flex flex-col   mx-auto">
              <img src={vector3} className="md:h-24 " />
              <p className="text-base text-center font-light mt-2">Hiker</p>
            </div>{" "}
            <div className="flex flex-col   mx-auto">
              <img src={vector4} className="md:h-24 " />
              <p className="text-base text-center font-light mt-2">Hiker</p>
            </div>
          </div>
        </div>

        <div className="p-6 pb-0 text-3xl font-semibold  border-gray-300 border rounded-xl h-full align-middle items-center col-span-3 md:col-span-1  flex-col bg-white bg-opacity-10">
          <div className="justify-between flex">
            <p>Our in-app marketplace for your perfect shoes</p>
            <div className="rounded-full bg-slate-800 h-10 w-12 flex align-middle items-center text-base px-4  mr-2   font-bold">
              <p>2</p>
            </div>{" "}
          </div>
          <div className="text-base font-normal pt-4 ">
            Choose from our wide variety of NFT shoes, the ones best suited to
            your routine. Each shoe helps you earn KICKTO tokens differently.
            Own more shoes with time to grow on the platform. You can sell your
            old shoes on the same marketplace.
          </div>
          <img src={shoehalf} className="  w-max pt-6 mx-auto" />
        </div>

        <div className="  pb-0 text-3xl font-semibold  border-gray-300 border rounded-xl h-full align-middle items-center col-span-3 flex-col bg-white bg-opacity-10">
          <div className="grid grid-cols-3 ">
            <div className="col-span-3 md:col-span-1 bg-orange-200 rounded-l-xl bg-opacity-10 pt-4 md:text-left text-center">
              <p className="px-6  ">Sneakers Details</p>
              <div className="flex-col text-base font-semibold md:mt-24  space-y-2 mt-4 lg:mx-4 md:mx-0 mx-12 mb-8">
                <p className="hover:bg-orange-700 cursor-pointer  p-4 rounded-lg ">
                  Higher Quality sockets boost attribute
                </p>

                <p className="hover:bg-orange-700 cursor-pointer  p-4 rounded-lg">
                  Higher Quality sockets boost attribute
                </p>

                <p className="hover:bg-orange-700 cursor-pointer  p-4 rounded-lg">
                  Higher Quality sockets boost attribute
                </p>
              </div>
            </div>
            <div className=" col-span-3 md:col-span-2 p-4 bg-orange-400 bg-opacity-10 bg-blur-pattern ">
              <div className="flex-col flex justify-between">
                <div className="flex space-x-2">
                  <div className="border bg-yellow-600 rounded-full h-6 w-6"></div>
                  <div className="border bg-orange-600 rounded-full h-6 w-6"></div>
                  <div className="border bg-pink-600 rounded-full h-6 w-6"></div>
                  <div className="border bg-violet-600 rounded-full h-6 w-6"></div>
                </div>
                <div className="flex-col">
                  <div className="flex align-middle items-center justify-between">
                    <p className="text-base">Performance</p>
                    <div className="rounded-lg w-52 h-2 bg-orange-500 mx-2"></div>
                  </div>
                  <div className="flex align-middle items-center justify-between">
                    <p className="text-base">Fortune</p>
                    <div className="rounded-lg w-52 h-2 bg-orange-500 mx-2"></div>
                  </div>
                  <div className="flex align-middle items-center justify-between">
                    <p className="text-base">Joy</p>
                    <div className="rounded-lg w-52 h-2 bg-orange-500 mx-2"></div>
                  </div>
                  <div className="flex align-middle items-center justify-between">
                    <p className="text-base">Duration</p>
                    <div className="rounded-lg w-52 h-2 bg-orange-500 mx-2"></div>
                  </div>
                </div>
              </div>

              <img src={shoe2} className="w-full h-84 px-8" />
            </div>
          </div>
        </div>

        <div className="py-6 pb-0 text-3xl font-semibold bg-blur-pattern  border-gray-300 border rounded-xl h-full align-middle items-center col-span-3  md:col-span-1 flex-col bg-white bg-opacity-10">
          <div className="justify-between flex px-6">
            <p>Our in-app marketplace for your perfect shoes</p>
            <div className="rounded-full bg-slate-800 h-10 w-10 flex align-middle items-center  px-4  mr-2 text-base font-bold">
              <p>2</p>
            </div> 
          </div>
          <div className="text-base font-normal pt-4 px-6">
            Choose from our wide variety of NFT shoes, the ones best suited to
            your routine. Each shoe helps you earn KICKTO tokens differently.
            Own more shoes with time to grow on the platform. You can sell your
            old shoes on the same marketplace.
          </div>
          <img
            src={shoe3}
            className="h-max w-max aspect-auto  translate -rotate-[30deg] mb-12 sm:mt-12 pr-4"
          />
        </div>

        <div className="col-span-3 md:col-span-2 ">
          <div className="p-6 text-3xl font-semibold mb-4 border-gray-300 border rounded-xl h-full align-middle items-center col-span-2 flex-col bg-white bg-opacity-10">
            <div className="justify-between flex mb-2">
              <p>
                Keep track of your <br></br>daily fitness routine
              </p>
              <div className="rounded-full bg-slate-800 h-10 w-10 flex align-middle items-center text-base px-4 mr-2   font-bold">
                <p>1</p>
              </div>{" "}
            </div>
            <div className="text-base font-normal">
              Your NFT shoes are crucial to earning KICKTO tokens. You have to
              pick the ones you like and switch that GPS on to begin your Kickto
              Journey.
            </div>
          </div>

          <div className="mt-4 sm:mt-0 p-4  text-3xl font-semibold grid grid-cols-3 border-gray-300 border rounded-xl h-full align-middle items-center col-span-2  bg-white bg-opacity-10">
            <div className="px-4 sm:mr-3 mb-2 sm:mb-0 col-span-3 sm:col-span-1 flex flex-col bg-orange-500 bg-opacity-10 pt-4 h-56 sm:h-96 rounded-lg align-middle items-center ">
              <div className="sm:pt-24 ">
                <img src={coins} className="mx-auto" />
                <p className="text-base mt-4">
                  Share your daily fitness on social channels
                </p>
              </div>
            </div>

            <div className="px-4 mb-2 sm:mb-0 sm:mr-3 col-span-3 sm:col-span-1 flex flex-col bg-orange-500 bg-opacity-10 pt-4 h-56 sm:h-96 rounded-lg align-middle items-center ">
              <div className="sm:pt-24">
                <p className="text-base">
                  Invite your friends to increase your token profit
                </p>{" "}
                <img src={run} className="mx-auto mt-4" />
              </div>
            </div>

            <div className="px-4 col-span-3 sm:col-span-1 flex flex-col bg-orange-500 bg-opacity-10 pt-4 h-56 sm:h-96 rounded-lg align-middle items-center ">
              <div className="sm:pt-24 ">
                <img src={run2} className="mx-auto" />
                <p className="text-base mt-4">
                  Share your daily fitness on social channels
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default hero;
