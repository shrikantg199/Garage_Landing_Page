"use client";
import { FC } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import About from "./About";
import { Services } from "./Services";
import { Contact } from "./Contact";
import Footer from "./Footer";

import { motion, useScroll } from "framer-motion";
interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="w-screen">
      <motion.div
        className="progress-bar z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="">
        {" "}
        <Navbar />
      </div>

      <section id="home" className="h-auto bg-[#0f172a] ">
        {" "}
        <HeroSection />
      </section>

      <section
        id="about"
        className="bg-[#0f172a] h-auto shadow shadow-gray-600 hover:scale-100 "
      >
        {" "}
        <About />
      </section>
      <section
        id="services"
        className="bg-[#0f172a] py-20 h-auto my-auto  hover:scale-100 mt-0 shadow shadow-gray-600 "
      >
        {" "}
        <Services />
      </section>
      <section
        id="contact"
        className="bg-[#0f172a] h-auto hover:scale-100 mt-0 shadow shadow-gray-600 "
      >
        {" "}
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
