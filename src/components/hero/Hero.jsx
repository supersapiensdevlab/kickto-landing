import shoes from "../../assets/images/shoe-nft.webp";
import blurElements from "../../assets/images/blur-elements.png";

function hero() {
  return (
    <div className="hero min-h-screen bg-blur-pattern  h-screen">
      <div className="hero-overlay bg-opacity-0"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="  grid   lg:grid-cols-2 grid-cols-1  items-center align-middle p-4">
          <div><h1 data-aos="fade-right" 
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
     className="mb-5 sm:mb-0 text-5xl mt-12 sm:text-9xl font-bold col-span-1  text-primary sm:text-left italic">
            Kickto  
            
          </h1><p data-aos="fade-right" 
    data-aos-duration="500"
    data-aos-easing="ease-in-out" className=" text-lg sm:text-left text-primary">A revolution in Walk 2 Earn</p></div>
          <img  src={shoes} className="w-4/5   h-full   lg:scale-150  rotate-[30deg]  p-6" />
          <div data-aos="fade-left" 
    data-aos-duration="500"
    data-aos-easing="ease-in-out" className="col-span-1 sm:text-left hidden  lg:pl-12   ">
            <h2 className="text-3xl font-bold text-black/80 text-primary">A Revolution in Walk2Earn</h2>
            <p className="mb-5 hidden lg:max-w-xs text-black/80">
              Kickto is changing the way people perceive fitness, making you
              rich while you get fit. With Kickto NFT sneakers, you earn while
              you run!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default hero;
