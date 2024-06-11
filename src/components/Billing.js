import React, { useContext } from "react";
import Nav from "./Nav";
import Header from "./Header";
import Bg from "../images/Background.svg";
import BgDark from "../images/bgDark.svg";
import LogoCredit from "../images/logoCredit.svg";
import Wallet from "../images/wallet.svg";
import Vector2 from "../images/vector2.svg";
import Paypal from "../images/paypal.svg";
import Document from "../images/document3.svg";
import DocWhite from "../images/docWhite.svg";
import MasterCard from "../images/masterCard.svg";
import Edit from "../images/edit.svg";
import EditWhite from "../images/editWhite.svg";
import Visa from "../images/visa.svg";
import Delete from "../images/delete.svg";
import Calendar from "../images/calendar.svg";
import Up from "../images/up.svg";
import Down from "../images/down.svg";
import Pending from "../images/pending.svg";
import Footer from "./Footer";
import { DarkModeContext } from "./DarkModeContext";

const Card = ({ image, name, des, price, darkMode }) => (
  <div
    className={`${
      darkMode ? "bg-[#111C44]" : "bg-white"
    } rounded-2xl flex flex-col justify-center items-center`}
  >
    <div className="bg-[#3182CE] w-[64px] h-[64px] rounded-lg flex justify-center items-center">
      <img src={image} alt="" />
    </div>
    <p className="grid text-center pt-4 font-bold tracking-wide">
      <span className={`text-[18px] ${darkMode ? "text-white" : "text-black"}`}>
        {name}
      </span>
      <span className="text-[12px] text-[#A0AEC0]">{des}</span>
      <img src={Vector2} alt="" className="py-3" />
      <span className={`${darkMode ? "text-white" : "text-black"}`}>
        +${price}
      </span>
    </p>
  </div>
);

const Invoices = ({ day, id, price, darkMode }) => (
  <div className="flex items-center justify-between py-3">
    <p className="flex flex-col gap-1">
      <span
        className={`${
          darkMode ? "text-white" : "text-[#2D3748]"
        } text-[14px] font-bold`}
      >
        {day}
      </span>
      <span className="text-[#A0AEC0] text-[12px] font-bold">#{id}</span>
    </p>
    <div className="flex items-center gap-4">
      <p className="text-[#A0AEC0] text-[12px] font-bold">${price}</p>
      <button className="btn flex items-center">
        <img src={darkMode ? DocWhite : Document} alt="" />
        <p
          className={`${
            darkMode ? "text-white" : "text-[#2D3748]"
          } text-[10px] font-bold`}
        >
          PDF
        </p>
      </button>
    </div>
  </div>
);

const Method = ({ image, darkMode }) => (
  <div
    className={`flex w-[450px] h-[65px] p-5 gap-3 items-center ${
      darkMode
        ? "border-none bg-[#0B1437]"
        : "border-solid border-[1px] border-[#E2E8F0] bg-white"
    }
   rounded-lg`}
  >
    <img src={image} alt="" className="w-[21px] h-[13px]" />
    <input
      className={`w-full text-[14px] focus:outline-none bg-transparent ${
        darkMode ? "text-white placeholder-white" : "text-[#A0AEC0]"
      }`}
      placeholder="7812 2139 0823 XXXX"
    ></input>
    <img
      src={darkMode ? EditWhite : Edit}
      alt=""
      className="w-[12px] h-[12px]"
    />
  </div>
);

const BillingInfo = ({ name, comName, email, vat, darkMode }) => (
  <div className="bg-[#F8F9FA] dark:bg-[#0B1437] px-6 py-4 rounded-lg">
    <div className="flex justify-between py-2">
      <p className="text-[#718096] dark:text-white text-[14px] font-bold">
        {name}
      </p>
      <div className="flex gap-4">
        <button className="uppercase flex items-center text-[10px] font-bold text-[#E53E3E] gap-1">
          <img src={Delete} alt="" />
          delete
        </button>
        <button className="uppercase flex items-center text-[10px] font-bold text-[#2D3748] dark:text-white gap-1">
          <img src={darkMode ? EditWhite : Edit} alt="" />
          edit
        </button>
      </div>
    </div>
    <div className="text-[12px] text-[#718096]">
      <p>
        <span>Company Name: </span>
        <span className="font-bold dark:text-white">{comName}</span>
      </p>
      <p>
        <span>Email Address: </span>
        <span className="font-bold dark:text-white">{email}</span>
      </p>
      <p>
        <span>VAT Number: </span>
        <span className="font-bold dark:text-white">{vat}</span>
      </p>
    </div>
  </div>
);

