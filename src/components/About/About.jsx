import React, { useEffect } from "react";
import aboutimage from "../../assets/aboutpage_image.png";
import { about_paras } from "./About_paras";
//package for animatin effects on scroll
import AOS from "aos";
import "aos/dist/aos.css";
import "../../index.css";


const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
    });
  }, []);
  return (
    <section
      id="about"
      name="about"
      className="font-Open_Sans bg-orange-100  w-full h-auto min-h-full"
      data-aos="fade-up"
    >
      <div className=" text-center pt-4">
        <p className="text-3xl font-extrabold capitalize text-transparent  bg-clip-text bg-gradient-to-r from-[#ec008c] to-[#0070f3]  drop-shadow-lg inline border-b-4 border-blue-500">
          About Us
        </p>
      </div>
      <div className="flex lg:flex-row flex-col duration-500 w-full lg:px-20 lg:py-10 p-5">
        <div className="text-lg text-gray-1100 lg:px-14  content-center">
          {about_paras.map((item) => (
            <div key={item.id}>
              <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {item.para}</p>
              <br />
            </div>
          ))}
        </div>
        <div className="w-auto h-auto lg:mt-8 p-2 max-h-60 Neomarphism">
          <iframe
            src="https://drive.google.com/file/d/1JVU079146_39p582Je36SaZ9y4r_vZgm/preview"
            className="w-auto h-auto max-h-60 rounded-lg text-black border-2 border-solid border-gray-800 shadow-md "
            allow="autoplay"
            allowFullScreen
          ></iframe>
          <div className="pt-6 px-2 font-bold text-center text-black">
            Click on the play button to know about us in a 1 min short video.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
