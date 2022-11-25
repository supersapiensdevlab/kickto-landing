import shoe from "../../assets/images/shoe1.png";
import arrow from "../../assets/vectors/arrow.svg";

import icon from "../../assets/images/icon1.png";
function hero() {
  return (
    <div className="hero     text-black/80 ">
      <div className="hero-content   flex flex-col  space-y-4  ">
        <div className="col-span-1  md:col-span-1 mt-4">
          <h1 className="text-5xl font-bold text-primary">
            Start Your Fitness Journey
          </h1>
          <p className="py-6">
            Your journey to beneficial fitness is just a few clicks away. With
            four simple steps, you can start earning KICKTO tokens by simply
            walking every day. Fitness has never been more fun, or profitable.
            Come, be a part of a fitness journey like no other.
          </p>
          <button className="btn   rounded-full border-none hover:scale-95 hover:bg-primary  bg-primary md:w-max  p-4 text-white  w-full px-12">
            Get Started
          </button>
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-11 grid-rows-flow gap-4 col-span-2 md:col-span-1 align-middle items-center">
          <div className="group hover:bg-purple-100 hover:text-white hover:drop-shadow-md p-6 border-gray-300 border rounded-xl h-full align-middle items-center sm:col-span-2 col-span-1 flex-col bg-white bg-opacity-10">
            <div className="w-full justify-between flex-col space-y-6">
              <div className="rounded-full  group-hover:bg-primary group-hover:text-white group-hover:drop-shadow-md   group-hover:border-primary bg-primary h-8 w-8 group-hover:w-max flex align-middle items-center transition-transform duration-700 px-3 mr-2 -mt-10 font-bold text-white">
                <p className="flex"><span className="group-hover:block hidden">Step&nbsp;</span>1</p>
              </div>

              <p className="group-hover:text-primary">Download Crypto exchange & Crypto Wallet App</p>
              <img src={icon} className="h-8 w-8" />
            </div>
          </div>

          <img src={arrow} className="fill-white h-16   mx-auto sm:-rotate-90" />

          <div className="group hover:bg-purple-100 hover:text-white hover:drop-shadow-md p-6 border-gray-300 border rounded-xl h-full align-middle items-center sm:col-span-2 col-span-1 flex-col bg-white bg-opacity-10">
            <div className="w-full justify-between flex-col space-y-6">
              <div className="rounded-full group-hover:bg-primary group-hover:text-white group-hover:drop-shadow-md   group-hover:border-primary bg-primary h-8 w-8 group-hover:w-max flex align-middle items-center transition-transform duration-700 px-3 mr-2 -mt-10 font-bold text-white">
                <p className="flex"><span className="group-hover:block hidden">Step&nbsp;</span>2</p>
              </div>

              <p className="group-hover:text-primary">Download Crypto exchange & Crypto Wallet App</p>
              <img src={icon} className="h-8 w-8" />
            </div>
          </div>

          <img src={arrow} className="fill-white h-16   mx-auto sm:-rotate-90 sm:hidden lg:block" />

          <div className="group hover:bg-purple-100 hover:text-white hover:drop-shadow-md p-6 border-gray-300 border rounded-xl h-full align-middle items-center sm:col-span-2 col-span-1 flex-col bg-white bg-opacity-10">
            <div className="w-full justify-between flex-col space-y-6">
              <div className="rounded-full group-hover:bg-primary group-hover:text-white group-hover:drop-shadow-md   group-hover:border-primary bg-primary h-8 w-8 group-hover:w-max flex align-middle items-center transition-transform duration-700 px-3 mr-2 -mt-10 font-bold text-white">
                <p className="flex"><span className="group-hover:block hidden">Step&nbsp;</span>3</p>
              </div>

              <p className="group-hover:text-primary">Download Crypto exchange & Crypto Wallet App</p>
              <img src={icon} className="h-8 w-8" />
            </div>
          </div>

          <img src={arrow} className="fill-white h-16   mx-auto sm:-rotate-90" />

          <div className="group hover:bg-purple-100 hover:text-white hover:drop-shadow-md p-6 border-gray-300 border rounded-xl h-full align-middle items-center sm:col-span-2 col-span-1 flex-col bg-white bg-opacity-10">
            <div className="w-full justify-between flex-col space-y-6">
              <div className="rounded-full group-hover:bg-primary group-hover:text-white group-hover:drop-shadow-md   group-hover:border-primary bg-primary h-8 w-8 group-hover:w-max flex align-middle items-center transition-transform duration-700 px-3 mr-2 -mt-10 font-bold text-white">
                <p className="flex"><span className="group-hover:block hidden">Step&nbsp;</span>4</p>
              </div>

              <p className="group-hover:text-primary">Download Crypto exchange & Crypto Wallet App</p>
              <img src={icon} className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default hero;
