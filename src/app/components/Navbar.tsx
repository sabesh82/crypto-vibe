"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const router = useRouter();

  const links = [
    {
      href: "/explore",
      label: "Explore",
    },
    {
      href: "/prices",
      label: "Prices",
    },
    {
      href: "/learn",
      label: "Learn",
    },
    {
      href: "/frequent-questions",
      label: "FAQ",
    },
  ];

  const [activeLink, setActiveLink] = useState("/explore");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full z-50 fixed top-5 px-2">
      <div className="w-full max-w-7xl mx-auto px-3 flex items-center justify-between h-16 bg-transparent backdrop-blur-2xl rounded-lg">
        {/*logo*/}
        <div>
          <p className="text-xl font-semibold cursor-pointer">NebulaCoin</p>
        </div>

        {/*toggle button*/}
        <div
          className="md:hidden flex items-center gap-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <button>
            <div className="px-2 py-1 rounded-2xl bg-black text-white cursor-pointer">
              Login
            </div>
          </button>
          <button className="p-1.5 border border-gray-400/50 rounded-full ">
            {isMenuOpen ? (
              <HiX className="size-6" />
            ) : (
              <HiMenu className="size-6" />
            )}
          </button>
        </div>

        {/*navlinks*/}
        <div className="hidden md:flex items-center gap-11">
          {links.map((link, key) => (
            <button
              key={key}
              onClick={() => {
                setActiveLink(link.href), router.push(link.href);
              }}
              className="cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/*login & register button*/}
        <div className="hidden md:flex items-center gap-5">
          <button className="cursor-pointer">
            <p>Login</p>
          </button>
          <button>
            <div className="px-3 py-1 bg-black rounded-2xl cursor-pointer">
              <p className="text-white ">SignUp</p>
            </div>
          </button>
        </div>
      </div>

      {/*moblie menu*/}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-5 bg-transparent backdrop-blur-3xl items-center py-2.5 rounded-md mt-1 bg-gradient-to-r from-purple-600 to-black text-transparent bg-clip-text font-semibold text-lg border border-gray-400/50">
          {links.map((link, key) => (
            <a
              key={key}
              href={link.href}
              onClick={() => {
                setActiveLink(link.href);
                setIsMenuOpen(false);
                router.push(link.href);
              }}
              className="cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