const Transaction = ({ image, name, time, price, color, textColor }) => (
  <div className="flex justify-between items-center py-[10px]">
    <div className="flex items-center gap-4">
      <div
        className="border-[1px] border-solid rounded-full 
        w-[35px] h-[35px] flex justify-center items-center"
        style={{ borderColor: color }}
      >
        <img src={image} alt="" />
      </div>
      <p className="flex flex-col gap-1">
        <span className="text-[14px] font-bold text-[#2D3748] dark:text-white">
          {name}
        </span>
        <span className="text-[12px] font-bold text-[#A0AEC0]">{time}</span>
      </p>
    </div>
    <p
      id="price"
      className="text-[14px] font-bold"
      style={{ color: textColor }}
    >
      {price}
    </p>
  </div>
);

const Billing = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="h-[1160px] relative bg-[#f7fafc] dark:bg-[#1B254B]">
      <img src={darkMode ? BgDark : Bg} alt="" />
      <div className="absolute top-0 grid grid-cols-[300px_1600px] tracking-wide">
        <Nav />
        <div className="grid gap-y-7 py-4">
          {/* header */}
          <Header name="Billing" />
          <div className="grid grid-cols-[461px_240px_240px_572px] grid-rows-[240px_172px] gap-4">
            {/* credit card */}
            <div
              className={`${
                darkMode
                  ? "bg-[url('./images/darkCredit.svg')]"
                  : "bg-[url('./images/credit.svg')]"
              } text-white p-6 grid content-between bg-cover`}
            >
              <div className="flex justify-between text-[18px] font-bold items-center">
                Argon x Chakra
                <img src={LogoCredit} alt="" />
              </div>
              <div className="flex flex-col uppercase">
                <p className="text-[24px] font-bold pb-4">
                  7812 2139 0823 XXXX
                </p>
                <div className="flex gap-6">
                  <p className="flex flex-col">
                    <span className="text-[10px] font-normal">valid thru</span>
                    <span className="text-[14px] font-bold">05/24</span>
                  </p>
                  <p className="flex flex-col">
                    <span className="text-[10px] font-normal">cvv</span>
                    <span className="text-[14px] font-bold">09x</span>
                  </p>
                </div>
              </div>
            </div>
            {/* salary */}
            <Card
              image={Wallet}
              name="Salary"
              des="Belong Interactive"
              price="2000"
              darkMode={darkMode}
            />
            {/* paypal */}
            <Card
              image={Paypal}
              name="Paypal"
              des="Freelance Payment"
              price="455.00"
              darkMode={darkMode}
            />
            {/* invoices */}
            <div
              className={`${
                darkMode ? "bg-[#111C44]" : "bg-white"
              } row-span-2 rounded-2xl p-6 shadow`}
            >
              <div className="flex justify-between items-center">
                <p
                  className={`${
                    darkMode ? "text-white" : "text-[#2D3748]"
                  } text-[18px] font-bold`}
                >
                  Invoices
                </p>
                <button
                  className={`${
                    darkMode
                      ? "bg-[#111C44] text-white border-white"
                      : "bg-white text-[#3182CE] border-[#3182CE]"
                  } uppercase rounded-lg border-solid border-[1px] 
                  w-[110px] h-[35px] text-[10px] font-bold`}
                >
                  view all
                </button>
              </div>
              <Invoices
                day="March, 01, 2020"
                id="MS-415646"
                price="180"
                darkMode={darkMode}
              />
              <Invoices
                day="February, 10, 2021"
                id="RV-126749"
                price="250"
                darkMode={darkMode}
              />
              <Invoices
                day="April, 05, 2020"
                id="FB-212562"
                price="560"
                darkMode={darkMode}
              />
              <Invoices
                day="June, 25, 2019"
                id="QW-103578"
                price="120"
                darkMode={darkMode}
              />
              <Invoices
                day="March, 01, 2019"
                id="AR-803481"
                price="300"
                darkMode={darkMode}
              />
            </div>
            {/* payment method */}
            <div
              className={`${
                darkMode ? "bg-[#111C44]" : "bg-white"
              } col-span-3 rounded-2xl p-6 grid shadow`}
            >
              <div className="flex justify-between items-start">
                <p
                  className={`${
                    darkMode ? "text-white" : "text-black"
                  } text-[14px] font-bold`}
                >
                  Payment Method
                </p>
                <button
                  className={`btn uppercase ${
                    darkMode ? "bg-[#3182CE]" : "bg-[#2D3748]"
                  } text-white w-[135px] h-[35px] text-[10px] font-bold rounded-lg`}
                >
                  add a new card
                </button>
              </div>
              <div className="flex justify-between items-center">
                <Method image={MasterCard} darkMode={darkMode} />
                <Method image={Visa} darkMode={darkMode} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[900px_644px] h-[538px] gap-4">
            {/* Billing Information */}
            <div className="dark:bg-[#111C44] bg-white rounded-2xl shadow px-6">
              <p className="text-[18px] font-bold text-[#2D3748] py-6 dark:text-white">
                Billing Information
              </p>
              <div className="flex flex-col gap-6">
                <BillingInfo
                  name="Oliver Liam"
                  comName="Viking Burrito"
                  email="oliver@burrito.com"
                  vat="FRB1235476"
                  darkMode={darkMode}
                />
                <BillingInfo
                  name="Oliver Liam"
                  comName="Viking Burrito"
                  email="oliver@burrito.com"
                  vat="FRB1235476"
                  darkMode={darkMode}
                />
                <BillingInfo
                  name="Oliver Liam"
                  comName="Viking Burrito"
                  email="oliver@burrito.com"
                  vat="FRB1235476"
                  darkMode={darkMode}
                />
              </div>
            </div>
            <div className="bg-white dark:bg-[#111C44] rounded-2xl shadow p-6">
              <div className="flex items-center justify-between">
                <p className="text-[#2D3748] font-bold text-[18px] dark:text-white">
                  Your Transactions
                </p>
                <div className="flex gap-2">
                  <img src={Calendar} alt="" />
                  <p className="text-[14px] font-bold text-[#A0AEC0]">
                    23-30 March 2020
                  </p>
                </div>
              </div>
              <p className="uppercase font-bold text-[#A0AEC0] text-[10px] py-4">
                newest
              </p>
              <Transaction
                image={Down}
                name="Netflix"
                time="27 March 2020, at 12:30 PM"
                price="-$2500"
                color="#E53E3E"
                textColor="#E53E3E"
              />
              <Transaction
                image={Up}
                name="Apple"
                time="27 March 2020, at 12:30 PM"
                price="+$2500"
                color="#48BB78"
                textColor="#48BB78"
              />
              <p className="uppercase font-bold text-[#A0AEC0] text-[10px] py-4">
                yesterday
              </p>
              <Transaction
                image={Up}
                name="Stripe"
                time="26 March 2020, at 13:45 PM"
                price="+$800"
                color="#48BB78"
                textColor="#48BB78"
              />
              <Transaction
                image={Up}
                name="HubSpot"
                time="26 March 2020, at 12:30 PM"
                price="+$1700"
                color="#48BB78"
                textColor="#48BB78"
              />
              <Transaction
                image={Pending}
                name="Webflow"
                time="26 March 2020, at 05:00 AM"
                price="Pending"
                color="#A0AEC0"
                textColor={darkMode ? "white" : "black"}
              />
              <Transaction
                image={Down}
                name="Microsoft"
                time="25 March 2020, at 16:30 PM"
                price="-$987"
                color="#E53E3E"
                textColor="#E53E3E"
              />
            </div>
          </div>
          {/* footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Billing;
