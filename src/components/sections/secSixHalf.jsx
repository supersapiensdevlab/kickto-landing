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

function four() {
  const carasoleData = [
    { image: shoe2, altImg: "img1", role: "Runners", speed: "6-10 km/hr" },
    { image: shoe3, altImg: "img1", role: "Gamers", speed: "2-6 km/hr" },
    { image: shoe4, altImg: "img1", role: "Joggers", speed: "6-10 km/hr" },
  ];

  return (
    <div className=" min-h-screen w-full  text-primary/80  ">
      
      <p className="text-5xl text-primary/80 font-semibold text-left md:text-center  mb-4 mx-4">
        Roadmap
      </p>
      <div className="w-full py-12">
        <img src={roadmap} className="w-full" />
        <div id="my-div"></div>

      </div>
    </div>
  );
}
export default four;
