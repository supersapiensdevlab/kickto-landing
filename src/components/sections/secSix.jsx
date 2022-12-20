import { Splide, SplideSlide } from "@splidejs/react-splide";
import shoe from "../../assets/images/shoe1.png";
import shoe2 from "../../assets/images/shoe2.png";
import shoe3 from "../../assets/images/carousel/5.png";
import shoe4 from "../../assets/images/carousel/10.png";
import shoe5 from "../../assets/images/carousel/19.png";
import shoe6 from "../../assets/images/carousel/20.png";
import shoe7 from "../../assets/images/carousel/23.png";
import shoe8 from "../../assets/images/carousel/28.png";
import shoe9 from "../../assets/images/carousel/29.png";
import shoe10 from "../../assets/images/carousel/40.png";
import shoe11 from "../../assets/images/carousel/42.png";
import shoe12 from "../../assets/images/carousel/53.png";
import shoe13 from "../../assets/images/carousel/58.png";
import shoe14 from "../../assets/images/carousel/63.png";
import shoe15 from "../../assets/images/carousel/72.png";
import shoe16 from "../../assets/images/carousel/80.png";
import shoe17 from "../../assets/images/carousel/89.png";
import shoe18 from "../../assets/images/carousel/95.png";

import tokenomics from "../../assets/Kickto Shoe Tree.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard, Autoplay, Pagination, Navigation } from "swiper";
import roadmap from "../../assets/vectors/roadmap-alt.svg";
import arrow from "../../assets/vectors/arrow.svg";

function four() {
  const carasoleData = [
     { image: shoe3, altImg: "img1", role: "Gamers", speed: "2-6 km/hr" },
    { image: shoe4, altImg: "img1", role: "Joggers", speed: "6-10 km/hr" },
    { image: shoe5, altImg: "img1", role: "Joggers", speed: "6-10 km/hr" },
    { image: shoe6, altImg: "img1", role: "Joggers", speed: "6-10 km/hr" },
    { image: shoe7, altImg: "img1", role: "Joggers", speed: "6-10 km/hr" },
    { image: shoe8, altImg: "img1", role: "Joggers", speed: "6-10 km/hr" },
    { image: shoe9, altImg: "img1", role: "Joggers", speed: "6-10 km/hr" },
    { image: shoe10, altImg: "img1", role: "Joggers", speed: "6-10 km/hr" },
    { image: shoe11, altImg: "img1", role: "Joggers", speed: "6-10 km/hr" },
    { image: shoe12, altImg: "img1", role: "Joggers", speed: "6-10 km/hr" },
    { image: shoe13, altImg: "img1", role: "Joggers", speed: "6-10 km/hr" },
    { image: shoe14, altImg: "img1", role: "Joggers", speed: "6-10 km/hr" },
    { image: shoe15, altImg: "img1", role: "Joggers", speed: "6-10 km/hr" },
    { image: shoe16, altImg: "img1", role: "Joggers", speed: "6-10 km/hr" },
    { image: shoe17, altImg: "img1", role: "Joggers", speed: "6-10 km/hr" },
    { image: shoe18, altImg: "img1", role: "Joggers", speed: "6-10 km/hr" },

  ];

  return (  
    <div className=" flex  items-center align-middle  w-full  text-primary/80  ">
      <p className="hidden text-5xl text-primary/80 font-semibold text-left md:text-center mt-6 mb-4 mx-4">
        Sneakers
      </p>
      
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Keyboard, Autoplay, Pagination, Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {carasoleData.map((data) => (
          <SwiperSlide className="flex flex-col justify-center  h-56 w-56  p-4">
            <div className="flex flex-col justify-center items-center  h-full w-full bg-primary/10 border border-opacity-30 border-primary rounded-xl  ">
              <img
                src={data.image}
                alt={data.altImg}
                className="object-center  "
              />
              <div className="justify-between flex w-full align-middle  mt-12 p-8">
                <p className="text-black/80 text-center font-bold text-2xl caption w-fit italic capitalize ">
                  {data.role}
                </p>
                <p className="font-bold  align-middle  caption w-fit italic opacity-50 pt-2">
                  {data.speed}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> 
    </div>
  );
}

export default four;
