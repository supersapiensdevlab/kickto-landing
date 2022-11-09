import shoes from "../../assets/images/shoes-group.png";
import blurElements from "../../assets/images/blur-elements.png";

function hero() {
  return (
    <div className="hero min-h-screen bg-blur-pattern  ">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="  grid sm:grid-flow-col sm:grid-cols-3  items-center align-middle">
          <h1 className="mb-5 text-5xl mt-12 sm:text-7xl font-bold col-span-1 text-white sm:text-left">
            Kickto <br></br> Realverse
          </h1>
          <img src={shoes} className="w-full  h-full col-span-1 sm:scale-150 " />
          <div className="col-span-1 sm:text-left   sm:pl-12   ">
            <h2 className="text-3xl font-bold text-white">A Revolution in Fitness</h2>
            <p className="mb-5 sm:max-w-xs text-white">
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
