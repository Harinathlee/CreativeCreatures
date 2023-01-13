import React, { useEffect } from "react";
import aboutimage from "../../assets/aboutpage_image.png";
import { about_paras } from "./About_paras";
//package for animatin effects on scroll
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
    });
  }, []);
  return (
    <section
      id="about"
      name="about"
      className="font-Open_Sans  w-full h-auto min-h-full bg-orange-100 mt-2"
      data-aos="fade-up"
    >
      <div className=" text-center pt-4">
        <p className="text-3xl font-extrabold capitalize text-transparent  bg-clip-text bg-gradient-to-r from-[#ec008c] to-[#0070f3]  drop-shadow-lg inline border-b-4 border-blue-500">
          About Us
        </p>
      </div>
      <div className="flex lg:flex-row flex-col duration-500 w-full lg:px-20 lg:py-10 p-5">
        <div className="text-lg text-gray-900 font-bold lg:px-14  content-center">
          {about_paras.map((item) => (
            <div key={item.id}>
              <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {item.para}</p>
              <br />
            </div>
          ))}
        </div>
        <img src={aboutimage} alt="sad" className="lg:max-w-[35%]" />
      </div>
    </section>
  );
};

export default About;
