import React, { useContext } from "react";
import Bell from "../images/bell.svg";
import Setting from "../images/setting.svg";
import User from "../images/user.svg";
import { Link } from "react-router-dom";
import { DarkModeContext } from "./DarkModeContext";

const Header = ({ name }) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const handleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <div className="flex justify-between items-start h-[50px] pr-4">
        <p className="text-white ">
          <span className="text-[12px]">Pages / {name}</span>
          <br />
          <span className="text-[14px] font-bold tracking-wider">{name}</span>
        </p>
        <div className="flex items-center gap-4">
          <div
            className={`flex ${
              darkMode ? "bg-[#111C44]" : "bg-white"
            } h-[40px] rounded-lg items-center px-2 gap-2`}
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            ) : (
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
            )}
            <input
              type="text"
              placeholder="Type here..."
              className={`focus:outline-none text-sm bg-transparent ${
                darkMode ? "text-white" : ""
              }`}
            ></input>
          </div>
          <Link
            to="/signin"
            className="flex text-white text-[12px] items-center font-bold gap-1"
          >
            <img src={User} alt="" />
            Sign In
          </Link>
          <button>
            <img src={Setting} alt="" />
          </button>
          <button>
            <img src={Bell} alt="" />
          </button>
          <button onClick={handleDarkMode}>
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="size-[12px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="size-[12px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
