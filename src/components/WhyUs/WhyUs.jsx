import React, { useEffect } from "react";
//package for animatin effects on scroll
import AOS from "aos";
import "aos/dist/aos.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { reasons } from "./WhyUsReasons";

const WhyUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
    });
  }, []);
  return (
    <section
      id="whyus"
      name="whyus"
      className="font-Open_Sans bg-orange-100 w-full h-auto min-h-full pt-2 mt-8"
      data-aos="fade-up"
    >
      <div className=" text-center pt-4">
        <p className="text-3xl font-extrabold capitalize text-transparent  bg-clip-text bg-gradient-to-r from-[#ec008c] to-[#0070f3]  drop-shadow-lg inline border-b-4 border-blue-500">
          Why To Choos us?
        </p>
      </div>
      <div className="flex flex-col justify-center duration-500 w-full lg:px-20 lg:py-6 p-5">
        <div className="text-lg text-gray-1100 font-bold lg:px-14  content-center ">
          <p className="leading-7 py-4">
            Do you have a question as why you should choose us? Don't worry I
            would provide you the reasons why we are better and what we serve if
            you choose us. Here are some of the top services we offer.
          </p>
          <div className="lg:px-24 p-1">
            {reasons.map((data) => (
              <p key={data.id} className="leading-8 font-normal">
                <BsFillPatchCheckFill className="inline mr-2 text-green-800 " />
                {data.reason}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
