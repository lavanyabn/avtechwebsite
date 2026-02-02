"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuMenu, LuX } from "react-icons/lu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const textColor = scrolled ? "text-black" : "text-white";
  const navBg = scrolled
    ? "bg-white border-b border-neutral-200"
    : "bg-black/20 backdrop-blur-md";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBg}`}>
      <div className="flex justify-between items-center px-6 py-3">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image loading="lazy"  src="/Logo.png" alt="Logo" width={48} height={48} />
          <div className="flex flex-col leading-tight">
            <span className={`md:text-lg text-base font-semibold ${textColor}`}>
              Avinya
            </span>
            <span className="md:text-lg text-base font-semibold text-[#cfb070]">
              Techknows
            </span> 
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="md:flex hidden gap-6 font-medium">
          <li>
            <a href="#home" className={`${textColor} hover:text-[#cfb070]`}>
              Home
            </a>
          </li>
          {/* <li>
            <Link href="/internship" className={`${textColor} hover:text-[#cfb070]`}>
              Internship
            </Link>
          </li> */}
          <li>
            <Link href="#services" className={`${textColor} hover:text-[#cfb070]`}>
              Services
            </Link>
          </li>
          <li>
            <a href="#training" className={`${textColor} hover:text-[#cfb070]`}>
              Training
            </a>
          </li>
          <li>
            <a href="#members" className={`${textColor} hover:text-[#cfb070]`}>
              Members
            </a>
          </li>
          <li>
            <a href="#contact" className={`${textColor} hover:text-[#cfb070]`}>
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <LuX className={`w-8 h-8 ${textColor}`} />
          ) : (
            <LuMenu className={`w-8 h-8 ${textColor}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-neutral-200 px-6 py-6">
          <ul className="flex flex-col gap-6 text-lg font-medium">
            <li>
              <a href="#home" onClick={() => setOpen(false)} className="text-black hover:text-[#cfb070]">
                Home
              </a>
            </li>
            <li>
              <Link href="/internship" onClick={() => setOpen(false)} className="text-black hover:text-[#cfb070]">
                Internship
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={() => setOpen(false)} className="text-black hover:text-[#cfb070]">
                Services
              </Link>
            </li>
            <li>
              <a href="#training" onClick={() => setOpen(false)} className="text-black hover:text-[#cfb070]">
                Training
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setOpen(false)} className="text-black hover:text-[#cfb070]">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
