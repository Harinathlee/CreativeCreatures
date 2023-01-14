import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
//quotes icon
import { FaQuoteLeft } from "react-icons/fa";
import { reviews } from "./Reviews_data";
import img from "../../assets/man.png";
//package for animatin effects on scroll
import AOS from "aos";
import "aos/dist/aos.css";

import "../../index.css"
const Reviews = () => {
   useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
    });
  }, []);
  return (
    <section
      id="reviews"
      name="reviews"
      className="font-Open_Sans  w-full h-auto min-h-full pt-2 mt-4"
      data-aos="fade-up"
    >
      <div className=" text-center pt-4">
        <p className="text-3xl font-extrabold capitalize text-transparent  bg-clip-text bg-gradient-to-r from-[#ec008c] to-[#0070f3]  drop-shadow-lg inline border-b-4 border-blue-500">
          Reviews
        </p>
      </div>
      <div className="flex flex-col justify-center duration-500 w-full lg:px-20 lg:py-6 p-5">
        <div className="text-lg text-gray-1100 lg:px-14  content-center ">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {reviews.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="">
                <div className="flex items-center justify-center text-center flex-col px-20 pb-10 pt-4 w-full h-auto lg:max-h-[500px] Neomarphism">
                  <div className="avatar avatar-ring-primary avatar-lg">
                    <img src={img} alt="avatar" />
                  </div>

                  <p className="mt-2 font-bold">{testimonial.message}</p>
                  <FaQuoteLeft className="mt-8" />
                  <div className="flex items-center justify-center flex-col mt-4">
                    <p>
                      <span>{testimonial.name}</span>
                      <span className="p-2 text-blue-600 font-extrabold">
                        |
                      </span>
                      <span>{testimonial.designation}</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
