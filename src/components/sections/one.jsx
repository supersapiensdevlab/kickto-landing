import shoe from "../../assets/images/shoe1.png";
import shoeMobile from "../../assets/images/shoe-mobile.svg";
import mobile from "../../assets/images/mobile-alt.png";

function hero() {
  return (
    <div className=" ">
      <div className="grid grid-cols-3 px-4">  
        <div className="bg-primary/20 align-middle items-center  lg:w-4/5 rounded-3xl mx-auto col-span-3 border border-primary   h-3/4  grid md:grid-cols-2 grid-cols-1">
          <div className="flex flex-col    text-left">
            <p className="text-3xl font-bold items-center text-center   text-primary">Download Now</p>
            <p className="text-md italic items-center text-center text-black/80 ">Install the KICKTO App</p>
            <div class="flex justify-center my-4">
                    <div class="flex items-center   w-auto rounded-lg px-4 py-2 w-52 mx-2 bg-primary/20 hover:bg-primary/60 hover:text-black/80 cursor-pointer">
                        <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" class="w-7 md:w-8"/>
                        <div class="text-left ml-3">
                            <p class='text-xs text-slate-800/80'>Download on </p>
                            <p class="text-sm md:text-base text-black/80"> Google Play Store </p>
                        </div>
                    </div>
                    <div class="flex items-center   w-auto rounded-lg px-4 py-2 w-44 mx-2 bg-primary/20 hover:bg-primary/60 hover:text-black/80 cursor-pointer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" class="w-7 md:w-8"/>
                        <div class="text-left ml-3">
                            <p class='text-xs text-slate-800/80'>Download on </p>
                            <p class="text-sm md:text-base text-black/80"> Apple Store </p>
                        </div>
                    </div>
                </div>
          </div>
        <img src={mobile} className=" w-1/2  mx-auto md:-mt-32 drop-shadow-2xl" />
        </div>
        <div className="relative">
          <img src={shoeMobile} className="w-full h-96 hidden " />
          
        </div>
      </div>
      <div className="hero    text-black/80  ">
        <div className=" hero-content  grid sm:grid-cols-2  ">
          <div className="col-span-2 md:col-span-1 ">
            <h1 className="text-5xl font-bold text-primary">What is Kickto?</h1>
            <p className="py-6">
              Kickto is a revolutionary Web 3 platform that brings together
              fitness and earning. Kickto allows you to make every step count
              with their amazing NFT sneakers that allow you earn KICKTO tokens
              every time you go out for a walk or your daily run. With time, you
              can earn and upgrade your NFT sneakers to level up your fitness.
              Kickto’s NFT Marketplace allows you to choose from a variety of
              sneakers, each designed with a unique motive. Choose yours and get
              ready to earn more at every step.
            </p>
            <div className="grid grid-cols-2 gap-4  ">
              <div className="col-span-1">
                <h1 className="text-xl font-extrabold text-primary">Mechanics</h1>
                <p className="py-2 max-w-xs">
                  With Kickto NFT shoes, each user gets to earn every time they
                  step out of their home for a run. Every step counts and as
                  users earn KICKTO tokens, they can upgrade their shoes, buy
                  new or sell the old ones on the market place.
                </p>
              </div>
              <div className="col-span-1">
                <h1 className="text-xl font-extrabold text-primary">Mission</h1>
                <p className="py-2 max-w-xs">
                  Our motive with Kickto is to make fitness lucrative. With most
                  people stuck in a sedentary lifestyle, we wish to encourage
                  them to care for their health by aiding their finances.
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <h1 className="text-xl font-extrabold text-primary">Technology</h1>
              <p className="py-2  ">
                The Kickto Realverse is set to revolutionize the modern fitness
                space with Web 3 platforms. Our apps allow our users to become
                healthy while becoming wealthy.
              </p>
            </div>
          </div>
          <div className="border bg-blur-pattern mt-20 md:mx-6 rounded-2xl h-max py-12 align-middle items-center col-span-2 md:col-span-1 flex bg-white bg-opacity-10">
            <img src={shoe} className="mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default hero;
