import React from "react";

export default function ContactUs()
{
  return (
    <section className="bg-linear-to-r from-[#2a0405] to-[#8a1c1f] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300 text-sm mt-16">
          <div>
            <p className="font-semibold text-white">Phone</p>
            <p>+91 98861 11656</p>
          </div>
          <div>
            <p className="font-semibold text-white">Email</p>
            <p>avinyatechnows@gmail.com</p>
          </div>
          <div>
            <p className="font-semibold text-white">Address</p>
            <p>Sumukha, 6th Main, Chandra Layout, Bangalore 560040</p>
          </div>
        </div>

        <p className="text-center text-gray-400 text-xs mt-12">
          © 2025 · All Rights Reserved By Avinya Technows
        </p>
      </div>
    </section>
)
    }
  );
};

export default ContactUs;
