import React from "react";
import { SiSaturn } from "react-icons/si";

const Footer = () => {
  const footerLinks = {
    Product: [{ name: "Pricing" }, { name: "Business" }, { name: "About" }],
    getHelp: [
      { name: "Support Carrer" },
      { name: "24h Service" },
      { name: "Quick Chat" },
    ],
    support: [{ name: "Careers" }, { name: "Blogs" }],
    contact: [{ name: "WhatsApp" }, { name: "Support 24" }],
  };

  return (
    <section className="mt-20 md:mt-30 bg-gradient-to-br from-blue-300 to-white w-full p-4 overflow-x-hidden">
      <div
        className="w-full max-w-screen-2xl mx-auto px-4 min-h-[500px] md:min-h-[675px] 
                   bg-gradient-to-br from-blue-100 to-white border border-blue-200 rounded-2xl
                   flex flex-col justify-center items-center box-border overflow-visible"
      >
        <div className="flex flex-col items-center max-w-full px-2 md:px-0">
          <p>GET STARTED</p>
          <div className="flex flex-col font-semibold text-2xl md:text-5xl items-center mt-5 text-center max-w-full">
            <p>Ready to dive in?</p>
            <p>Start your free trial today.</p>
          </div>

          <div className="flex flex-col text-gray-600 items-center mt-6 text-center max-w-full">
            <p>Start finding the right people for the right job and</p>
            <p>build your dream team.</p>
          </div>

          <button className="px-6 py-2 bg-black text-white rounded-2xl mt-6">
            Get Started
          </button>
        </div>

        <div className="w-full mt-10 border-black/15 border-t"></div>

        <div className="w-full max-w-screen-xl mx-auto px-3 box-border">
          <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mt-8 max-w-full">
            <div className="flex items-center gap-1 mb-6 md:mb-0 font-bold shrink-0">
              <SiSaturn className="size-6" />
              <p className="text-xl mr-10 whitespace-nowrap">NebulaCoin</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-full">
              {Object.entries(footerLinks).map(([section, links]) => (
                <div key={section}>
                  <h2 className="font-semibold text-lg mb-3 text-gray-600 capitalize">
                    {section === "getHelp" ? "Get Help" : section}
                  </h2>
                  {links.map((link, key) => (
                    <div
                      key={key}
                      className="text-black cursor-pointer mb-2 truncate"
                    >
                      {link.name}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full mt-10 border-black/15 border-t"></div>

        <div className="mt-1 py-1 md:mt-6 text-xs md:text-lg">
          <p>@2025 NebulaCoins</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
