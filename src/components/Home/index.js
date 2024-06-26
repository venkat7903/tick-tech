/* eslint-disable jsx-a11y/anchor-is-valid */
import Header from "../Header";
import Hello from "../../assets/Hello.png";
import Image from "../../assets/Image.png";
import SocialLinks from "../../assets/Socials Links.png";
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

const Home = (props) => {
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
      <div className="flex flex-col justify-center items-center pb-[50px]">
        <div className="sub-container h-full grow flex flex-col md:flex-row justify-center md:justify-between items-center">
          <div className="order-2 md:order-1 mt-0">
            <img src={Hello} alt="Hello" className="w-[100px] mb-[10px]" />
            <h1 className="text-3xl font-semibold mb-[10px]">
              I'm{" "}
              <span className="text-gray-500 border-b-[4px] border-black">
                Anish
              </span>
            </h1>
            <p className="text-gray-400">
              UI/UX Designer, Front-End Developer & Thinker. Based in India.
            </p>
            <div className="mt-[30px]">
              <button className=" mr-[15px] text-white border-[3px] border-white shadow-md shadow-slate-600 rounded-md p-[5px] px-[8px] bg-gradient-to-r from-red-500 to-orange-400">
                Download CV
              </button>
              <button className="text-white border-[3px] border-white shadow-md shadow-slate-600 rounded-md p-[5px] px-[8px] bg-gradient-to-r from-gray-700 to-black">
                Get in Touch!
              </button>
            </div>
          </div>
          <div className="order-1 mb-0 md:order-2 w-full flex justify-center items-center md:w-[50%]">
            <img src={Image} alt="profile" className="w-[100%] lg:w-[80%]" />
          </div>
        </div>
      </div>

      <p className="hidden md:block rotate-90 font-bold fixed top-[70%] lg:right-2 xl:right-5">
        sinhaanishkumar@outlook.com
      </p>

      <ul className="hidden md:block fixed top-[40%] lg:left-2 xl:left-5">
        {links.map((each) => (
          <li className="w-[40px] mb-[25px]">
            <a href={each.href}>
              <each.icon size={35} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
