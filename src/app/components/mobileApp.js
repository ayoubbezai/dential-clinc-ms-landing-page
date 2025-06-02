"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import mobileAppImage from "../assets/photo_2025-06-02_18-22-30.jpg";

export default function MobileApp() {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Easy Booking",
      description: "Schedule appointments in seconds",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Appointment Reminders",
      description: "Never miss your dental visits",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M4.913 2.658c-.673.18-1.15.725-1.15 1.41v17.284c0 .687.477 1.232 1.15 1.41l13.174 3.528c.673.18 1.423-.152 1.675-.84L20.05 4.65c.253-.688-.002-1.47-.675-1.65L4.913 2.658z" />
        </svg>
      ),
      title: "Secure Messaging",
      description: "Chat directly with your dentist",
    },
  ];

  return (
    <section id="app" className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-teal-300 font-medium text-sm uppercase tracking-wider">
                Our Mobile App
              </span>
              <h2 className="text-3xl font-bold mt-3 mb-6">
                Your Dental Health Companion
              </h2>
              <p className="text-blue-100 mb-8">
                Manage appointments, get reminders, and connect with your
                dentist - all from your phone.
              </p>

              <div className="space-y-5 mb-10">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="bg-blue-800 p-2 rounded-lg mr-4 text-teal-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-blue-100 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#"
                  className="bg-white hover:bg-gray-50 text-blue-900 font-medium py-3 px-6 rounded-lg transition-all flex items-center gap-2"
                >
                  <Image
                    src="/app-store.svg"
                    alt="App Store"
                    width={100}
                    height={30}
                  />
                </Link>
                <Link
                  href="#"
                  className="bg-white hover:bg-gray-50 text-blue-900 font-medium py-3 px-6 rounded-lg transition-all flex items-center gap-2"
                >
                  <Image
                    src="/play-store.svg"
                    alt="Play Store"
                    width={100}
                    height={30}
                  />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Phone Image */}
          <div className="lg:w-1/2 relative mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative mx-auto max-w-xs"
            >
              <div className="absolute -inset-4 bg-blue-800 rounded-3xl opacity-20 blur-lg"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
                <Image
                  src={mobileAppImage}
                  alt="Dental App Screenshot"
                  width={280}
                  height={560}
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
