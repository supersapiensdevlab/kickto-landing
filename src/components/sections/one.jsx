import shoe from "../../assets/images/shoe1.png";
import shoeMobile from "../../assets/images/shoe-mobile.svg";
import mobile from "../../assets/images/mobile-alt.png";
import { FullPage, Slide } from 'react-full-page';

function hero() {
  return (
    <div className="h-screen hero">
      <div className="grid grid-cols-3 px-4 hero-content">  
        <div className="bg-primary/20 align-middle items-center  lg:w-4/5 rounded-3xl mx-auto col-span-3 border border-primary   h-3/4  grid md:grid-cols-2 grid-cols-1">
          <div className="flex flex-col  mt-6 md:-mt-16  text-left">
            <p  data-aos="fade-in" 
    data-aos-duration="500"
    data-aos-easing="ease-in-out"  className="text-3xl font-bold items-center text-center   text-primary">Coming Soon on</p>
            <p  data-aos="fade-in" 
    data-aos-duration="500"
    data-aos-easing="ease-in-out"  className="text-md italic items-center text-center text-black/80 hidden"> KICKTO App</p>
            <div  data-aos="fade-in" 
    data-aos-duration="500"
    data-aos-easing="ease-in-out"  class="flex justify-center my-4">
                    <div class="flex items-center   w-auto rounded-lg px-4 py-2 w-52 mx-2 bg-primary/20 hover:bg-primary/60 hover:text-black/80 cursor-pointer">
                        <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" class="w-7 md:w-8"/>
                        <div class="text-left ml-3">
                            <p class='text-xs text-slate-800/80 hidden'>Download on </p>
                            <p class="text-sm md:text-base text-black/80 flex block"> Google Play Store </p>
                        </div>
                    </div>
                    <div class="flex items-center   w-auto rounded-lg px-4 py-2 w-44 mx-2 bg-primary/20 hover:bg-primary/60 hover:text-black/80 cursor-pointer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" class="w-7 md:w-8"/>
                        <div class="text-left ml-3">
                            <p class='text-xs text-slate-800/80 hidden'>Download on </p>
                            <p class="text-sm md:text-base text-black/80"> Apple Store </p>
                        </div>
                    </div>
                </div>
          </div>
        <img  src={mobile} className=" w-1/2 rotate-[5deg]     mx-auto md:-mt-32 drop-shadow-2xl" />
        </div>
        <div className="relative">
          <img src={shoeMobile} className="w-full h-96 hidden " />
          
        </div>
      </div>
      
    </div>
  );
}

export default hero;
