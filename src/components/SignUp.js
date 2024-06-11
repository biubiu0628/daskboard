import React, { useContext } from "react";
import Logo from "../images/Logo2.svg";
import Box from "../images/box.svg";
import User from "../images/user.svg";
import LogoSignUp from "../images/signup.svg";
import LogoSignIn from "../images/signin.svg";
import FB from "../images/facebook.svg";
import FBWhite from "../images/facebookWhite.svg";
import Apple from "../images/apple.svg";
import AppleWhite from "../images/appleWhite.svg";
import Google from "../images/google.svg";
import GoogleWhite from "../images/googleWhite.svg";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { DarkModeContext } from "./DarkModeContext";

const Page = ({ image, name }) => (
  <div className="flex text-[10px] font-bold text-white items-center uppercase tracking-wide gap-1">
    <img src={image} alt="" className="w-[11px] h-[11px]" />
    <p>{name}</p>
  </div>
);

const Button = ({ image }) => (
  <button
    className="border-[1px] border-solid border-[#E2E8F0] dark:border-none dark:bg-[#1B254B] 
    rounded-lg w-[75px] h-[75px] flex justify-center items-center "
  >
    <img src={image} alt="" />
  </button>
);

const Input = ({ name, placeholder, type }) => (
  <div>
    <p className="text-[14px] text-[#2D3748] dark:text-white pl-1">{name}</p>
    <input
      className="w-[350px] h-[50px] px-4 border-solid border-[1px] border-[#E2E8F0] 
      dark:border-none dark:bg-[#1B254B] dark:text-white rounded-lg text-[14px] focus:outline-none"
      placeholder={placeholder}
      type={type}
      required
    />
  </div>
);

const SignUp = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="h-[1140px] dark:bg-[#1B254B] flex flex-col">
      <div className="p-4 h-[1080px]">
        {/* header */}
        <div className="relative w-full h-[520px] bg-[url('./images/Image.svg')] bg-cover flex flex-col items-center gap-16">
          <div className="w-[940px] h-[35px] flex items-center justify-between pt-14">
            <img src={Logo} alt="" className="w-[167px] h-[27px]" />
            <div className="flex h-[22.5px] gap-4">
              <Link to="/" className="flex">
                <Page image={Box} name="Dashboard" />
              </Link>
              <Page image={User} name="Profile" />
              <Link to="/signup" className="flex">
                <Page image={LogoSignUp} name="Sign Up" />
              </Link>
              <Link to="/signin" className="flex">
                <Page image={LogoSignIn} name="Sign In" />
              </Link>
            </div>
            <button className="bg-white dark:bg-[#0B1437] w-[150px] rounded-lg h-[35px] uppercase text-[#2D3748] dark:text-white text-[10px] font-bold ">
              free download
            </button>
          </div>
          <p className="text-white flex flex-col text-center w-[333px] h-[88px] tracking-wide">
            <span className="text-[32px] font-bold py-2">Welcome!</span>
            <span className="text-[14px]">
              Use these awesome forms to login or create new account in your
              project for free.
            </span>
          </p>
        </div>
        {/* sign up */}
        <div className="absolute bottom-[-70px] left-1/2 translate-x-[-50%] w-[425.5px] h-[713.5px] bg-white dark:bg-[#111C44] rounded-2xl shadow">
          <div>
            {/* signup social */}
            <div className="flex flex-col items-center pt-10 pb-4">
              <p className="text-[18px] font-bold text-[#2D3748] dark:text-white">
                Register with
              </p>
              <div className="flex gap-4 py-4">
                <Button image={darkMode ? FBWhite : FB} />
                <Button image={darkMode ? AppleWhite : Apple} />
                <Button image={darkMode ? GoogleWhite : Google} />
              </div>
              <p className="text-[18px] font-bold text-[#A0AEC0]">or</p>
            </div>
            {/* signup table */}
            <div className="flex flex-col items-center gap-8">
              <Input name="Name" placeholder="Your full name" type="text" />
              <Input
                name="Email"
                placeholder="Your email address"
                type="email"
              />
              <Input
                name="Password"
                placeholder="Your password"
                type="password"
              />
              <div className="flex items-center gap-3 self-start pl-9">
                <input
                  type="checkbox"
                  class="peer sr-only opacity-0"
                  id="toggle"
                />
                <label
                  for="toggle"
                  class="relative flex h-[18px] w-[34px] cursor-pointer items-center rounded-full bg-[#E2E8F0] dark:bg-[#1B254B] px-0.5
            transition-colors before:h-[13px] before:w-[13px] before:rounded-full before:bg-white before:transition-transform 
            before:duration-300 peer-checked:bg-[#3182CE] peer-checked:before:translate-x-[16px]"
                ></label>
                <p className="text-[12px] dark:text-white">Remember me</p>
              </div>
              <button className="w-[350px] h-[45px] bg-[#2D3748] dark:bg-[#3182CE] rounded-lg uppercase text-white text-[10px]">
                sign up
              </button>
              <div>
                <p className="text-[14px]">
                  <span className="text-gray-400">
                    Already have an account?{" "}
                  </span>
                  <Link
                    to="/signin"
                    className="text-gray-700 dark:text-white font-bold cursor-pointer"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
      </div>
      <div className="px-[450px]">
        <Footer />
      </div>
    </div>
  );
};

export default SignUp;
