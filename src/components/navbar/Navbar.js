"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import SmoothScrollLink from "@/components/SmoothScrollLink";
import AOSInitializer from "@/components/AOSInitializer";
import AOS from 'aos';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  AOSInitializer();

  useEffect(() => {
    if (open) {
      AOS.refresh();
    }
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  return (
    <header
      className={`w-full transition-colors border-b border-gray-700 duration-300 ${
        open ? "bg-[#121212] " : "bg-background dark:bg-dark"
      } ${!open && "lg:border-none"}`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-12 items-center">
          {/* Logo Section */}
          <div className="col-span-6 lg:col-span-3 flex items-center gap-3">
            <Image
              src="/new_me.png"
              alt="Profile"
              width={40}
              height={40}
              className="h-[40px] w-[40px] rounded-full border border-white object-cover"
            />
            <Link href="/" className="font-poppins text-white font-bold">
              Daksh
            </Link>
          </div>

          {/* Animated Hamburger Menu */}
          <div className="col-span-6 lg:hidden flex justify-end ">
            <button
              onClick={() => setOpen(!open)}
              className="text-white p-2 relative w-10 h-10"
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 ">
                <span
                  className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                    open ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-white my-1.5 transition-opacity duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                    open ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Navigation Menu */}
          <div
            className={`lg:col-span-9 col-span-12 ${
              open ? "block z-50" : "hidden "
            } lg:block `}
          >
            <div
              ref={navRef}
              data-aos={open ? "fade-left" : ""}
              data-aos-duration="500"
              className={`lg:relative fixed top-0  right-0 h-screen lg:h-auto w-[280px] lg:w-auto 
              bg-[#121212] lg:bg-transparent transform transition-all duration-500 ease-in-out
              ${
                open ? "translate-x-0 " : "translate-x-full"
              } lg:translate-x-0 `}
            >
              <ul className="flex flex-col lg:flex-row lg:justify-end lg:items-center gap-8 p-8 lg:p-0">
                {["Portfolio", "About", "Career", "Contact" , "Blog"].map((item, index) => (
                  <li
                    key={index}
                    data-aos={open ? "fade-left" : ""}
                    data-aos-delay={index * 100}
                    data-aos-duration="400"
                    className="relative group font-opensans text-lg lg:text-base"
                  >
                    <SmoothScrollLink
                      href={`#${item.toLowerCase()}`}
                      className="text-white font-montserrat font-medium transition-colors duration-300 hover:text-gray-300"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </SmoothScrollLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
