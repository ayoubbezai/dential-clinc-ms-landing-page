"use client";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import heroImage from "../assets/professional-dentist-tools-dental-office.jpg";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#022057] via-[#006D90] to-[#00ABC6] text-white pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden">
      {/* Animated background pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] bg-repeat opacity-20"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Exceptional Dental Care{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FB] to-[#00ABC6]"
              >
                For Your Family
              </motion.span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0 opacity-90"
            >
              Combining cutting-edge technology with compassionate care to
              create healthy, beautiful smiles that last a lifetime.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#contact"
                className="relative bg-white hover:bg-gray-50 text-[#022057] font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl overflow-hidden group"
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ scale: 1.05 }}
                >
                  Contact Us
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#00C6FB] to-[#00ABC6] opacity-0 group-hover:opacity-10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </Link>

              <Link
                href="tel:+15551234567"
                className="relative flex items-center justify-center gap-2 border-2 border-white hover:border-transparent hover:bg-white hover:text-[#022057] font-semibold py-3 px-6 rounded-lg overflow-hidden group"
              >
                <motion.span
                  className="relative z-10 flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  (+213) 07-48-11-06-47
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </Link>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="lg:w-1/2 relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={heroImage}
                alt="Professional dental care"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg object-cover"
                priority
              />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#00ABC6] p-2 rounded-lg"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </motion.div>
                  <div>
                    <p className="font-bold text-[#022057] text-sm">
                      Open Today
                    </p>
                    <p className="text-gray-600 text-xs">8:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated decorative bottom edge */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "4rem" }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-0 left-0 right-0 bg-white transform skew-y-2 -mb-8 z-0"
      />
    </section>
  );
}
