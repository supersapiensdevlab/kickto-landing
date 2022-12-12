import { Splide, SplideSlide } from "@splidejs/react-splide";
import shoe from "../../assets/images/shoe1.png";
import shoe2 from "../../assets/images/shoe2.png";

import shoe3 from "../../assets/images/shoe3.png";
import shoe4 from "../../assets/images/shoe4.png";
import tokenomics from "../../assets/Kickto Shoe Tree.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard, Autoplay, Pagination, Navigation } from "swiper";
import roadmap from "../../assets/vectors/roadmap-alt.svg";
import arrow from "../../assets/vectors/arrow.svg";
import 'reactflow/dist/style.css';
import ReactFlow, { Background, Controls } from 'reactflow';

import Tokenomics from "./tokenomics";

function four() {
  return (
    <div className=" min-h-screen w-full  text-primary/80  ">
        
      <div className="">
        <p className="text-5xl text-black/80 font-semibold text-left md:text-center    mx-4">
          Tokenomics
        </p>
        <div className="w-full py-6 lg:px-12">
          <img src={tokenomics} className="w-full" />
        </div>

        <div className="text-center items-center flex flex-col hidden">
          <div className="bg-primary/10 rounded-xl w-max  px-6 py-2  text-xl border border-primary/30">
            Buy Token
          </div>
          <img src={arrow} className="fill-white h-24 my-4" />

          <div className="bg-primary/10 rounded-xl w-max  px-6 py-2  text-xl border border-primary/30">
            Move to earn
          </div>
          <img src={arrow} className="fill-white h-24 my-4" />

          <div className="bg-primary/10 rounded-xl w-max  px-6 py-2  text-xl border border-primary/30">
            In-app wallet / swap
          </div>
        </div>
      </div>
    </div>
  );
}

export default four;
