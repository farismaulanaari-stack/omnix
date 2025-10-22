"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "../../public/images/omnix-logo.svg";
import DummyDashboard from "../../public/images/dummy-dashboard.svg";
import mobile from "../../public/images/mobile.svg";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="w-full bg-white fixed top-0 left-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Image src={Logo} alt="Omnix-Logo" width={28} height={28} />
              <span className="font-semibold text-lg text-gray-800">Omnix</span>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 font-medium text-gray-700">
              <a href="#features" className="hover:text-indigo-600">
                Features
              </a>
              <a href="#industry" className="hover:text-indigo-600">
                Industry
              </a>
              <a href="#solutions" className="hover:text-indigo-600">
                Solutions
              </a>
              <a href="#pricing" className="hover:text-indigo-600">
                Pricing
              </a>
              <a
                href="#contact"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Mobile Dropdown */}
          {isOpen && (
            <div className="md:hidden flex flex-col space-y-4 py-4 border-t border-gray-200 font-medium text-gray-700">
              <a href="#features" onClick={() => setIsOpen(false)}>
                Features
              </a>
              <a href="#industry" onClick={() => setIsOpen(false)}>
                Industry
              </a>
              <a href="#solutions" onClick={() => setIsOpen(false)}>
                Solutions
              </a>
              <a href="#pricing" onClick={() => setIsOpen(false)}>
                Pricing
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-indigo-600 font-semibold"
              >
                Contact Us
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="w-full bg-white pt-24 sm:pt-32" id="home-section">
        <div className="container w-full flex flex-col mx-auto px-4 sm:px-6 lg:px-8">
          {/* Text Section */}
          <div className="flex flex-col items-center justify-center text-center py-10 sm:py-16 md:py-24">
            <div className="px-4 py-1.5 ring-2 ring-indigo-600 bg-indigo-50 rounded-full">
              <p className="font-semibold text-xs sm:text-sm md:text-base text-indigo-700">
                #1 omnichannel tools for business
              </p>
            </div>

            <div className="w-full max-w-2xl mt-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug md:leading-normal text-gray-900">
                mulai terhubung dengan pelanggan anda dalam{" "}
                <mark
                  className="
                    bg-transparent text-indigo-700 relative 
                    after:absolute after:left-0 after:bottom-1 
                    after:w-full after:h-2 after:bg-indigo-300 after:-z-10
                  "
                >
                  satu platform
                </mark>
              </h2>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full flex justify-center mt-4 sm:mt-10">
            {/* Mobile Image */}
            <div className="block md:hidden w-[90%] sm:w-[400px] bg-white rounded-2xl p-3 sm:p-4 shadow-lg">
              <div className="bg-black rounded-2xl overflow-hidden border border-gray-200">
                <Image
                  src={mobile}
                  alt="mobile"
                  width={500}
                  height={800}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* Desktop Image */}
            <div className="hidden md:block w-full bg-gray-100 rounded-2xl p-5 pb-0 max-h-[800px] overflow-hidden">
              <div className="w-full bg-white rounded-md overflow-hidden">
                <Image
                  src={DummyDashboard}
                  alt="dummy-dashboard"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}