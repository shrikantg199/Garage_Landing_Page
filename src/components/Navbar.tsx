"use client";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross1 } from "react-icons/rx";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="flex">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed md:hidden block left-20 top-0 h-screen  bg-[#0f172a]   p-4 z-50 text-center"
          >
            <RxCross1
              className="text-white ml-56  m-4 text-xl  cursor-pointer"
              onClick={toggleMenu}
            />
            <ul className="flex flex-col w-80">
              <button className="text-white cursor-pointer" onClick={toggleMenu} />
              <li className="my-2">
                <Link
                  href="#home"
                  onClick={() => {
                    scrollToSection("home");
                    toggleMenu();
                  }}
                  scroll={false}
                  className="text-white hover:text-gray-300"
                >
                  Home
                </Link>
              </li>
              <li className="my-2">
                <Link
                  href="#about"
                  onClick={() => {
                    scrollToSection("about");
                    toggleMenu();
                  }}
                  scroll={false}
                  className="text-white hover:text-gray-300"
                >
                  About
                </Link>
              </li>
              <li className="my-2">
                <Link
                  href="#services"
                  onClick={() => {
                    scrollToSection("services");
                    toggleMenu();
                  }}
                  scroll={false}
                  className="text-white hover:text-gray-300"
                >
                  Services
                </Link>
              </li>
              <Link href="/products" className="my-2">
                <li className="text-white hover:text-gray-300">Products</li>
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={cn(
          "relative w-screen md:block hidden bg-[#0f172a] inset-x-0 hover:text-orange-600  z-50",
          className
        )}
      >
        <Menu setActive={setActive}>
          <Link
            href="#home"
            onClick={() => scrollToSection("home")}
            scroll={false}
          >
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
            ></MenuItem>
          </Link>
          <Link
            href="#about"
            onClick={() => scrollToSection("about")}
            scroll={false}
          >
            <MenuItem
              setActive={setActive}
              active={active}
              item="About"
            ></MenuItem>
          </Link>
          <Link
            href="#services"
            onClick={() => scrollToSection("services")}
            scroll={false}
          >
            <MenuItem
              setActive={setActive}
              active={active}
              item="Services"
            ></MenuItem>
          </Link>
          <Link
            href="#contact"
            onClick={() => scrollToSection("contact")}
            scroll={false}
          >
            <MenuItem
              setActive={setActive}
              active={active}
              item="contact"
            ></MenuItem>
          </Link>
          <Link href="/products">
            <MenuItem
              setActive={setActive}
              active={active}
              item="Products"
            ></MenuItem>
          </Link>
        </Menu>
      </div>

      {/* mobile navbar */}
      <div className="fixed md:hidden block right-2 top-4 bg-[#0f172a]   py-2 rounded-lg m-2 z-20  justify-between items-center border border-gray-700 px-3">
        <CiMenuBurger
          className="text-white cursor-pointer"
          onClick={toggleMenu}
        />
      </div>
    </div>
  );
}

export default Navbar;
