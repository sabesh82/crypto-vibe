import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";

const PaymentCard = ({
  level,
  amount,
  button,
  profit,
  pt,
  loss,
  dd,
  max,
}: {
  level: string;
  amount: string;
  button: string;
  profit: string;
  pt: string;
  loss: string;
  dd: string;
  max: string;
}) => {
  return (
    <div className="bg-gradient-to-tr from-indigo-700 to-indigo-100 p-2 rounded-2xl shadow-lg shadow-gray-200 border border-gray-400/50">
      <div className="p-1 border border-gray-400/50 rounded-xl bg-gradient-to-br from-blue-300 to-white">
        <div className="flex flex-col p-3">
          <p className="mb-3.5 text-indigo-700 text-xl font-semibold">
            {level}
          </p>
          <p className="text-2xl font-semibold text-gray-700">
            {amount} <span className="text-sm text-gray-500">/month</span>
          </p>

          <p className="mt-1.5 text-gray-600">Simple and Powerful</p>
          <button className="mt-3 w-full py-1.5 flex items-center gap-2 justify-center  rounded-md  bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-800 text-white border border-white cursor-pointer">
            <p className="font-semibold">{button}</p>
            <FaArrowRightLong />
          </button>

          <p className="mt-8 text-gray-600">Get Started Today:</p>
          <div className="flex flex-col space-y-1.5 mt-4">
            <div className="flex item-center justify-between">
              <p>Profit Target</p>
              <p>{profit}</p>
            </div>
            <div className="flex item-center justify-between">
              <p>PT%</p>
              <p>{pt}</p>
            </div>
            <div className="flex item-center justify-between">
              <p>Daily Loss</p>
              <p>{loss}</p>
            </div>
            <div className="flex item-center justify-between">
              <p>DD%</p>
              <p>{dd}</p>
            </div>
            <div className="flex item-center justify-between">
              <p>Max Position</p>
              <p>{max}</p>
            </div>
          </div>

          <div className="mt-7 flex items-center justify-center gap-1 cursor-pointer mb-4">
            <p>View more</p>
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
