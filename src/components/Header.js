import React from "react";
import Bell from "../images/bell.svg";
import Setting from "../images/setting.svg";
import User from "../images/user.svg";

const Header = ({ name }) => {
  return (
    <div>
      <div className="flex justify-between items-start h-[50px] pt-4 pr-4">
        <p className="text-white ">
          <span className="text-[12px]">Pages / {name}</span>
          <br />
          <span className="text-[14px] font-bold tracking-wider">{name}</span>
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
    </div>
  );
};

export default Header;
