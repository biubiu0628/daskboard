import React, { useContext } from "react";
import Nav from "./Nav";
import Header from "./Header";
import Bg from "../images/Background.svg";
import BgDark from "../images/bgDark.svg";
import Avatar2 from "../images/avatar2.svg";
import Edit2 from "../images/edit2.svg";
import EditWhite from "../images/editWhite.svg";
import Overview from "../images/overview.svg";
import OvWhite from "../images/ovWhite.svg";
import Teams from "../images/teams.svg";
import TeamsWhite from "../images/teamsWhite.svg";
import Projects from "../images/projects.svg";
import ProWhite from "../images/proWhite.svg";
import Vector3 from "../images/vector3.svg";
import Media from "../images/media.svg";
import MediaWhite from "../images/mediaWhite.svg";
import Avatar3 from "../images/avatar3.svg";
import Avatar4 from "../images/avatar4.svg";
import Avatar5 from "../images/avatar5.svg";
import Avatar6 from "../images/avatar6.svg";
import ProjectImg from "../images/project.svg";
import Project2Img from "../images/project2.svg";
import Project3Img from "../images/project3.svg";
import Add from "../images/add.svg";
import AddWhite from "../images/addWhite.svg";
import Avagroup from "../images/avagroup.svg";
import AvagroupWhite from "../images/avagroupWhite.svg";
import Footer from "./Footer";
import { DarkModeContext } from "./DarkModeContext";

const Button = ({ image, name, bgcolor }) => (
  <button
    className="flex items-center justify-center gap-2 w-[134px] h-[35px] rounded-lg"
    style={{ backgroundColor: bgcolor }}
  >
    <img src={image} alt="" className="w-[11px] h-[11px]" />
    <div className="uppercase text-[10px] font-bold text-[#2D3748] dark:text-white">
      {name}
    </div>
  </button>
);

