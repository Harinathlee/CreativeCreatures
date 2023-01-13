import React, { useEffect, useState } from "react";
//package for animatin effects on scroll
import AOS from "aos";
import "aos/dist/aos.css";

import { Segmented } from "antd";
import SampleVideos from "./SampleVideos";
import SampleEcards from "./SampleEcards";

const OurWork = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
    });
  }, []);
  const [type, setType] = useState("Videos");
  const toggleWork = () => {
    if (type === "Videos") {
      setType("E-Cards");
    } else {
      setType("Videos");
    }
  };
  return (
    <section
      id="ourwork"
      name="ourwork"
      className="font-Open_Sans  w-full h-auto min-h-full pt-2 mt-4"
      data-aos="fade-up"
    >
      <div className=" text-center pt-4">
        <p className="text-3xl font-extrabold capitalize text-transparent  bg-clip-text bg-gradient-to-r from-[#ec008c] to-[#0070f3]  drop-shadow-lg shadow-black inline border-b-4 border-blue-500">
          Our Work
        </p>
      </div>
      <div className="flex flex-col justify-center duration-500 w-full lg:px-20 lg:py-6 p-5">
        <div className="text-lg text-gray-1100 lg:px-14  content-center">
          <p>
            Here are a few samples of my work that impressed my very first
            clients and motivated me to establish a business using my skills.
            You can see two categories of my work: Videos and E-Cards, which you
            can click on to see my work in that category.
          </p>
        </div>
      </div>
      <div className="text-center">
        <Segmented
          options={["Videos", "E-Cards"]}
          size="large"
          className="font-bold bg-gradient-to-r from-[#ec008c] to-[#0070f3]  drop-shadow-lg text-black mb-4 p-1"
          onChange={toggleWork}
        />
        {type === "Videos" ? <SampleVideos /> : <SampleEcards />}
      </div>
    </section>
  );
};

export default OurWork;
