"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { Button } from "./ui/moving-border";

export function Services() {
  const services = [
    {
      title: "Oil Change",
      description:
        "Regular oil changes help maintain the performance and longevity of your vehicle's engine.",
      image:
        "https://d26qplkpp6t30l.cloudfront.net/wp-content/uploads/2019/01/22092032/oil-change-explained.jpg",
    },
    {
      title: "Tire Rotation",
      description:
        "Regular tire rotations ensure even wear and extend the lifespan of your tires.",
      image:
        "https://skipsgaragerepair.com/wp-content/uploads/2020/03/Screen-Shot-2020-03-26-at-12.16.24-PM.png", // Example image path
    },
    {
      title: "Brake Inspection",
      description:
        "Ensure your safety with regular brake inspections and maintenance.",
      image:
        "https://media.istockphoto.com/id/1313034710/photo/close-up-of-motorcycle-rider-hand-holding-clutch.jpg?s=612x612&w=0&k=20&c=pjmsGEXcvTxBzxlIIXbw5QZLATFuOX128TDFukU3Cn8=", // Example image path
    },
  ];
  return (
    <>
      <div className="">
        <h2 className="text-3xl  text-center py-4 text-white">services</h2>
      </div>

      <div className="mx-6  md:mx-0 py-3 flex flex-col  md:flex-row gap-12 justify-center ">
        {services.map((service, index) => (
          <BackgroundGradient
            key={index}
            className="rounded-[22px] max-w-xs p-4 md:p-2 bg-white dark:bg-zinc-900 h-80 md:h-96"
          >
            <p className="text-base sm:text-xl text-black mt-1 p-2 text-center mb-2 dark:text-neutral-200">
              {service.title}
            </p>
            <div className="mb-4 ">
              <Image
                src={service.image}
                alt={service.title}
                width={200}
                height={200}
                className="relative rounded-xl w-auto mx-auto"
              />
            </div>
            <div className="">
              {" "}
              <p className="text-sm text-center text-neutral-600 dark:text-neutral-400">
                {service.description}
              </p>
            </div>
          </BackgroundGradient>
        ))}
      </div>
    </>
  );
}
