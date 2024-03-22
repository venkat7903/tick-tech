import React from "react";
import logo from "../../assets/Vector.png";
import logo1 from "../../assets/Group 15.png";
import { FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import Popup from "reactjs-popup";

import "./index.css";
import ThemeContext from "../../ThemeContext";

const Header = () => {
  const links = [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: "About",
      href: "/about",
    },
    {
      id: 3,
      name: "Resume",
      href: "/resume",
    },
    {
      id: 4,
      name: "Skills",
      href: "/skills",
    },
    {
      id: 5,
      name: "Projects",
      href: "/projects",
    },
    {
      id: 6,
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDarkTheme, toggleTheme } = value;
        const webImg = isDarkTheme ? logo1 : logo;
        return (
          <nav className="py-[20px]">
            <div className="sub-nav">
              <div className="name-container">
                <img src={webImg} alt="logo" />
                <p className="name">ANISH KUMAR SINHA</p>
              </div>
              <ul className="hidden md:flex justify-between items-center w-[60%]">
                {links.map(({ id, name, href }) => (
                  <li
                    className="font-md nav-link hover:scale-105 hover:text-red-600 duration-300"
                    key={id}
                  >
                    <a
                      href={href}
                      className="anchor-link"
                      //   style={{ color: `${isDarkTheme ? "#fff" : "#000"}` }}
                    >
                      {name}
                    </a>
                  </li>
                ))}
                <div
                  className="cursor-pointer hover:scale-110 duration-300"
                  onClick={() => toggleTheme()}
                >
                  {isDarkTheme ? (
                    <IoSunnySharp size={25} />
                  ) : (
                    <FaMoon size={25} />
                  )}
                </div>
              </ul>

              <div className="flex justify-end items-center grow md:hidden">
                <div
                  className="cursor-pointer mr-[15px] hover:scale-110 duration-300"
                  onClick={() => toggleTheme()}
                >
                  {isDarkTheme ? (
                    <IoSunnySharp size={25} />
                  ) : (
                    <FaMoon size={25} />
                  )}
                </div>
                <div>
                  <Popup
                    modal
                    trigger={
                      <button className="flex items-center cursor-pointer hover:scale-110 duration-300">
                        <FaBars size={25} />
                      </button>
                    }
                  >
                    {(close) => (
                      <div className="bg-gray-500 w-screen h-screen flex flex-col p-[20px]">
                        <button
                          onClick={() => close()}
                          className="self-end hover:scale-125"
                        >
                          <FaTimes size={25} className="text-white" />
                        </button>
                        <ul className="flex flex-col w-full h-full items-center justify-center">
                          {links.map((each) => (
                            <li
                              key={each.id}
                              className="text-2xl text-white font-md mb-[15px] hover:scale-105 hover:text-red-600 duration-200"
                            >
                              <a href={each.href}>{each.name}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </Popup>
                </div>
              </div>

              <ul></ul>
            </div>
          </nav>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Header;
