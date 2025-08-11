"use client";
import React from "react";
import { FaBatteryFull, FaCaretUp, FaUserCircle } from "react-icons/fa";
import { FcIphone } from "react-icons/fc";
import { IoIosWifi, IoMdMail } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { MdArrowOutward, MdNetworkCell } from "react-icons/md";
import { PiBellSimpleRingingLight } from "react-icons/pi";
import PriceChart from "../components/PriceChart";
import Card from "./Card";
import { SiSaturn } from "react-icons/si";
import "swiper/css";
import "swiper/css/pagination";
import Testimonial from "./Testimonial";
import { FaArrowRightLong } from "react-icons/fa6";

const imgs = [
  "/bitcoin.png",
  "/binance.png",
  "/ethereum.png",
  "/shiba-inu.png",
  "/solana.png",
  "/tether.png",
  "/xrp.png",
  "/usd-coin.png",
  "/ton.png",
  "/cryptocurrency.png",
];

const cardData = [
  {
    img: "/card1.png",
    title: "Source",
    head: "Get the furthest reach",
    para: "Once your listing is created we'll find the most popular job boards relevant to your posting.",
  },
  {
    img: "/card2.png",
    title: "move faster",
    head: "Built for power users",
    para: "Built for traders who need speed and precision, with real-time data to stay ahead.",
  },
  {
    img: "/card3.png",
    title: "Insights",
    head: "Insights at Your Fingertips",
    para: "Get the latest trends in one quick glance. Simple charts, powerful information.",
  },
];

const testimonials = [
  {
    name: "Robin Ayala Doe",
    img: "/img1.jpg",
    message:
      "This service was fantastic! I couldn't be happier with the results.",
    position: "HR Specialist, Greenfield Enterprises",
  },
  {
    name: "John De marli",
    img: "/img2.jpg",
    message:
      "Absolutely outstanding service — it exceeded all my expectations!",
    position: "Project Coordinator, Everstone Solutions",
  },
  {
    name: "Rowhan Smith",
    img: "/img3.jpg",
    message:
      "I&apos;m truly impressed! Everything was handled with care and professionalism.",
    position: "Operations Lead, Skyline Ventures",
  },
  {
    name: "Sarah Johnson",
    img: "/img4.jpg",
    message: "From start to finish, the experience was seamless and enjoyable.",
    position: "Business Analyst, Summit Strategies",
  },
  {
    name: "Michael Chen",
    img: "/img5.jpg",
    message:
      "I couldn&apos;t have asked for a better outcome — highly recommended!",
    position: "CEO, CopaCurrency.Org",
  },
  {
    name: "Emma Wilson",
    img: "/img6.jpg",
    message:
      "Exceptional quality and attention to detail. I&apos;m beyond satisfied!",
    position: "Creative Director, PixelForge Studios",
  },
];

