import React, { useEffect} from "react";
import whatsapp from "../../assets/whatsapp.png";
import email from "../../assets/email.png";
import location from "../../assets/location.png";
import instagram from "../../assets/instagram.png";
import "../../index.css";
//package for animatin effects on scroll
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
    });
  }, []);
  const contacts = [
    {
      id: 1,
      value: "+91-9963371677",
      logo: whatsapp,
      link: "https://api.whatsapp.com/send?phone=%2B919963371677&text&app_absent=0",
    },
    {
      id: 4,
      logo: instagram,
      value: "creativecreatures_2023",
      link: "https://www.instagram.com/creative_creatures_2023/",
    },
    {
      id: 2,
      value: "harinathlee2598@gamil.com",
      logo: email,
      link: "mailto:harinathlee2598@gamil.com",
    },
    {
      id: 3,
      value: "Chittoor, Andhra Pradesh, India.",
      logo: location,
      link: "https://goo.gl/maps/ryupDZY1pAYFovRH9",
    },
  ];

  return (
    <section
      id="contact"
      name="contact"
      className="font-Open_Sans bg-orange-100 w-full h-auto min-h-full pt-2 mt-4"
      data-aos="fade-up"
    >
      <div className=" text-center pt-4">
        <p className="text-3xl font-extrabold capitalize text-transparent  bg-clip-text bg-gradient-to-r from-[#ec008c] to-[#0070f3]  drop-shadow-lg inline border-b-4 border-blue-500">
          Contact Us
        </p>
      </div>
      <div className="flex flex-col justify-center duration-500 w-full lg:px-20 lg:py-6 p-5 items-center">
        <div className="text-lg text-gray-1100 lg:px-14  content-center">
          <p className="leading-7 py-4">
            You can contact me at anytime through any of the following social
            media ways. Just one click on the logo will take you to my profile
            of that particular social media account.
          </p>
        </div>
        <div className="w-auto max-w-md Neomarphism lg:px-10 pl-2 py-2 font-bold my-5">
          {contacts.map((data) => (
            <a className="space-y-10 block py-4" key={data.id} href={data.link}>
              <img src={data.logo} alt="logo" className="w-6 inline-flex"></img>
              <span className="px-4">{data.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
