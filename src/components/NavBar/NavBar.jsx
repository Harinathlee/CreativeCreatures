import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";
import { navitems } from "./NavItems"; //navbar links data
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/Creative.png";
const NavBar = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [scrollNav, setScroolNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroolNav(true);
    } else {
      setScroolNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <div
      className="navbar backdrop-blur-lg fixed-top text-[#ec008c] font-Roboto font-bold"
      scrollnav={scrollNav.toString()}
    >
      <div className="navbar-start">
        <a href="/">
          <img src={logo} alt="logo" className="h-12 w-18 m-0" />
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        {navitems.map((data) => {
          return (
            <Link
              activeClass="active"
              to='about'
              spy={true}
              smooth="true"
              offset={-70}
              duration={500}
              className="navbar-item text-lg active:underline"
              key={data.id}
            >
              {data.name}
            </Link>
          );
        })}
      </div>
      <div
        onClick={() => setIsMenuShown(!isMenuShown)}
        className="block lg:hidden cursor-pointer text-gray-900"
      >
        {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {isMenuShown ? (
        <div
          className={`w-full bg-gradient-to-b from-slate-50 te- to-slate-200 shadow-2xl absolute rounded-b-3xl z-10 left-0 h-fit py-5 lg:hidden flex justify-center text-center text-2xl duration-5000 ${
            isMenuShown ? "top-16 rounded-b-2xl" : "top-[-100%]"
          }`}
        >
          <ul>
            {navitems.map((data) => (
              <li key={data.id} className="p-4 capitalize cursor-pointer">
                <Link
                  onClick={() => setIsMenuShown(false)}
                  to={data.url}
                  smooth
                  duration={500}
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavBar;
