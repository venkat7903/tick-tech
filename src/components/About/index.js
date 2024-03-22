import React from "react";
import Header from "../Header";

import Hand from "../../assets/Rectangle.png";
import vector4 from "../../assets/Vector 4.png";
import vector5 from "../../assets/Vector 5.png";
import vector3 from "../../assets/Vector 3.png";
import mail from "../../assets/Email.png";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";

import "./index.css";

const About = () => {
  const links = [
    {
      id: 1,
      href: "",
      icon: FaFacebook,
    },
    {
      id: 2,
      href: "",
      icon: FaInstagram,
    },
    {
      id: 3,
      href: "",
      icon: FaTwitter,
    },
    {
      id: 4,
      href: "",
      icon: FaLinkedin,
    },
    {
      id: 5,
      href: "",
      icon: FaTelegram,
    },
    {
      id: 6,
      href: "",
      icon: FaGithub,
    },
  ];

  return (
    <div>
      <Header />
      <div className="w-screen min-h-screen flex flex-col">
        <div className="flex flex-col w-full">
          <div className="flex w-full justify-center md:justify-between md:items-center">
            <div className="hand-container hidden md:block">
              <img src={Hand} alt="hand" />
            </div>

            <div className="flex flex-col items-center w-[90%] md:w-[50%]">
              <div className="flex items-center w-full">
                <h1 className="text-2xl mr-[50px]">
                  <span className="text-4xl font-bold">T</span>
                  his is it. ;)
                </h1>
                <hr className="grow h-[2px] bg-gray-500 self-end" />
              </div>
              <p className="mt-[20px]">
                Anish Kr. Sinha is an{" "}
                <span className="font-semibold">
                  Indian UI/UX Designer & Front End Developer
                </span>
                with a passion for designing beautiful and fuctional user
                experiences. Typically, he’s Driven & permanently Curious. He’s
                obsessed with designing things and even more obsessed with
                designing cool & clean stuff for the web and mobile. He has been
                in the business of creating since he hung his first painting on
                the wall when he was 11. He holds a bachelor degree in Computer
                Applications. During his graduation, he has been actively
                involved in the web design community for the last 3 years. he
                has designed websites for small businesses, events, nonprofits
                and more. Currently he’s based in Bihar, India. Where he’s
                working as an independent creative. His interests, however,
                extend beyond the web and he loves helping people with branding
                and print design. He even loves designing 3D floor plan. When
                he’s not designing, he’s probably hanging out with his
                girlfriend, watching series, sketching or messing around on
                something inspired by YouTube tutorials.
              </p>
            </div>
            <img
              src={vector3}
              className="h-[500px] hidden md:block"
              alt="vector"
            />
          </div>
          <div className="hidden md:flex justify-between pb-[20px] items-start w-[80%] self-center">
            <img src={vector4} alt="vector" className="w-[350px]" />
            <hr className="w-[200px] h-[2px] bg-gray-500" />
            <img src={vector5} alt="vector" className="w-[350px]" />
          </div>
        </div>
      </div>
      <ul className="hidden md:block fixed top-[40%] lg:left-2 xl:left-5">
        {links.map((each) => (
          <li className="w-[40px] mb-[25px]">
            <a href={each.href}>
              <each.icon size={35} />
            </a>
          </li>
        ))}
      </ul>
      <p className="hidden md:block rotate-90 font-bold fixed top-[70%] lg:right-2 xl:right-2">
        sinhaanishkumar@outlook.com
      </p>
    </div>
  );
};

export default About;
