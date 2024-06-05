import React from "react";
import Bg from "../images/Background.svg";
import Nav from "./Nav";
import Bell from "../images/bell.svg";
import Setting from "../images/setting.svg";
import User from "../images/user.svg";
import Wallet from "../images/wallet.svg";
import Global from "../images/global.svg";
import Document from "../images/document.svg";
import Cart from "../images/cart.svg";
import Graph from "../images/Graph.svg";
import Chart from "../images/chart.svg";

const Card = ({ title, image, number, percent }) => (
  <div className="bg-white w-[375px] h-[123px] rounded-2xl p-4 grid">
    <div className="flex justify-between">
      <p className="uppercase">
        <span className="text-[12px] text-[#A0AEC0]">{title}</span>
        <br />
        <span className="text-[18px] text-[#2D3748] font-bold">{number}</span>
      </p>
      <button className="bg-[#3182ce] w-12 h-12 flex items-center justify-center rounded-lg">
        <img src={image} alt="" />
      </button>
    </div>
    <p className="flex gap-1 items-end text-[14px]">
      <span className="text-[#48BB78] font-bold">{percent}</span>
      <span className="text-[#A0AEC0]">Since last month</span>
    </p>
  </div>
);

const Dashboard = () => {
  return (
    <div className="h-[1200px] relative bg-[#f7fafc]">
      <img src={Bg} alt="" />
      <div className="absolute top-0 grid grid-cols-[300px_1600px]">
        <Nav />
        <div className="grid gap-y-10">
          {/* header */}
          <div className="flex justify-between items-start h-[50px] pt-4 pr-4">
            <p className="text-white ">
              <span>Pages/Dashboard</span>
              <br />
              <span className="text-lg font-bold">Dashboard</span>
            </p>
            <div className="flex items-center gap-4">
              <div className="flex bg-white h-[40px] rounded-lg items-center px-2 gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Type here..."
                  className="focus:outline-none text-sm"
                ></input>
              </div>
              <button className="flex text-white text-[12px] items-center font-bold gap-1">
                <img src={User} alt="" />
                Sign In
              </button>
              <button>
                <img src={Setting} alt="" />
              </button>
              <button>
                <img src={Bell} alt="" />
              </button>
            </div>
          </div>
          {/* card */}
          <div className="flex justify-between pr-4">
            <Card
              title="today's money"
              image={Wallet}
              number="$53,897"
              percent="+3.48%"
            />
            <Card
              title="today's users"
              image={Global}
              number="3,200"
              percent="+5.20%"
            />
            <Card
              title="new client's"
              image={Document}
              number="+2,503"
              percent="-2.82%"
            />
            <Card
              title="total sales"
              image={Cart}
              number="$173,000"
              percent="+8.12%"
            />
          </div>
          {/* sales overview */}
          <div className="grid grid-cols-[69%_30%] grid-rows-[491px_350px] w-full pr-4 gap-x-4 gap-y-4">
            <div className="bg-[#151928] rounded-2xl p-4 grid">
              <p className="text-white pt-2">
                <span className="font-bold text-[18px]">Sales overview</span>
                <br />
                <p className="text-[14px] pt-2">
                  <span className="text-green-400">(+5) more </span>
                  <span>in 2021</span>
                </p>
              </p>
              <img src={Graph} alt="" className="flex h-full " />
            </div>
            {/* total orders */}
            <div className="bg-white rounded-2xl p-4 grid shadow-md">
              <p className="text-white pt-2">
                <span className="font-bold text-[12px] uppercase text-[#A0AEC0]">
                  performance
                </span>
                <br />
                <span className="text-[18px] font-bold text-black">
                  Total orders
                </span>
              </p>
              <img src={Chart} alt="" className="flex h-full " />
            </div>
            {/* page visits */}
            <div className="bg-white rounded-2xl grid grid-rows-[20%_80%] shadow-md">
              <div className="flex justify-between items-center p-4 px-6">
                <p className="font-bold text-[18px]">Page visits</p>
                <button className="uppercase bg-blue-500 text-white text-[10px] w-[70px] h-[28px] rounded-lg">
                  see all
                </button>
              </div>
              <table className=" h-[41px] w-full">
                <thead className="uppercase text-[10px] font-bold text-[#a0aec0] bg-[#F7FAFC]">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left">
                      page name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      visitors
                    </th>
                    <th scope="col" className="px-6 py-3">
                      unique users
                    </th>
                    <th scope="col" className="px-6 py-3">
                      bounce rate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b text-[14px] text-[#718096] text-center">
                    <th scope="row" className="text-left px-6 py-3">
                      /argon/
                    </th>
                    <td>4,569</td>
                    <td>340</td>
                    <td>46,53%</td>
                  </tr>
                  <tr className="border-b text-[14px] text-[#718096] text-center">
                    <th scope="row" className="text-left px-6 py-3">
                      /argon/index.html
                    </th>
                    <td>3.985</td>
                    <td>319</td>
                    <td>46,53%</td>
                  </tr>
                  <tr className="border-b text-[14px] text-[#718096] text-center">
                    <th scope="row" className="text-left px-6 py-3">
                      /argon/charts.html
                    </th>
                    <td>3,513</td>
                    <td>294</td>
                    <td>36,49%</td>
                  </tr>
                  <tr className="border-b text-[14px] text-[#718096] text-center">
                    <th scope="row" className="text-left px-6 py-3">
                      /argon/tables.html
                    </th>
                    <td>2,050</td>
                    <td>147</td>
                    <td>50,87%</td>
                  </tr>
                  <tr className="text-[14px] text-[#718096] text-center">
                    <th scope="row" className="text-left px-6 py-3">
                      /argon/profile.html
                    </th>
                    <td>1,795</td>
                    <td>190</td>
                    <td>46,53%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* social traffic */}
            <div className="bg-white rounded-2xl grid grid-rows-[20%_80%] shadow-md">
              <div className="flex justify-between items-center p-4 px-6">
                <p className="font-bold text-[18px]">Social traffic</p>
                <button className="uppercase bg-blue-500 text-white text-[10px] w-[70px] h-[28px] rounded-lg">
                  see all
                </button>
              </div>
              <table className=" h-[41px] w-full">
                <thead className="uppercase text-[10px] font-bold text-[#a0aec0] bg-[#F7FAFC]">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left">
                      referral
                    </th>
                    <th scope="col" className="px-6 py-3">
                      visitors
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b text-[14px] text-[#718096] text-center">
                    <th scope="row" className="text-left px-6 py-3">
                      Facebook
                    </th>
                    <td>1,480</td>
                    <td className="px-6 py-3">
                      <div className="flex items-center justify-center space-x-2">
                        <p>60%</p>
                        <div className="w-[120px] h-[4px] bg-gray-200 relative">
                          <div
                            className="absolute left-0 top-0 h-full bg-orange-400"
                            style={{ width: "60%" }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b text-[14px] text-[#718096] text-center">
                    <th scope="row" className="text-left px-6 py-3">
                      Facebook
                    </th>
                    <td>5,480</td>
                    <td className="px-6 py-3">
                      <div className="flex items-center justify-center space-x-2">
                        <p>70%</p>
                        <div className="w-[120px] h-[4px] bg-gray-200 relative">
                          <div
                            className="absolute left-0 top-0 h-full bg-orange-400"
                            style={{ width: "70%" }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b text-[14px] text-[#718096] text-center">
                    <th scope="row" className="text-left px-6 py-3">
                      Google
                    </th>
                    <td>4,807</td>
                    <td className="px-6 py-3">
                      <div className="flex items-center justify-center space-x-2">
                        <p>80%</p>
                        <div className="w-[120px] h-[4px] bg-gray-200 relative">
                          <div
                            className="absolute left-0 top-0 h-full bg-cyan-400"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b text-[14px] text-[#718096] text-center">
                    <th scope="row" className="text-left px-6 py-3">
                      Instagram
                    </th>
                    <td>3,678</td>
                    <td className="px-6 py-3">
                      <div className="flex items-center justify-center space-x-2">
                        <p>75%</p>
                        <div className="w-[120px] h-[4px] bg-gray-200 relative">
                          <div
                            className="absolute left-0 top-0 h-full bg-cyan-400"
                            style={{ width: "75%" }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-[14px] text-[#718096] text-center">
                    <th scope="row" className="text-left px-6 py-3">
                      Twitter
                    </th>
                    <td>2,645</td>
                    <td className="px-6 py-3">
                      <div className="flex items-center justify-center space-x-2">
                        <p>30%</p>
                        <div className="w-[120px] h-[4px] bg-gray-200 relative">
                          <div
                            className="absolute left-0 top-0 h-full bg-[#ED8936]"
                            style={{ width: "30%" }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
