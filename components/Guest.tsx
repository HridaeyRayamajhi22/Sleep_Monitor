"use client";

import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/sleep.png", "/sleep-tracker.png", "/sleep1.png"];

const Guest = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      {/* Hero Section */}
<section className="relative pt-20 pb-24 px-6 sm:px-10 lg:px-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
  {/* Animated background */}
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.2 }}
    transition={{ duration: 2 }}
    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-teal-400/20 to-green-500/20 blur-3xl animate-pulse"
  />

  {/* Text content */}
  <motion.div 
    initial="hidden"
    animate="visible"
    variants={slideIn}
    className="flex-1 text-center md:text-left relative z-10"
  >
    <motion.h1 
      variants={fadeInUp}
      className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg"
    >
      Welcome to SleepMonitor
    </motion.h1>
    <motion.p 
      variants={fadeInUp}
      className="text-lg text-gray-300 max-w-xl mx-auto md:mx-0 mb-8"
    >
      Track your sleep, improve your health, and unlock a better lifestyle
      with smart insights tailored just for you.
    </motion.p>
    <motion.div
      variants={fadeInUp}
      whileHover={{ scale: 1.07, boxShadow: "0px 0px 25px rgba(56, 189, 248, 0.6)" }}
      whileTap={{ scale: 0.95 }}
    >
      <SignInButton>
        <button className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg hover:opacity-90 transition-all">
          Get Started
        </button>
      </SignInButton>
    </motion.div>
  </motion.div>

  {/* Slideshow with hover parallax */}
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
  viewport={{ once: true, amount: 0.1 }} // trigger earlier
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 } // faster stagger
    }
  }}
  className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-center px-6 sm:px-10 lg:px-20 relative"
>
  <motion.h2 
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    }}
    className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
  >
    Frequently Asked Questions
  </motion.h2>

  <div className="max-w-4xl mx-auto grid gap-8">
    {[
      { q: "How does SleepMonitor track my sleep?", a: "SleepMonitor uses advanced algorithms to analyze your sleep patterns through wearable devices and mobile sensors." },
      { q: "Is my data secure?", a: "Yes, your data is encrypted and only accessible to you. We prioritize your privacy and security." },
      { q: "Can I use SleepMonitor without a wearable?", a: "Yes, you can use the app with just your phone, but accuracy improves with a wearable device." }
    ].map((faq, idx) => (
      <motion.div 
        key={idx}
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } }
        }}
        whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}
        className="bg-gray-800/70 border border-gray-700 p-8 rounded-2xl shadow-lg text-left transition-all duration-300"
      >
        <h3 className="text-xl font-semibold mb-4 text-green-400">{faq.q}</h3>
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
        className="py-20 px-6 sm:px-10 lg:px-20 bg-gray-800 border-t border-gray-700"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-3xl font-bold text-center mb-12 text-teal-400"
        >
          What Our Users Say
        </motion.h2>
        <motion.div 
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {[
            {
              text: "\"SleepMonitor has completely transformed my nights. I wake up refreshed and full of energy.\"",
              author: "— Nisha Singh Thakuri"
            },
            {
              text: "\"Finally I understand my sleep patterns! The insights are spot on and super easy to follow.\"",
              author: "— Pranaya Pradhan"
            },
            {
              text: "\"It's like having a personal sleep coach. Highly recommend to anyone struggling with sleep.\"",
              author: "— Raman Bohora"
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-700 hover:border-blue-400 transition"
            >
              <p className="text-gray-300 italic mb-4">
                {testimonial.text}
              </p>
              <p className="font-semibold text-blue-400">{testimonial.author}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Guest;