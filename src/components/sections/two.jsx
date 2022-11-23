import shoe from "../../assets/images/shoe1.png";

import icon from "../../assets/images/icon1.png";
function hero() {
  return (
    <div className="hero     text-black/80 ">
      <div className="hero-content   grid  grid-cols-2  space-y-4 gap-4">
        <div className="grid grid-cols-1 grid-rows-4 gap-4 col-span-2 md:col-span-1">
          <div className="p-6 border-gray-300 border rounded-xl h-full align-middle items-center sm:col-span-1 col-span-1 flex-col bg-white bg-opacity-10">
            <div className="w-full justify-between flex-col space-y-6">
              <div className="rounded-full bg-primary h-8 w-8 flex align-middle items-center pl-3 mr-2 -mt-10 font-bold text-white">
                <p>1</p>
              </div>

              <p>Download Crypto exchange & Crypto Wallet App</p>
              <img src={icon} className="h-8 w-8 text-primary" />
            </div>
          </div>
          <div className="p-6 border-gray-300 border rounded-xl h-full align-middle items-center  sm:col-span-1 col-span-1  flex-col bg-white bg-opacity-10">
            <div className="w-full justify-between flex-col space-y-6">
              <div className="rounded-full bg-primary h-8 w-8 flex align-middle items-center pl-3 mr-2 -mt-10 font-bold text-white">
                <p>2</p>
              </div>

              <p>Download Crypto exchange & Crypto Wallet App</p>
              <img src={icon} className="h-8 w-8" />
            </div>
          </div>
          <div className="p-6 border-gray-300 border rounded-xl h-full align-middle items-center sm:col-span-1 col-span-1 flex-col bg-white bg-opacity-10">
            <div className="w-full justify-between flex-col space-y-6">
              <div className="rounded-full bg-primary h-8 w-8 flex align-middle items-center pl-3 mr-2 -mt-10 font-bold text-white">
                <p>3</p>
              </div>

              <p>Download Crypto exchange & Crypto Wallet App</p>
              <img src={icon} className="h-8 w-8" />
            </div>
          </div>
          <div className="p-6 border-gray-300 border rounded-xl h-full align-middle items-center sm:col-span-1 col-span-1 flex-col bg-white bg-opacity-10">
            <div className="w-full justify-between flex-col space-y-6">
              <div className="rounded-full bg-primary h-8 w-8 flex align-middle items-center pl-3 mr-2 -mt-10 font-bold text-white">
                <p>4</p>
              </div>

              <p>Download Crypto exchange & Crypto Wallet App</p>
              <img src={icon} className="h-8 w-8" />
            </div>
          </div>
        </div>
        <div className="col-span-2  md:col-span-1 md:ml-12 space-y-2">
          <h1 className="text-5xl font-bold text-primary">
          Start Your <br></br>Fitness Journey
          </h1>
          <p className="py-6">
          Your journey to beneficial fitness is just a few clicks away. With four simple steps, you can start earning KICKTO tokens by simply walking every day. Fitness has never been more fun, or profitable.
Come, be a part of a fitness journey like no other. 

          </p>
          <button className="btn   rounded-full border-none hover:scale-95 hover:bg-primary  bg-primary md:w-max  p-4 text-white  w-full px-12">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default hero;
