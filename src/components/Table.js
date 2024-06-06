import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import Bg from "../images/Background.svg";
import Avatar from "../images/avatar.svg";
import Check from "../images/check.svg";
import Vert from "../images/vert.svg";
import Xd from "../images/xd.svg";
import Atlassian from "../images/atlassian.svg";
import Slack from "../images/slack.svg";
import Spotify from "../images/spotify.svg";
import Jira from "../images/jira.svg";

const Authors = ({ name, email, job, position, status, color }) => (
  <tr className="border-t">
    {/* author */}
    <th scope="row" className="py-[7px]">
      <div className="flex">
        <img src={Avatar} alt="" />
        <p className="flex flex-col justify-center items-start">
          <span className="text-[14px] font-bold text-[#2D3748]">{name}</span>
          <span className="text-[14px] text-[#718096] font-normal">
            {email}
          </span>
        </p>
      </div>
    </th>
    {/* function */}
    <td>
      <p className="flex flex-col justify-center items-start">
        <span className="text-[14px] font-bold text-[#718096]">{job}</span>
        <span className="text-[14px] font-normal text-[#718096]">
          {position}
        </span>
      </p>
    </td>
    {/* status */}
    <td>
      <div
        className={`text-[14px] font-bold text-white w-[65px] h-[25px] 
        flex justify-center items-center rounded-[6px] ${color}`}
      >
        {status}
      </div>
    </td>
    {/* employed */}
    <td>
      <p className="text-[14px] font-bold text-[#718096]">14/06/21</p>
    </td>
    {/* edit */}
    <td>
      <button className="text-[12px] font-bold text-[#718096]">Edit</button>
    </td>
  </tr>
);

const Projects = ({ image, name, budget, status, percent }) => (
  <tr className="border-t text-[14px] font-bold">
    {/* companies */}
    <th scope="row" className="py-5">
      <div className="flex gap-3 content-center">
        <img src={image} alt="" />
        <p className="">{name}</p>
      </div>
    </th>
    {/* budget */}
    <td>
      <p className="text-[#718096]">{budget}</p>
    </td>
    {/* status */}
    <td>
      <p className="text-[#718096] text-center">{status}</p>
    </td>
    {/* completion */}
    <td>
      <div className="items-center justify-center">
        <p className="text-[#3182CE] text-[14px] font-bold">{percent}</p>
        <div className="w-[125px] h-[4px] bg-gray-200 relative">
          <div
            className="absolute left-0 top-0 h-full bg-[#3182CE]"
            style={{ width: `${percent}` }}
          ></div>
        </div>
      </div>
    </td>
    {/* vert */}
    <td>
      <button className="text-[12px] font-bold text-[#718096]">
        <img src={Vert} alt="" />
      </button>
    </td>
  </tr>
);

const Table = () => {
  return (
    <div className="h-[1151px] relative bg-[#f7fafc]">
      <img src={Bg} alt="" />
      <div className="absolute top-0 grid grid-cols-[300px_1600px] tracking-wide">
        <Nav />
        <div className="grid gap-y-7">
          {/* header */}
          <Header name="Tables" />
          {/* authors table */}
          <div className="bg-white shadow w-[1583px] h-[488px] rounded-xl px-4">
            <p className="text-[18px] font-bold py-4">Authors Table</p>
            <table className="w-full">
              <thead className="text-left">
                <tr className="uppercase font-bold text-[10px] text-[#A0AEC0] tracking-[1px]">
                  <th scope="col" className="pb-3">
                    author
                  </th>
                  <th scope="col">function</th>
                  <th scope="col" className="pl-3">
                    status
                  </th>
                  <th scope="col">employed</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <Authors
                  name="Esthera Jackson"
                  email="esthera@simmmple.com"
                  job="Manager"
                  position="Organization"
                  status="Online"
                  color="bg-[#48BB78]"
                />
                <Authors
                  name="Alexa Liras"
                  email="alexa@simmmple.com"
                  job="Programmer"
                  position="Developer"
                  status="Offline"
                  color="bg-gray-300"
                />
                <Authors
                  name="Laurent Michael"
                  email="laurent@simmmple.com"
                  job="Executive"
                  position="Projects"
                  status="Online"
                  color="bg-[#48BB78]"
                />
                <Authors
                  name="Freduardo Hill"
                  email="freduardo@simmmple.com"
                  job="Manager"
                  position="Organization"
                  status="Online"
                  color="bg-[#48BB78]"
                />
                <Authors
                  name="Daniel Thomas"
                  email="daniel@simmmple.com"
                  job="Programmer"
                  position="Developer"
                  status="Offline"
                  color="bg-gray-300"
                />
                <Authors
                  name="Mark Wilson"
                  email="mark@simmmple.com"
                  job="Designer"
                  position="UI/UX Design"
                  status="Offline"
                  color="bg-gray-300"
                />
              </tbody>
            </table>
          </div>
          {/* project table */}
          <div className="bg-white shadow w-[1583px] h-[454px] rounded-xl px-4">
            <div className="pt-6">
              <p className="text-[18px] font-bold">Projects</p>
              <div className="flex content-center gap-1">
                <img src={Check} alt="" />
                <p className="text-[14px] text-[#A0AEC0] py-2">
                  <span className="font-bold">30 done </span>
                  <span>this month</span>
                </p>
              </div>
            </div>
            <table className="w-full mt-4">
              <thead className="text-left">
                <tr className="uppercase font-bold text-[10px] text-[#A0AEC0] tracking-[1px]">
                  <th scope="col" className="pb-3">
                    companies
                  </th>
                  <th scope="col">budget</th>
                  <th scope="col" className="text-center w-[350px]">
                    status
                  </th>
                  <th scope="col" className="w-[300px]">
                    completion
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <Projects
                  image={Xd}
                  name="Chakra Soft UI Version"
                  budget="$14,000"
                  status="Working"
                  percent="60%"
                />
                <Projects
                  image={Atlassian}
                  name="Add Progress Track"
                  budget="$3,000"
                  status="Canceled"
                  percent="10%"
                />
                <Projects
                  image={Slack}
                  name="Fix Platform Errors"
                  budget="Not set"
                  status="Done"
                  percent="100%"
                />
                <Projects
                  image={Spotify}
                  name="Launch our Mobile App"
                  budget="$32,000"
                  status="Done"
                  percent="100%"
                />
                <Projects
                  image={Jira}
                  name="Add the New Pricing Page"
                  budget="$400"
                  status="Working"
                  percent="25%"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
