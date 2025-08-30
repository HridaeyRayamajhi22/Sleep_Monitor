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
      <section className="pt-20 pb-24 px-6 sm:px-10 lg:px-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={slideIn}
          className="flex-1 text-center md:text-left"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent"
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SignInButton>
              <button className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-md hover:opacity-90 transition">
                Get Started
              </button>
            </SignInButton>
          </motion.div>
        </motion.div>

        {/* Slideshow */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={slideInRight}
          className="flex-1 w-full flex justify-center"
        >
          <div className="relative w-full max-w-3xl aspect-[16/9] rounded-2xl shadow-lg border border-gray-700 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <Image
                  src={images[current]}
                  alt={`Sleep Monitor slide ${current + 1}`}
                  fill
                  className="object-cover"
                  priority={current === 0}
                />
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2"
            >
              {images.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setIsTransitioning(true);
                    if (timeoutRef.current) clearTimeout(timeoutRef.current);
                    timeoutRef.current = setTimeout(() => {
                      setCurrent(index);
                      setIsTransitioning(false);
                    }, 150);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === current
                      ? "bg-teal-400"
                      : "bg-gray-500 hover:bg-gray-400"
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </motion.div>
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
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-20 px-6 sm:px-10 lg:px-20 max-w-5xl mx-auto"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div 
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {[
            {
              question: "What is SleepMonitor?",
              answer: "SleepMonitor is an intelligent platform that tracks your sleep and provides data-driven insights for better rest."
            },
            {
              question: "How does it work?",
              answer: "By analyzing your sleep data, SleepMonitor offers personalized recommendations and reminders to improve your routine."
            },
            {
              question: "Is SleepMonitor free?",
              answer: "Yes! We offer a free plan with core features, and premium plans for advanced insights and detailed analytics."
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              variants={scaleUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-teal-400 transition"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-300">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </motion.div>
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