const Toggle = ({ id, text }) => (
  <div className="flex items-center gap-2 py-3">
    <div>
      <input type="checkbox" class="peer sr-only opacity-0" id={id} />
      <label
        for={id}
        class="relative flex h-[18px] w-[34px] cursor-pointer items-center rounded-full bg-[#E2E8F0] dark:bg-[#1B254B] px-0.5
        transition-colors duration-700 before:h-[13px] before:w-[13px] before:rounded-full before:bg-white before:transition-transform 
        before:duration-300 peer-checked:bg-[#3182CE] peer-checked:before:translate-x-[16px]"
      ></label>
    </div>
    <p className="text-[12px] text-normal text-[#A0AEC0]">{text}</p>
  </div>
);

const Info = ({ name, info }) => (
  <div className="flex gap-2 py-2">
    <span className="text-[12px] font-bold text-gray-500 dark:text-[#A0AEC0]">
      {name}:{" "}
    </span>
    <span className="text-[12px] text-gray-400 dark:text-white">{info}</span>
  </div>
);

const Conversation = ({ image, name, message }) => (
  <div className="flex items-center justify-between py-1">
    <div className="flex items-center gap-2">
      <img src={image} alt="" />
      <p className="flex flex-col">
        <span className="text-[#2D3748] dark:text-white font-bold text-[14px]">
          {name}
        </span>
        <span className="text-[#718096] text-[14px]">{message}</span>
      </p>
    </div>
    <button className="uppercase text-[#3182CE] dark:text-white text-[10px] font-bold">
      reply
    </button>
  </div>
);

const Project = ({ image, number, name, des, darkMode }) => (
  <div className="flex flex-col">
    <img src={image} alt="" className="w-full h-[212px] object-cover" />
    <div className="px-4">
      <p className="flex flex-col py-4">
        <span className="text-[10px] text-[#A0AEC0]">Project #{number}</span>
        <span className="text-[18px] text-[#2D3748] dark:text-white font-bold">
          {name}
        </span>
        <span className="text-[12px] text-[#A0AEC0]">{des}</span>
      </p>
      <div className="flex justify-between items-center">
        <button
          className="uppercase w-[110px] h-[35px] bg-[#2D3748] dark:bg-[#3182CE] flex 
    justify-center items-center text-white text-[10px] font-bold rounded-lg"
        >
          view all
        </button>
        <img src={darkMode ? AvagroupWhite : Avagroup} alt="" />
      </div>
    </div>
  </div>
);

const RTL = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="h-[1200px] relative bg-[#f7fafc] dark:bg-[#1B254B]">
      <img src={darkMode ? BgDark : Bg} alt="" />
      <div className="absolute top-0 grid grid-cols-[300px_1600px] tracking-wide">
        <Nav />
        <div className="grid gap-y-7 py-4">
          {/* header */}
          <Header name="RTL" />
          <div className="bg-white dark:bg-[#111C44] bg-opacity-85 bg w-[1584px] h-[113px] rounded-2xl p-4">
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div className="relative">
                  <img src={Avatar2} alt="" />
                  <div className="dark:bg-[#0B1437] absolute bg-white w-[26px] h-[26px] flex justify-center items-center rounded-lg bottom-[-5px] right-[-5px]">
                    <img src={darkMode ? EditWhite : Edit2} alt="" />
                  </div>
                </div>
                <p className="flex flex-col">
                  <span className="dark:text-white text-[18px] text-[#2D3748] font-bold">
                    Alec Thompson
                  </span>
                  <span className="text-[14px] text-[#718096]">
                    alec@simmmple.com
                  </span>
                </p>
              </div>
              <div className="flex">
                <Button
                  image={darkMode ? OvWhite : Overview}
                  name="Overview"
                  bgcolor={darkMode ? "#0B1437" : "white"}
                />
                <Button image={darkMode ? TeamsWhite : Teams} name="Teams" />
                <Button
                  image={darkMode ? ProWhite : Projects}
                  name="Projects"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 w-[1584px] h-[377px] gap-6">
            {/* Platform Settings */}
            <div className="bg-white dark:bg-[#111C44] rounded-2xl shadow px-4">
              <p className="text-[18px] font-bold text-[#2D3748] dark:text-white py-6">
                Platform Settings
              </p>
              <div>
                <p className="uppercase text-[10px] font-bold text-[#A0AEC0] pb-1">
                  account
                </p>
                <Toggle text="Email me when someone follows me" id={1} />
                <Toggle
                  text="Email me when someone answers on my post"
                  id={2}
                />
                <Toggle text="Email me when someone mentions me" id={3} />
              </div>
              <div>
                <p className="uppercase text-[10px] font-bold text-[#A0AEC0] py-1">
                  application
                </p>
                <Toggle text="New launches and projects" id={4} />
                <Toggle text="Monthly product updates" id={5} />
                <Toggle text="Subscribe to newsletter" id={6} />
              </div>
            </div>
            {/* Profile Information */}
            <div className="bg-white dark:bg-[#111C44] rounded-2xl shadow px-4">
              <p className="text-[18px] font-bold text-[#2D3748] dark:text-white py-6">
                Profile Information
              </p>
              <div>
                <p className="text-[12px] text-[#A0AEC0]">
                  Hi, I’m Alec Thompson, Decisions: If you can’t decide, the
                  answer is no. If two equally difficult paths, choose the one
                  more painful in the short term (pain avoidance is creating an
                  illusion of equality).
                </p>
                <img src={Vector3} alt="" className="py-6" />
              </div>
              <div>
                <Info name="Full Name" info="Alec M.Thompson" />
                <Info name="Mobile" info="(44) 123 1234 123" />
                <Info name="Email" info="alecthompson@mail.com" />
                <Info name="Location" info="United States" />
                <div className="flex gap-2 py-2">
                  <span className="text-[12px] font-bold text-gray-500 dark:text-[#A0AEC0]">
                    Social Media:
                  </span>
                  <img src={darkMode ? MediaWhite : Media} alt="" />
                </div>
              </div>
            </div>
            {/* Conversations */}
            <div className="bg-white dark:bg-[#111C44] rounded-2xl shadow px-4">
              <p className="text-[18px] font-bold text-[#2D3748] dark:text-white py-6">
                Conversations
              </p>
              <Conversation
                image={Avatar3}
                name="Esthera Jackson"
                message="Hi! I need more informations..."
              />
              <Conversation
                image={Avatar4}
                name="Esthera Jackson"
                message="Awesome work, can you change..."
              />
              <Conversation
                image={Avatar5}
                name="Esthera Jackson"
                message="Have a great afternoon..."
              />
              <Conversation
                image={Avatar6}
                name="Esthera Jackson"
                message="About files I can..."
              />
            </div>
          </div>
          {/* Projects */}
          <div className="bg-white dark:bg-[#111C44] w-[1584px] h-[486px] rounded-2xl shadow">
            <p className="flex flex-col gap-2 px-4 py-6">
              <span className="text-[18px] font-bold text-[#2D3748] dark:text-white">
                Projects
              </span>
              <span className="text-[14px] text-[#A0AEC0]">
                Architects design houses
              </span>
            </p>
            <div className="grid grid-cols-4 w-full h-[353px] gap-2 px-2">
              <Project
                image={ProjectImg}
                number="1"
                name="Modern"
                des="As Uber works through a huge amount of internal management turmoil."
                darkMode={darkMode}
              />
              <Project
                image={Project2Img}
                number="2"
                name="Scandinavian"
                des="Music is something that every person has his or her own specific opinion about."
                darkMode={darkMode}
              />
              <Project
                image={Project3Img}
                number="3"
                name="Minimalist"
                des="Different people have different taste, and various types of music."
                darkMode={darkMode}
              />
              <button className="border-solid border-[1px] border-[#E2E8F0] rounded-2xl">
                <div className="text-[#718096] dark:text-white text-[18px] flex flex-col justify-center items-center">
                  <img
                    src={darkMode ? AddWhite : Add}
                    alt=""
                    className="w-[30px] h-[30px]"
                  />
                  <p>Create a New Project</p>
                </div>
              </button>
            </div>
          </div>
          {/* footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default RTL;
