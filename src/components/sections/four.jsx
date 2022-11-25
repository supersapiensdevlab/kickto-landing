import { Splide, SplideSlide } from "@splidejs/react-splide";
import shoe from "../../assets/images/shoe1.png";
import shoe2 from "../../assets/images/shoe2.png";

import shoe3 from "../../assets/images/shoe3.png";
import shoe4 from "../../assets/images/shoe4.png";

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
    <div className=" min-h-screen w-full  text-black/80 ">
      <p className="text-5xl text-black/80 font-semibold text-left md:text-center mt-6 mb-4 mx-4">
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
            <div className="flex flex-col justify-center items-center  h-full w-full bg-primary/10 border border-opacity-30 border-primary rounded-xl p-8">
              <img
                src={data.image}
                alt={data.altImg}
                className="object-center -rotate-12"
              />
              <div className="justify-between flex w-full align-middle  mt-12">
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
      <p className="text-5xl text-black/80 font-semibold text-left md:text-center mt-6 mb-4 mx-4">
        Roadmap
      </p>

      <div className="w-full py-12">
        <img src={roadmap} className="w-full" />
      </div>

      <div className="my-8">
        <p className="text-5xl text-black/80 font-semibold text-left md:text-center mt-6 mb-4 mx-4">
          Tokenomics
        </p>
        <div className="text-center items-center flex flex-col">
          <div className="bg-primary/10 rounded-xl w-max  px-6 py-2  text-xl border border-primary/30">
            In-app marketplace
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
