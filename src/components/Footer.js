import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between pr-4 w-full">
      <p className="text-gray-400 text-[12px]">
        <span>@ 2021, Made with ❤️ by </span>
        <span className="text-blue-500 font-bold">Creative Tim</span>
        <span> & </span>
        <span className="text-blue-500 font-bold">Simmmple </span>
        <span>for a better web</span>
      </p>
      <div className="flex gap-6 text-[12px] text-[#A0AEC0]">
        <div>Creative Tim</div>
        <div>Simmmple</div>
        <div>Blog</div>
        <div>License</div>
      </div>
    </div>
  );
};

export default Footer;
