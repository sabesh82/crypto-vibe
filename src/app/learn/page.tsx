import React from "react";
import { SiBitcoin } from "react-icons/si";

const page = () => {
  return (
    <section className="flex flex-col p-2">
      {/*part1*/}
      <div className="w-full max-w-6xl mx-auto px-3 mt-28 md:mt-35">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/*left side*/}
          <div className="flex flex-col">
            <div className="flex flex-col">
              <p className="text-4xl md:text-7xl mb-1.5">What is</p>
              <div className="flex items-center gap-2  text-4xl md:text-7xl pl-5">
                <SiBitcoin className="text-orange-400" />
                <p className="font-bold">Bitcoin?</p>
              </div>
            </div>

            <div className="mt-7 md:mt-15 text-gray-500 text-base md:text-lg">
              <p>
                It is one the most popular cryptocurrencies in the world.Its
                ticker symbol is BTC. you can find it accross many exchanges
                showing Bitcoin price and in trading pairs next to other
                cryptocurrency.
              </p>
            </div>

            <button className="px-3 py-1 md:px-5 md:py-2 bg-orange-400 text-white rounded-xl mt-5 md:mt-10 w-50">
              Buy Bitcoin
            </button>
          </div>

          {/*right side*/}
          <div className="flex flex-col">
            <img src="/mining.png" alt="" className="mt-2" />

            <div className="flex flex-col mt-2  ml-2 md:ml-40">
              <p className="text-gray-500">HOW MUCH DOES BITCOIN COST?</p>
              <div className="flex items-center gap-1.5 mt-1.5 font-semibold text-xs md:text-base">
                <p>1 BTC = </p>
                <p>$ 8,000 = </p>
                <p>€ 6,500 = </p>
                <p>2,400,000 LKR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 text-gray-300">
        <hr />
      </div>

      {/*part2*/}
      <div className="mt-15 md:mt-30 w-full max-w-6xl mx-auto px-3">
        <div className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/*left side*/}
            <div className="flex flex-col text-5xl">
              <p>Main Features</p>
              <div className="flex items-center gap-2">
                of{" "}
                <div className="font-bold flex flex-col">
                  Bitcoin{" "}
                  <div className="border-t-3 w-40 text-orange-400"></div>
                </div>
              </div>
            </div>

            <div className="mt-4 text-lg text-gray-600">
              <p>
                People value it as a way of investment or making money trading
                it. Some specialists value it more for its technological
                features and specifications.
              </p>
            </div>
          </div>

          <div className="mt-15 md:mt-25">
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:gap-45">
                {/*box1*/}
                <div className="flex items-center gap-10 px-13 py-13 border border-gray-400/50">
                  <div className="rotate-90 text-2xl">Ɩ0</div>
                  <div className="border-l border-gray-400 h-15"></div>
                  <div className="flex flex-col font-semibold">
                    <p>Peer-to-peer</p>
                    <p>transactions</p>
                  </div>
                </div>

                {/*box2*/}
                <div className="flex flex-col px-13 py-13 bg-orange-500 text-white">
                  <div className="flex items-center gap-10">
                    <div className="rotate-90 text-2xl">ᘔ0</div>
                    <div className="border-l border-white h-15"></div>
                    <div className="flex flex-col font-semibold">
                      <p>Fraud</p>
                      <p>protection</p>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <p>
                      HTTPS,2FA,IP
                      <br />
                      ,selected transaction
                      <br /> confirmation
                    </p>
                  </div>
                </div>

                {/*box3*/}
                <div className="flex items-center gap-10 px-13 py-13 border border-gray-400/50">
                  <div className="rotate-90 text-2xl">Ɛ0</div>
                  <div className="border-l border-gray-400 h-15"></div>
                  <div className="flex flex-col font-semibold">
                    <p>Instant</p>
                    <p>withdraw</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-13 text-gray-300">
        <hr />
      </div>

      {/*part3*/}
      <div className="mt-25 w-full max-w-6xl mx-auto px-3">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col text-center text-3xl font-semibold md:text-5xl">
            <p>Cryptocurrencies that you</p>{" "}
            <p>can buy, sell, trade at NebulaCoin</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-15 md:gap-25 mt-15 md:mt-22">
            <div className="flex flex-col space-y-5">
              <div className="flex items-center gap-4">
                <img
                  src="/bitcoin.png"
                  alt=""
                  className="h-10 w-10 md:h-12 md:w-12"
                />
                <p className="text-md md:text-xl">Bitcoin</p>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="/ethereum.png"
                  alt=""
                  className="h-10 w-10 md:h-12 md:w-12"
                />
                <p className="text-md md:text-xl">Ethereum</p>
              </div>
            </div>

            <div className="flex flex-col space-y-5">
              <div className="flex items-center gap-4">
                <img
                  src="/shiba-inu.png"
                  alt=""
                  className="h-10 w-10 md:h-12 md:w-12"
                />
                <p className="text-md md:text-xl">Shiba</p>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="/solana.png"
                  alt=""
                  className="h-10 w-10 md:h-12 md:w-12"
                />
                <p className="text-md md:text-xl">Solana</p>
              </div>
            </div>

            <div className="flex flex-col space-y-5">
              <div className="flex items-center gap-4">
                <img
                  src="/tether.png"
                  alt=""
                  className="h-10 w-10 md:h-12 md:w-12"
                />
                <p className="text-md md:text-xl">Tether</p>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="/ton.png"
                  alt=""
                  className="h-10 w-10 md:h-12 md:w-12"
                />
                <p className="text-md md:text-xl">Ton</p>
              </div>
            </div>

            <div className="flex flex-col space-y-5">
              <div className="flex items-center gap-4">
                <img
                  src="/usd-coin.png"
                  alt=""
                  className="h-10 w-10 md:h-12 md:w-12"
                />
                <p className="text-md md:text-xl">USDCoin</p>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="/xrp.png"
                  alt=""
                  className="h-10 w-10 md:h-12 md:w-12"
                />
                <p className="text-md md:text-xl">XRP</p>
              </div>
            </div>
          </div>

          <button className="mt-15 md:mt-27 px-4 py-2 bg-orange-400 text-white rounded-xl">
            Buy Cryptocurrencies
          </button>
        </div>
      </div>
      <div className="mt-13 text-gray-300">
        <hr />
      </div>

      {/*part4*/}
      <div className="mt-25 w-full max-w-6xl mx-auto px-3 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Register and Start buying Bitcoin
        </h1>
        <h2 className="mt-5 text-4xl">Choose your Coin!!!</h2>
        <div className="flex items-center gap-2 mt-15 md:mt-25">
          <input
            type="text"
            className="px-3 py-1.5 md:px-5 md:py-3 border w-45 md:w-100 rounded-3xl text-xs md:text-lg outline-none"
            placeholder="enter your mobile number"
          />
          <button className="px-2 py-1 md:px-3 md:py-3.5 border-orange-700 rounded-3xl bg-orange-400 text-white border w-20 md:w-25">
            Register
          </button>
        </div>
        <p className="mt-5 text-xs md:text-sm">
          By registering, you agree to our{" "}
          <span className="text-gray-500 underline">Terms of Service</span> and
          <span className="text-gray-500 underline"> Privacy Policy</span>
        </p>
      </div>
    </section>
  );
};

export default page;
