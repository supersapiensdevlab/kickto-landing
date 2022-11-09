import shoe from "../../assets/images/shoe1.png";

function hero() {
  return (
    <div className="hero min-h-screen   text-white ">
      <div className="hero-content   grid sm:grid-cols-2 ">
       
        <div className="col-span-1">
          <h1 className="text-5xl font-bold">What is Kickto?</h1>
          <p className="py-6">
          Kickto is a revolutionary Web 3 platform that brings together fitness and earning. Kickto allows you to make every step count with their amazing NFT sneakers that allow you earn KICKTO tokens every time you go out for a walk or your daily run. With time, you can earn and upgrade your NFT sneakers to level up your fitness.
Kickto’s NFT Marketplace allows you to choose from a variety of sneakers, each designed with a unique motive. Choose yours and get ready to earn more at every step.
          </p>
          <div className="grid grid-cols-2 gap-4 space-y-4">
            <div className="col-span-1">
            <h1 className="text-xl font-bold">Mechanics</h1>
            <p className="py-2 max-w-xs">
            With Kickto NFT shoes, each user gets to earn every time they step out of their home for a run. Every step counts and as users earn KICKTO tokens, they can upgrade their shoes, buy new or sell the old ones on the market place.
            </p>
            </div>
            <div className="col-span-1">
              <h1 className="text-xl font-bold">Mission</h1>
              <p className="py-2 max-w-xs">
              Our motive with Kickto is to make fitness lucrative. With most people stuck in a sedentary lifestyle, we wish to encourage them to care for their health by aiding their finances.
              </p>
            </div>
             
          </div>
          <div className="col-span-1">
            <h1 className="text-xl font-bold">Technology</h1>
            <p className="py-2  ">
            The Kickto Realverse is set to revolutionize the modern fitness space with Web 3 platforms. Our apps allow our users to become healthy while becoming wealthy.
            </p>
            </div>

          
        </div> 
        <div className="border rounded-2xl h-full align-middle items-center col-span-1 flex bg-white bg-opacity-10">
        <img src={shoe} className="" /></div>
      </div>
    </div>
  );
}

export default hero;
