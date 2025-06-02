"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo_1-removebg-preview.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Clinic Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                <Image src={logo} alt="Clinic Logo" width={30} height={30} />
              </div>
              <span className="text-xl font-semibold text-white">
                Chebaani Clinic
              </span>
            </div>
            <p className="text-sm mb-4">
              Quality dental care with compassion since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Services", "Why Choose Us"].map((link, index) => (
                <li key={index}>
                  <Link
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-sm hover:text-teal-400 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-medium mb-4">Our Services</h4>
            <ul className="space-y-2">
              {[
                "Preventive Care",
                "Cosmetic Dentistry",
                "Restorative Care",
                "Orthodontics",
                "Pediatric Care",
                "Emergency Services",
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href="#services"
                    className="text-sm hover:text-teal-400 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-4">Contact Us</h4>
            <div className="mb-4 flex items-start">
              <svg
                className="w-5 h-5 text-teal-400 mt-0.5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <Link
                href="tel:+1234567890"
                className="text-sm hover:text-teal-400"
              >
                (213) 07-48-11-06-47
              </Link>
            </div>

            <div className="mb-4 flex items-start">
              <svg
                className="w-5 h-5 text-teal-400 mt-0.5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <Link
                href="mailto:info@chebaaniclinic.com"
                className="text-sm hover:text-teal-400"
              >
                info@chebaaniclinic.com
              </Link>
            </div>

            <div className="flex items-start">
              <svg
                className="w-5 h-5 text-teal-400 mt-0.5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-sm">hamla 3 , Batna City</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 mb-3 md:mb-0">
            © {new Date().getFullYear()} Chebaani Clinic. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-xs text-gray-500 hover:text-teal-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-500 hover:text-teal-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