const Explore = () => {
  return (
    <section className="relative flex flex-col p-2 overflow-x-hidden">
      <div className="bg-white md:bg-[url('/hero.jpg')] bg-cover bg-center h-dvh w-full rounded-xl">
        <div className="w-full absolute top-30">
          <div className="w-full max-w-7xl mx-auto px-2 grid grid-cols-1 md:grid-cols-2">
            {/*left side*/}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <img src="/diamond.png" alt="" className="h-5.5 w-5.5" />
                <p className="text-sm md:text-md">
                  #1 crypto platform by Forbes (Jan 2025)
                </p>
              </div>

              <div className="mt-7 flex flex-col space-y-6">
                <p className="text-6xl md:text-5xl font-semibold font-mono">
                  Your crypto journey
                  <br /> starts with trust.
                </p>
                <p>
                  Join 15+ million investors who trust NebulaCoin to trade
                  <br /> and grow their crypto securely.
                </p>
              </div>

              <div className="flex items-center gap-0.5 md:gap-1 mt-5 bg-white/50 w-74 rounded-3xl py-1 px-1">
                <div className="flex items-center gap-2 ">
                  <IoMdMail className="size-5 text-orange-400" />
                  <input
                    type="text"
                    placeholder="sabesh769@gmail.com"
                    className="outline-none"
                  />
                </div>
                <div className="px-2 py-1 rounded-2xl bg-black text-white">
                  <button className="cursor-pointer">Sign up</button>
                </div>
              </div>

              <div className="mt-8 md:mt-25 flex items-center gap-0.5 md:gap-3">
                <img
                  src="/qrcode.jpg"
                  alt=""
                  className="h-15 w-15 rounded-md cursor-pointer"
                />
                <div className="flex items-center gap-0.5">
                  <p className="underline cursor-pointer text-sm md:text-md">
                    Download the NebulaCoin app
                  </p>
                  <FcIphone className="size-6" />
                </div>
              </div>
              <div className=" mt-4 md:mt-20 mb-5">
                <p className="text-gray-500">Trusted by Thousand</p>
              </div>
            </div>

            {/*right side*/}
            <div className="flex flex-col space-y-7 md:ml-30">
              <div className="w-75 md:w-100 rounded-3xl border border-gray-400 p-4 bg-transparent backdrop-blur-xl">
                <div className="flex items-center justify-between ">
                  <p className="text-md">9:41</p>
                  <div className="flex items-center gap-1.5">
                    <MdNetworkCell className="size-5" />
                    <IoIosWifi className="size-5" />
                    <FaBatteryFull className="size-5" />
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <p className="text-2xl font-semibold">Portfolio</p>
                  <div className="flex items-center gap-2.5">
                    {" "}
                    <PiBellSimpleRingingLight className="size-5" />
                    <FaUserCircle className="text-blue-500 size-8" />
                  </div>
                </div>

                <div className="flex flex-col space-y-1 mt-5">
                  <p className="text-sm text-gray-500">Portfolio value</p>
                  <div className="flex items-center gap-1.5">
                    <p className="text-3xl font-bold ">
                      $ 91.134.765
                      <span className="text-sm text-gray-500">,99</span>
                    </p>
                    <IoEyeOutline className="size-4.5 text-gray-500" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FaCaretUp className="text-green-500 text-md" />
                    <p className="text-green-500">$14,832.15(19.45%)</p>
                  </div>
                </div>

                <div className="mt-4">
                  <img src="/stat.png" alt="" className="rounded-md" />
                </div>
              </div>

              <div className="overflow-x-auto -mx-4 px-4 hide-scrollbar">
                <div className="flex items-center gap-3 flex-nowrap">
                  {imgs.map((img, key) => (
                    <img
                      key={key}
                      src={img}
                      className="size-8 flex-shrink-0"
                      alt=""
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*graph & statistics section*/}
      <div className="w-full max-w-7xl mx-auto mt-190 md:mt-28 px-2">
        <p className="text-gray-500 ">Statistics</p>
        <h1 className="text-6xl font-semibold flex flex-start mb-10">
          Track Bitcoin’s Latest
          <br /> Market Data.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-10 w-full max-w-7xl mx-auto">
          <PriceChart />

          <div className="w-74 md:w-115 mb-8 p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-lg shadow-gray-400 border border-gray-700 font-sans text-gray-300 text-justify">
            <h1 className="text-3xl mb-2 font-semibold">About:</h1>
            <p className="mb-4">
              ▪ This graph displays the{" "}
              <strong className="text-blue-400">Bitcoin (BTC)</strong> price
              trend in US Dollars over the past 30 days.
            </p>
            <p className="mb-4">
              ▪ The <strong className="text-blue-400">X-axis</strong> shows the
              dates for the last 30 days, while the
              <strong className="text-blue-400">Y-axis</strong> represents the
              price in USD.
            </p>
            <p className="mb-4">
              ▪ Each point on the line corresponds to the closing price of{" "}
              <strong className="text-blue-400">Bitcoin </strong>
              on that specific day.
            </p>
            <p className="mb-4">
              ▪ The data is live from the{" "}
              <strong className="text-blue-400">CoinGecko API</strong> and
              updates when the page loads.
            </p>
            <p>
              ▪ This visualization helps track Bitcoin&apos;s recent market
              performance and{" "}
              <strong className="text-blue-400">price fluctuations</strong> over
              the month.
            </p>
          </div>
        </div>
      </div>

      {/*card section*/}
      <div className="flex items-center mt-8">
        <div className="w-full max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cardData.map((data, key) => (
              <Card key={key} {...data} />
            ))}
          </div>
        </div>
      </div>

      {/*premium section*/}
      <div className="w-full h-dvh bg-gray-900 shadow-lg shadow-gray-400 text-white  rounded-xl flex items-center justify-center px-4 sm:px-8 mt-40">
        <div className="flex flex-col max-w-3xl sm:max-w-4xl mx-auto">
          <div className="flex items-center gap-4 justify-center">
            <SiSaturn className="size-12 sm:size-15 font-bold text-[#CECECE]" />
            <p className="text-3xl sm:text-5xl font-bold text-[#CECECE]">
              SuperNebula Coin
            </p>
          </div>
          <div className="text-center mt-6 sm:mt-9 text-base sm:text-xl text-[#767A80]">
            <p>Explore More with SuperNebula.</p>
            <p>
              Unlock the full potential with a{" "}
              <span className="text-[#CECECE]">SuperNebula</span> subscription
              at SuperNebula.com.
            </p>
          </div>

          <div className="text-center mt-6 sm:mt-9 text-base sm:text-xl text-[#767A80]">
            <p>
              Introducing{" "}
              <span className="text-[#CECECE]">SuperNebula Heavy!</span>
            </p>
            <p>
              Get access to Nebula Heavy features and enjoy much higher rate
              limits — launched and ready to power your crypto journey.
            </p>
          </div>

          <button className="px-4 py-1.5 text-white text-xl sm:text-2xl flex items-center justify-center gap-1 mt-6 sm:mt-8 mx-auto">
            <p>SignUp</p>
            <MdArrowOutward />
          </button>
        </div>
      </div>

      {/*testimonial section*/}
      <div className="flex flex-col gap-10 w-full max-w-7xl mx-auto px-0.5 md:px-3 mt-12">
        <div className="mt-20">
          <p>WHAT EVERYONE IS SAYING</p>
          <h1 className="text-4xl md:text-6xl font-semibold">
            Trusted by professionals
          </h1>
        </div>

        <div className="flex gap-8 mt-5 overflow-x-auto pb-4 hide-scrollbar px-3">
          {testimonials.map((data, key) => (
            <div
              className="min-w-[300px] border border-gray-400/50 rounded-xl bg-gray-800 text-white shadow-md shadow-gray-400"
              key={key}
            >
              <Testimonial {...data} />
            </div>
          ))}
        </div>

        <div className="flex flex-col">
          <p className="text-gray-500">
            Join millions of investors who trust NebulaCoin
            <br /> to grow and trade cryptocurrency securely.
          </p>
          <div className="flex items-center gap-1 mt-1 pb-1.5">
            <p>Get Started</p>
            <FaArrowRightLong />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
