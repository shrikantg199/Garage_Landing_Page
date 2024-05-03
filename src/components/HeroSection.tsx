"use client";
import React from "react";
import { Button } from "./ui/moving-border";
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { ImagesSlider } from "./ui/images-slider";
import Image from "next/image";
import logo from "../../public/image1.jpg";
import instagram from "../../public/instagram.svg";
import Whatsapp from "../../public/whatsapp.svg";
import youtube from "../../public/Youtube.svg";
import bike1 from "../../public/bike1.jpg";
import Link from "next/link";
function HeroSection() {
  const images = [
    "https://imgd.aeplcdn.com/1056x594/n/cw/ec/103795/yzf-r15-right-rear-three-quarter.jpeg?isig=0&q=80&wm=3",
    "https://bd.gaadicdn.com/processedimages/yamaha/r15-v4/source/r15-v4616fa9c8989fe.jpg?imwidth=880",
    "https://i.pinimg.com/564x/34/d8/52/34d85284e3d1b33288a18cbb861818bd.jpg",
  ];
  return (
    <>
      <ImagesSlider className="h-screen" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <div className="md:mt-44">
            <motion.p
              className={cn(
                "md:text-5xl px-4 font-serif text-center  text-xl text-white relative z-20 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 font-medium w-full inline-block text-transparent  bg-clip-text"
              )}
            >
              Welcome to Shiv Auto Garage.
            </motion.p>
            <p className="text-center md:text-start md:text-xl font-serif   mt-2 text-neutral-300 relative z-20 ">
              Explore our garage: services, repairs, and upgrades for your
              vehicle,
              <br /> ensuring reliability and performance
              <div className="my-4 mx-auto flex justify-center">
                {" "}
                <Link href="/products">
                  <Button
                    borderRadius="1.75rem"
                    className="bg-white  dark:bg-slate-800 text-black dark:text-white text-lg  border-neutral-400 dark:border-slate-800"
                  >
                    Product List
                  </Button>
                </Link>
              </div>
              <div className="flex gap-16 h-10 mx-20 ">
                <div className="">
                  {" "}
                  <Image
                    src={instagram}
                    alt="social"
                    className="h-12 w-12 hover:scale-110 cursor-pointer"
                  />
                </div>
                <div className="">
                  {" "}
                  <Image
                    src={Whatsapp}
                    alt="social"
                    className="h-12 w-12 hover:scale-110 cursor-pointer"
                  />
                </div>
                <div className="">
                  {" "}
                  <Image
                    src={youtube}
                    alt="social"
                    className="h-12 w-12 hover:scale-110 cursor-pointer"
                  />
                </div>
              </div>
            </p>
          </div>
        </motion.div>
      </ImagesSlider>
    </>
  );
}
export default HeroSection;
