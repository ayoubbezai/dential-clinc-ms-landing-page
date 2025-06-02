"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import logo from "../assets/logo_1-removebg-preview.png";
import { useState, useEffect } from "react";

const navItems = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Our Dentists", href: "#dentists" },
  { name: "Why Choose Us", href: "#why-us" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white backdrop-blur-md shadow-sm py-2"
            : "bg-white backdrop-blur-sm py-3"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold flex items-center text-[#022057]"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mr-2"
            >
              <Image
                src={logo}
                alt="Chebaani Dental Logo"
                width={30}
                height={30}
              />
            </motion.div>
            Chebaani Clinic
          </Link>

          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-600 hover:text-[#00ABC6] transition-colors font-medium group"
              >
                {item.name}
                <motion.span
                  className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#00ABC6] group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </Link>
            ))}
            <Link
              href="https://ayoubbezai.site/login"
              className="relative overflow-hidden bg-gradient-to-r from-[#022057] to-[#00ABC6] hover:from-[#011842] hover:to-[#0294b0] text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <motion.span
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
              >
                Admin Panel
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </Link>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-gray-600 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          y: mobileMenuOpen ? 0 : -20,
          display: mobileMenuOpen ? "block" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-20 left-0 right-0 bg-white shadow-lg z-40 md:hidden"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-[#00ABC6] transition-colors font-medium py-2 border-b border-gray-100"
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://ayoubbezai.site/login"
              className="bg-gradient-to-r from-[#022057] to-[#00ABC6] text-white font-medium py-3 px-6 rounded-lg text-center mt-2"
              onClick={handleLinkClick}
            >
              Admin Panel
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}

