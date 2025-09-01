"use client";

import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/sleep.png", "/sleep-tracker.png", "/sleep1.png"];

const Guest = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 300);
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-600/30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-teal-600/25 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 px-6 sm:px-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideIn}
          className="flex-1 text-center md:text-left relative z-10 max-w-lg"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg"
          >
            Welcome to SleepMonitor
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-300 mb-8"
          >
            Track your sleep, improve your health, and unlock a better
            lifestyle with smart insights tailored just for you.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex justify-center md:justify-start"
          >
            <SignInButton>
              <motion.button
                whileHover={{
                  scale: 1.07,
                  boxShadow: "0px 0px 25px rgba(56, 189, 248, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg hover:opacity-90 transition-all inline-flex cursor-pointer"
              >
                Get Started
              </motion.button>
            </SignInButton>
          </motion.div>

        </motion.div>

        {/* Slideshow */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInRight}
          whileHover={{ scale: 1.02 }}
          className="flex-1 w-full flex justify-center relative z-10"
        >
          <div className="relative w-full max-w-3xl aspect-[16/9] rounded-3xl shadow-xl border border-gray-700 overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <Image
                  src={images[current]}
                  alt={`Sleep Monitor slide ${current + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority={current === 0}
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-1 bg-gradient-to-r from-blue-500 to-teal-500 opacity-40 w-3/4 mx-auto rounded-full transform origin-center"
      ></motion.div>

      {/* FAQ Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="py-24 text-center px-6 sm:px-10 max-w-5xl mx-auto relative"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="grid gap-8">
          {[
            {
              q: "How does SleepMonitor track my sleep?",
              a: "SleepMonitor uses advanced algorithms to analyze your sleep patterns through wearable devices and mobile sensors.",
            },
            {
              q: "Is my data secure?",
              a: "Yes, your data is encrypted and only accessible to you. We prioritize your privacy and security.",
            },
            {
              q: "Can I use SleepMonitor without a wearable?",
              a: "Yes, you can use the app with just your phone, but accuracy improves with a wearable device.",
            },
          ].map((faq, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
              }}
              className="bg-gray-800/70 border border-gray-700 p-8 rounded-2xl shadow-lg text-left transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-green-400">
                {faq.q}
              </h3>
              <p className="text-gray-300">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-20 px-6 sm:px-10 max-w-6xl mx-auto"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-bold text-center mb-12 text-teal-400"
        >
          What Our Users Say
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              text: `"SleepMonitor has completely transformed my nights. I wake up refreshed and full of energy."`,
              author: "— Nisha Singh Thakuri",
            },
            {
              text: `"Finally I understand my sleep patterns! The insights are spot on and super easy to follow."`,
              author: "— Pranaya Pradhan",
            },
            {
              text: `"It's like having a personal sleep coach. Highly recommend to anyone struggling with sleep."`,
              author: "— Raman Bohora",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-700 hover:border-blue-400 transition"
            >
              <p className="text-gray-300 italic mb-4">{testimonial.text}</p>
              <p className="font-semibold text-blue-400">
                {testimonial.author}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Guest;
