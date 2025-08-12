import React from "react";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";

const page = () => {
  return (
    <section className="flex flex-col p-2">
      <div className=" w-full border-y-1 rounded-xl border border-gray-400/50 relative overflow-hidden bg-gray-50">
        <div className="flex flex-col w-full max-w-6xl mx-auto px-3 pt-30 pb-5 md:pt-45 md:pb-15 ">
          <h1 className="text-gray-600 text-lg font-semibold">The FAQs</h1>
          <p className="text-5xl font-bold mt-2.5">Help Center</p>
          <p className="mt-5 text-lg">
            Everything you need to know about is here!
          </p>
        </div>
        <img
          src="/rainbow2.png"
          alt=""
          className="absolute top-2 right-1 z-50 opacity-20 md:opacity-40 h-72 w-100 md:h-200 md:w-220 rotate-90"
        />
      </div>

      <div className="w-full max-w-6xl mx-auto px-3 mt-25">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/*left side*/}
          <div className="flex flex-col">
            <div className="flex flex-col text-5xl font-semibold">
              <p>Our Most Asked</p>
              <p>Questions</p>
            </div>
            <div className="flex flex-col mt-8 text-xs md:text-base">
              <p>Can&apos;t find the answer you need? Explore more</p>
              <p>
                questions and answers on the{" "}
                <span className="text-gray-600 font-bold">FAQ page</span>
              </p>
            </div>

            <button className="px-3 py-1 border rounded-xl border-gray-400/50 text-white bg-gradient-to-b from-indigo-700 to-indigo-300 flex items-center gap-1.5 w-30 justify-center mt-6 cursor-pointer">
              <p>View all</p>
              <FaArrowRight />
            </button>
          </div>

          {/*right side*/}
          <div className="flex flex-col space-y-8 w-65 md:w-110">
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <p>Who can trade here?</p>
                <FaPlus className="text-indigo-700 cursor-pointer" />
              </div>
              <div className="border-t border-1 text-gray-300 mt-3"></div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <p>What is End-of-Day Trailing Drawdown?(EOD)</p>
                <FaPlus className="text-indigo-700 cursor-pointer" />
              </div>
              <div className="border-t border-1 text-gray-300 mt-3"></div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <p>What assets can i trade?</p>
                <FaPlus className="text-indigo-700 cursor-pointer" />
              </div>
              <div className="border-t border-1 text-gray-300 mt-3"></div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <p>
                  Is there a maximum number of accounts
                  <br />I can have at one?
                </p>
                <FaPlus className="text-indigo-700 cursor-pointer" />
              </div>
              <div className="border-t border-1 text-gray-300 mt-3"></div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <p>Are there any withdrawal restrictions?</p>
                <FaPlus className="text-indigo-700 cursor-pointer" />
              </div>
              <div className="border-t border-1 text-gray-300 mt-3"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-20 w-full max-w-6xl mx-auto px-3 text-center items-center">
        <h1 className="text-4xl font-semibold">Have any other questions?</h1>
        <div className="flex flex-col mt-6 text-md md:text-lg">
          <p>Don&apos;t hesitate to send us an email with your</p>
          <p>enquiry or statement at:</p>
        </div>
        <div className="flex px-2 py-2 bg-gray-200 rounded-md mt-5 w-full max-w-sm items-center gap-4 justify-center border border-gray-300/50 shadow-lg shadow-gray-300">
          <p className="text-md">Contact@NebulaCoin.com</p>
          <div className="flex items-center gap-1 bg-white px-1.5 py-1 rounded-sm cursor-pointer border border-gray-400/50">
            <p className="text-md">copy</p>
            <MdContentCopy />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
