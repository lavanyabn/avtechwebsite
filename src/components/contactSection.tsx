import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export default function ContactUs() {
  return (
    <section className="bg-linear-to-r from-[#2a0405] to-[#8a1c1f] py-16 px-6">
      <div className="max-w-8xl mx-auto">
        <div className="flex w-full justify-evenly items-center  text-gray-300 text-sm mt-16">
          <div className="flex gap-3 justify-center items-start">
            <FaPhoneAlt className="text-xl text-white" />
            <div>
              <p className="font-semibold text-white">Phone</p>
              <p>+91 98861 11656</p>
            </div>
          </div>
          <div className="flex gap-3 justify-center items-start">
            <MdEmail className="text-xl text-white" />
            <div>
              <p className="font-semibold text-white">Email</p>
              <p>avinyatechknows@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-3 justify-center items-start">
            <IoLocationSharp className="text-2xl text-white" />
            <div>
              <p className="font-semibold text-white">Address</p>
              <p>Sumukha, 6th Main, Chandra Layout, Bangalore 560040</p>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-400 text-xs mt-12">
          © 2024 · All Rights Reserved By Avinya TechKnows
        </p>
      </div>
    </section>
  );
}
