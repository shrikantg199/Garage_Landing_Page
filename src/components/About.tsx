import Image from "next/image";
import { FC } from "react";
import logo from "../../public/image1.jpg";
interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  return (
    <div className="md:pt-24 pt-4 md:pb-28 h-auto ">
      <h2 className="text-center hidden md:block   items-center  p-4 text-3xl text-white">
        About
      </h2>
      <div className="md:flex md:flex-row w-full p-5 flex  flex-col items-center justify-start gap-32  rounded-xl h-auto">
        <h2 className="text-center md:hidden block  items-center  p-4 text-3xl text-white">
          About
        </h2>
        <div className="w-full p-14 flex items-center  justify-center">
          <Image
            src={logo}
            width={500}
            height={400}
            alt="Woman standing in front of a graffiti wall"
            className="max-w-full md:h-[40vh] md:w-[70vh] h-64 w-80 rounded-xl"
          />
        </div>
        <div className="w-full  ">
          <h2 className="text-3xl font-bold mb-4 text-white">
            What brings us together
          </h2>
          <h2 className="mb-8 md:text-xl md:w-96 text-white">
            Welcome to [Your Garage Name], where automotive expertise meets
            customer satisfaction. With over [number of years] years of
            experience, we specialize in providing top-quality maintenance,
            repairs, and customization services for all vehicle makes and
            models.{" "}
          </h2>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            Discover more
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
