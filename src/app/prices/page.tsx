import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import PaymentCard from "./PaymentCard";

const Pricing = () => {
  const paydata = [
    {
      level: "Starter",
      amount: "$89",
      button: "Choose Starter Plan",
      bg: "bg-blue-500",
      profit: "$3,000.00",
      pt: "6.00%",
      loss: "$1,000.00",
      dd: "2.00%",
      max: "3",
    },
    {
      level: "Expert",
      amount: "$149",
      button: "Choose Expert Plan",
      bg: "bg-red-500",
      profit: "$3,500.00",
      pt: "7.00%",
      loss: "$0.00",
      dd: "0.00%",
      max: "5",
    },
  ];
  return (
    <section id="prices" className="flex flex-col relative p-2">
      {/*part1*/}
      <div className="w-full max-w-6xl mx-auto px-3 mt-30">
        <div className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/*left side*/}
            <div className="flex flex-col">
              <h1 className="text-4xl md:text-5xl font-semibold">
                Get Convenience of Transaction With New Evolution
              </h1>
              <p className="mt-5">
                Enjoy easy and fast transactions with our new system. Pay and
                manage your money without any hassle. Make your transactions
                simple and convenient every day!
              </p>

              <div className="flex items-center gap-5 mt-10">
                <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-indigo-600 text-white cursor-pointer ">
                  <p>Get Started</p>
                  <FaArrowRightLong />
                </button>
                <button className="flex justify-center px-3 py-1 border border-blue-700/50 rounded-lg cursor-pointer">
                  Learn more
                </button>
              </div>
            </div>

            {/*right side*/}
            <div>
              <img
                src="/pricing1.png"
                alt=""
                className="h-70 w-80 md:h-110 md:w-120 mt-4 md:mt-0"
              />
            </div>
          </div>

          <div
            className="w-[100%] flex item-center justify-around rounded-xl px-3 py-6 md:py-18 mt-15 shadow-lg shadow-gray-300"
            style={{
              backgroundColor: "#DFDBE5",
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='18' viewBox='0 0 100 18'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M61.82 18c3.47-1.45 6.86-3.78 11.3-7.34C78 6.76 80.34 5.1 83.87 3.42 88.56 1.16 93.75 0 100 0v6.16C98.76 6.05 97.43 6 96 6c-9.59 0-14.23 2.23-23.13 9.34-1.28 1.03-2.39 1.9-3.4 2.66h-7.65zm-23.64 0H22.52c-1-.76-2.1-1.63-3.4-2.66C11.57 9.3 7.08 6.78 0 6.16V0c6.25 0 11.44 1.16 16.14 3.42 3.53 1.7 5.87 3.35 10.73 7.24 4.45 3.56 7.84 5.9 11.31 7.34zM61.82 0h7.66a39.57 39.57 0 0 1-7.34 4.58C57.44 6.84 52.25 8 46 8S34.56 6.84 29.86 4.58A39.57 39.57 0 0 1 22.52 0h15.66C41.65 1.44 45.21 2 50 2c4.8 0 8.35-.56 11.82-2z'%3E%3C/path%3E%3C/svg%3E\")",
            }}
          >
            <div className="flex flex-col space-y-2">
              <p className="font-bold text-xl md:text-3xl text-center">3M+</p>
              <p className="text-xs md:text-xl font-semibold text-center">
                Satisfied User Globaly
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="font-bold text-xl md:text-3xl text-center">10%</p>
              <p className="text-xs md:text-xl font-semibold text-center">
                Benificial Cashback
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="font-bold text-xl md:text-3xl text-center">150+</p>
              <p className="text-xs md:text-xl font-semibold text-center">
                Countries Support
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*part2*/}
      <div className="h-screen w-full border rounded-2xl relative overflow-hidden mt-25">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[-2] "
        >
          <source
            src="https://res.cloudinary.com/dlseuftkj/video/upload/v1752233826/galaxy_codwki.mp4"
            type="video/mp4"
          />
        </video>
        <div className="w-full max-w-5xl mx-auto flex items-center justify-center mt-45">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl md:text-9xl font-semibold custom-metallic-text z-10">
              Starter Plan
            </h1>
            <img
              src="/rocket5.png"
              alt=""
              className="absolute h-45 w-35 md:h-110 md:w-95 opacity-85 z-0 md:-mr-25"
              style={{ top: "calc(36% - 150px)", right: "calc(45% - 150px)" }}
            />
            <p className="w-full max-w-md mx-auto px-2 text-center text-sm md:text-lg text-white font-semibold mt-13">
              Take on the challenge with NebulaCoin&apos;s features evaluation
              process and showcase your skills to become a funded trader.
              Achieve your trading goals and get funded in as little as 4 days.
            </p>

            <button className="px-3 py-1 md:px-5 md:py-2 bg-gradient-to-br from-indigo-700  to-white/50 text-white rounded-lg mt-10 text-sm md:text-lg">
              Get Funded
            </button>
          </div>
        </div>
      </div>

      {/*part3*/}
      <div className="mt-25 flex flex-col items-center">
        <h1 className="text-3xl md:text-6xl mb-7 font-semibold">
          Choose what&apos;s best for you
        </h1>
        <div className="text-xs text-center md:text-base flex item-center gap-3.5 rounded-3xl border border-gray-400/50 p-1 text-gray-800">
          <p className="rounded-2xl bg-gray-200 px-1.5 md:text-md">
            $50,000 account
          </p>
          <p>$100,000 account</p>
          <p>$150,000 account</p>
        </div>

        <div className="">
          <div className="mt-13 grid grid-cols-1 md:grid-cols-2 gap-9 w-75 md:w-185 ">
            {paydata.map((data, key) => (
              <PaymentCard key={key} {...data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
