import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h5 className="text-white font-semibold mb-4">About Us</h5>
            <p className="text-gray-400">
              Welcome to our garage, where exceptional service meets automotive
              excellence. We take pride in providing top-notch services for all
              your car care needs.
            </p>
          </div>

          <div className="">
            <h5 className="text-white font-semibold mb-4">Contact Us</h5>
            <address className="text-gray-400">
              <span className="font-medium">Garage Website</span>
              <br />
              123 Main Street
              <br />
              City, State ZIP
              <br />
              Phone:{" "}
              <a
                href="tel:1234567890"
                className="hover:text-white transition duration-300"
              >
                (123) 456-7890
              </a>
              <br />
              Email:{" "}
              <a
                href="mailto:info@garage.com"
                className="hover:text-white transition duration-300"
              >
                info@garage.com
              </a>
            </address>
          </div>
        </div>
        <div className="mt-8 border-t  border-gray-700 pt-8">
          <div className="flex flex-col  md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm text-center">
              © {new Date().getFullYear()} Garage Website. All rights reserved.
            </p>
            <div className="flex mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300 mx-2"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300 mx-2"
              >
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300 mx-2"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
