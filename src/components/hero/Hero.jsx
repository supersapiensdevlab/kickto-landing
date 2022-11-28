import shoes from "../../assets/images/shoe-nft.png";
import blurElements from "../../assets/images/blur-elements.png";

function hero() {
  return (
    <div className="hero min-h-screen bg-blur-pattern  ">
      <div className="hero-overlay bg-opacity-0"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="  grid   lg:grid-cols-3 grid-cols-1  items-center align-middle p-4">
          <h1 data-aos="fade-right" 
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
     className="mb-5 text-5xl mt-12 sm:text-7xl font-bold col-span-1  text-primary sm:text-left italic">
            Kickto <br></br> Realverse
          </h1>
          <img  src={shoes} className="w-4/5   h-full   lg:scale-150  rotate-[30deg]  p-6" />
          <div data-aos="fade-left" 
    data-aos-duration="500"
    data-aos-easing="ease-in-out" className="col-span-1 sm:text-left   lg:pl-12   ">
            <h2 className="text-3xl font-bold text-black/80 text-primary">A Revolution in Fitness</h2>
            <p className="mb-5 lg:max-w-xs text-black/80">
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
