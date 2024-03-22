import React from "react";
import Header from "../Header";

import Hand from "../../assets/Rectangle.png";
import vector4 from "../../assets/Vector 4.png";
import vector5 from "../../assets/Vector 5.png";
import vector3 from "../../assets/Vector 3.png";

import SocialLinks from "../../assets/Socials Links.png";
import mail from "../../assets/Email.png";

import "./index.css";

const About = () => {
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
      <img
        src={SocialLinks}
        alt="links"
        className="fixed top-[40%] lg:left-2 xl:left-5"
      />
      <img
        src={mail}
        alt="mail"
        className="fixed top-[50%] lg:right-2 xl:right-5"
      />
    </div>
  );
};

export default About;
