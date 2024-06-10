import React, { useContext } from "react";
import Logo from "../images/Logo.svg";
import Logo2 from "../images/Logo2.svg";
import Vector from "../images/vector.svg";
import Home from "../images/home.svg";
import Stats from "../images/stats.svg";
import Card from "../images/card.svg";
import Build from "../images/build.svg";
import Documentation from "../images/documentation.svg";
import DocumentDark from "../images/documentDark.svg";
import User2 from "../images/user2.svg";
import Document2 from "../images/document2.svg";
import Rocket from "../images/rocket.svg";
import { Link } from "react-router-dom";
import { DarkModeContext } from "./DarkModeContext";

const Nav = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="nav p-4">
      <div
        className={`fixed ${
          darkMode ? "bg-[#111C44]" : "bg-white"
        } grid rounded-xl h-[92vh] w-[265px] shadow-md`}
      >
        <div className="flex flex-col items-center">
          <img
            src={darkMode ? Logo2 : Logo}
            alt=""
            className="w-[166px] h-[27px] my-6"
          />
          <img src={Vector} alt="" />
        </div>
        {/* menu page */}
        <div className="flex flex-col items-center gap-2 pt-6 ">
          <Link
            to="/"
            className={`flex items-center px-4 gap-2 w-[220px] h-[54px] shadow rounded-xl ${
              darkMode ? "bg-[#1B254B]" : "bg-white"
            }`}
          >
            <div className="p-3 bg-[#3182CE] rounded-xl">
              <img src={Home} alt="" className="w-[20px] h-[20px]" />
            </div>
            <p
              className={`${darkMode ? "text-white" : "text-black"} font-bold`}
            >
              Dashboard
            </p>
          </Link>
          <Link
            to="/table"
            className="flex items-center px-4 gap-2 w-[220px] h-[54px]"
          >
            <div className="p-3">
              <img src={Stats} alt="" className="w-[20px] h-[20px]" />
            </div>
            <p
              className={`${
                darkMode ? "text-white" : "text-[#A0AEC0]"
              } font-bold`}
            >
              Tables
            </p>
          </Link>
          <Link
            to="/bill"
            className="flex items-center px-4 gap-2 w-[220px] h-[54px]"
          >
            <div className="p-3 ">
              <img src={Card} alt="" className="w-[20px] h-[20px]" />
            </div>
            <p
              className={`${
                darkMode ? "text-white" : "text-[#A0AEC0]"
              } font-bold`}
            >
              Billing
            </p>
          </Link>
          <Link
            to="/rtl"
            className="flex items-center px-4 gap-2 w-[220px] h-[54px]"
          >
            <div className="p-3">
              <img src={Build} alt="" className="w-[20px] h-[20px]" />
            </div>
            <p
              className={`${
                darkMode ? "text-white" : "text-[#A0AEC0]"
              } font-bold`}
            >
              RTL
            </p>
          </Link>
        </div>
        {/* account page */}
        <p
          className={`uppercase font-bold text-[12px] pl-12 py-2 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          account pages
        </p>
        <div className="flex flex-col items-center gap-2">
          <button className="flex items-center px-4 gap-2 w-[220px] h-[54px]">
            <div className="p-3">
              <img src={User2} alt="" className="w-[20px] h-[20px]" />
            </div>
            <p
              className={`${
                darkMode ? "text-white" : "text-[#A0AEC0]"
              } font-bold`}
            >
              Profile
            </p>
          </button>
          <Link
            to="/signup"
            className="flex items-center px-4 gap-2 w-[220px] h-[54px]"
          >
            <div className="p-3">
              <img src={Document2} alt="" className="w-[20px] h-[20px]" />
            </div>
            <p
              className={`${
                darkMode ? "text-white" : "text-[#A0AEC0]"
              } font-bold`}
            >
              Sign Up
            </p>
          </Link>
          <Link
            to="/signin"
            className="flex items-center px-4 gap-2 w-[220px] h-[54px]"
          >
            <div className="p-3">
              <img src={Rocket} alt="" className="w-[20px] h-[20px]" />
            </div>
            <p
              className={`${
                darkMode ? "text-white" : "text-[#A0AEC0]"
              } font-bold`}
            >
              Sign In
            </p>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={darkMode ? DocumentDark : Documentation} alt="" />
          <p className="flex flex-col text-center">
            <span
              className={`text-[14px] font-bold ${
                darkMode ? "text-white" : "text-[#2D3748]"
              } font-bold`}
            >
              Need help?
            </span>
            <span className="text-[12px] text-[#718096]">
              Please check our docs
            </span>
          </p>
          <button className="uppercase bg-[#3182CE] w-[186px] h-[35px] rounded-lg text-[10px] text-white my-4">
            documentation
          </button>
          <button
            className={`uppercase ${
              darkMode ? "bg-[#0B1437]" : "bg-[#2D3748]"
            } w-[186px] h-[35px] rounded-lg text-[10px] text-white mb-6`}
          >
            upgrade to pro
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
