"use client";
import { headerListItem } from "@/constants";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const Header = () => {
  const [active, setActive] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const pathName = usePathname();
  useEffect(() => {
    setActive(pathName);
  }, [pathName]);
  return (
    <div className="w-full h-20 border-b-[1px] border-gra-500 px-2 bg-white">
      <div className="h-full max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"} className="relative group overflow-hidden">
          <p className="text-2xl font-bold">Creative Studio</p>
          <span className="absolute bottom-0 w-full h-[2px] bg-primeColor inline-block -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-700"></span>
        </Link>
        {showMenu && (
          <div className="w-full h-screen fixed lg:hidden top-0 left-0 bg-darkGreen bg-opacity-90 z-50">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="w-[70%] h-full bg-darkGreen p-4 relative flex flex-col gap-4"
            >
              <span
                onClick={() => setShowMenu(false)}
                className="absolute right-2 top-8 text-3xl text-red-400 hover:text-red-600 cursor-pointer duration-300"
              >
                <IoCloseSharp />
              </span>
              <Link href={"/"} onClick={() => setShowMenu(false)}>
                <p className="text-2xl font-bold text-white">Creative Studio</p>
              </Link>
              <ul className="flex flex-col text-gray-300 gap-3 uppercase text-sm font-semibold ">
                {headerListItem.map((item) => (
                  <Link key={item._id} href={item.link}>
                    <li
                      onClick={() => setShowMenu(false)}
                      className="hover:text-white cursor-pointer duration-300"
                      key={item._id}
                    >
                      {item.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </motion.div>
          </div>
        )}
        <div
          onClick={() => setShowMenu(true)}
          className="flex flex-col justify-between lg:hidden w-7 h-5 overflow-hidden group cursor-pointer"
        >
          <span className="w-full h-[3px] bg-gray-500 group-hover:bg-primeColor -translate-x-1 group-hover:translate-x-0 transition-transform duration-500"></span>
          <span className="w-full h-[3px] bg-gray-500 group-hover:bg-primeColor -translate-x-[40%] group-hover:translate-x-0 transition-transform duration-500"></span>
          <span className="w-full h-[3px] bg-gray-500 group-hover:bg-primeColor"></span>
        </div>
        {/* Navbar List Item */}
        <div className="hidden lg:inline-flex items-center gap-8 text-sm uppercase font-semibold tracking-wide">
          <ul className="flex gap-8">
            {headerListItem.map((item) => (
              <Link key={item._id} href={item.link}>
                <li
                  className={`${
                    active === item.link && "text-primeColor"
                  } hover:text-primeColor cursor-pointer duration-300 group relative`}
                >
                  {item.title}
                  <span
                    className={`${
                      active === item.link && "scale-100"
                    } absolute w-full transform scale-0 group-hover:scale-100 duration-500 h-[2px] -bottom-[1px] left-0 bg-primeColor inline-block`}
                  ></span>
                </li>
              </Link>
            ))}
          </ul>

          <button className="w-36 h-10 bg-darkGreen text-white uppercase rounded-md hover:bg-primeColor duration-300">
            Hire me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
