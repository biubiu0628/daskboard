import React, { useContext } from "react";
import Logo from "../images/Logo.svg";
import Logo2 from "../images/Logo2.svg";
import Vector from "../images/vector.svg";
import Home from "../images/home.svg";
import HomeBlue from "../images/homeBlue.svg";
import Stats from "../images/stats.svg";
import StatsWhite from "../images/statsWhite.svg";
import Card from "../images/card.svg";
import CardWhite from "../images/cardWhite.svg";
import Build from "../images/build.svg";
import BuildWhite from "../images/buildWhite.svg";
import Documentation from "../images/documentation.svg";
import DocumentDark from "../images/documentDark.svg";
import User2 from "../images/user2.svg";
import Document2 from "../images/document2.svg";
import Rocket from "../images/rocket.svg";
import { Link, useLocation } from "react-router-dom";
import { DarkModeContext } from "./DarkModeContext";

const Button = ({ isActive, darkMode, image, imageActive, name, path }) => (
  <Link
    to={path}
    className={`flex items-center px-4 gap-2 w-[220px] h-[54px] ${
      isActive(path) ? "shadow dark:bg-[#1B254B]" : "shadow-none"
    } rounded-xl `}
  >
    <div
      className={`p-3 ${
        isActive(path) ? "bg-[#3182CE]" : "bg-white dark:bg-[#1B254B]"
      }  rounded-xl`}
    >
      <img
        src={isActive(path) ? imageActive : image}
        alt=""
        className="w-[20px] h-[20px]"
      />
    </div>
    <p
      className={`${
        isActive(path)
          ? darkMode
            ? "text-white"
            : "text-black"
          : "text-[#A0AEC0]"
      } font-bold`}
    >
      {name}
    </p>
  </Link>
);

const Nav = () => {
  const { darkMode } = useContext(DarkModeContext);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="nav p-4">
      <div
        className={`fixed ${
          darkMode ? "bg-[#111C44]" : "bg-white"
        } grid rounded-xl h-[93vh] w-[265px] shadow-md`}
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
          {/* Dashboard */}
          <Button
            isActive={isActive}
            darkMode={darkMode}
            image={HomeBlue}
            imageActive={Home}
            name="Dashboard"
            path="/"
          />
          {/* tables */}
          <Button
            isActive={isActive}
            darkMode={darkMode}
            image={Stats}
            imageActive={StatsWhite}
            name="Tables"
            path="/table"
          />
          {/* billing */}
          <Button
            isActive={isActive}
            darkMode={darkMode}
            image={Card}
            imageActive={CardWhite}
            name="Billing"
            path="/bill"
          />
          {/* RTL */}
          <Button
            isActive={isActive}
            darkMode={darkMode}
            image={Build}
            imageActive={BuildWhite}
            name="RTL"
            path="/rtl"
          />
        </div>
        {/* account page */}
        <p
          className={`uppercase font-bold text-[12px] pl-12 py-4 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          account pages
        </p>
        <div className="flex flex-col items-center gap-2">
          <button className="flex items-center px-4 gap-2 w-[220px] h-[54px]">
            <div className="p-3 dark:bg-[#1B254B] rounded-xl">
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
            <div className="p-3 dark:bg-[#1B254B] rounded-xl">
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
            <div className="p-3 dark:bg-[#1B254B] rounded-xl">
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
