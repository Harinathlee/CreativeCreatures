import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import bgimage from "../../assets/homepage_image.png";

const Home = () => {
  return (
    <section
      id="home"
      name="home"
      className="font-Open_Sans w-full h-auto min-h-screen text-center mt-16"
    >
      <div className=" flex lg:flex-row flex-col duration-500 w-full p-8">
        <div className=" justify-center">
          <p className="text-lg lg:p-6 text-gray-900 font-bold drop-shadow-md">
            Do you want to impress your Friends/Family with your wedding
            invitation? Then you are at the right place.
          </p>
          <h1 className="lg:py-2 py-3 lg:text-5xl text-3xl font-extrabold capitalize text-black ">
            We Heartly Welcome you to
            <span className="block text-transparent  bg-clip-text bg-gradient-to-r from-[#ec008c] via to-[#0070f3]  drop-shadow-lg">
              Creative Creatures
            </span>
          </h1>
          <div className="text-lg text-gray-900 font-bold lg:p-6">
            <p className="mt-2">What are you waiting? It is the new</p>
            <span className="text-xl text-blue-700">
              <Typewriter
                options={{
                  strings: ["#Trending", "#Trending"],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </span>
          </div>
          <button className="btn btn-error rounded-full self-start mt-2 text-lg hover:scale-110 hover:font-bold drop-shadow-xl shadow-xl bg-gradient-to-r from-[#ec008c] via to-[#0070f3]">
            <Link
              to="about"
              spy={true}
              smooth="true"
              offset={-70}
              duration={500}
            >
              Know More...
            </Link>
            <IoIosArrowDropdown />
          </button>
        </div>
        <img src={bgimage} alt="sad" className="relative top-0 flex" />
      </div>
      <div
        name="quote"
        className="w-full justify-center text-center text-lg h-auto"
      >
        <figure className="mx-auto max-w-screen-md text-center">
          <svg
            aria-hidden="true"
            className="mx-auto mb-2 w-5 h-5 text-gray-900"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p className="italic font-medium text-gray-800">
              "Satisfaction First,Settlement Next."
            </p>
          </blockquote>
          <figcaption className="flex justify-center items-center space-x-3 ">
            <div className="flex items-center divide-x-2 divide-gray-800 font-Roboto">
              <cite className="pr-3 text-orange-500 font-signature font-bold">
                harinathlee
              </cite>
              <cite className="pl-3 text-sm text-sky-500 font-Open_Sans">
                Founder
              </cite>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Home;
