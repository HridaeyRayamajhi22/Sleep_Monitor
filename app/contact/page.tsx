"use client";

import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement)?.value;
    const email = (document.getElementById("email") as HTMLInputElement)?.value;
    const message = (document.getElementById("message") as HTMLTextAreaElement)
      ?.value;

    const mailtoLink = `mailto:support@sleepmonitor.com?subject=Message from ${name}&body=Email: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = mailtoLink;
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const formField = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white pt-16 overflow-hidden">
      {/* Floating gradient orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1.2 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.25, scale: 1.1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl"
      />

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center z-10"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent mb-6 drop-shadow-lg"
        >
          Contact SleepMonitor
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Have a question or need help? We'd love to hear from you.  
          Reach out and we'll get back to you as soon as possible.
        </motion.p>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto z-10"
      >
        <motion.div
          whileHover={{ y: -10, transition: { duration: 0.4 } }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl blur opacity-40 group-hover:opacity-60 transition" />
          <motion.div
            variants={fadeInUp}
            className="relative bg-gray-900/70 backdrop-blur-md rounded-2xl p-10 shadow-2xl border border-gray-700"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-center text-blue-400 mb-8"
            >
              Get in Touch
            </motion.h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <motion.div variants={formField}>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-lg border border-gray-600 bg-gray-900 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-inner"
                  placeholder="Your Name"
                  required
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={formField}>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-lg border border-gray-600 bg-gray-900 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-inner"
                  placeholder="Your Email"
                  required
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={formField}>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full rounded-lg border border-gray-600 bg-gray-900 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-inner"
                  placeholder="Your message..."
                  required
                />
              </motion.div>

              {/* Button */}
              <motion.div variants={formField} className="text-center">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="px-10 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg hover:shadow-teal-500/50 transition"
                >
                  Send Message
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default ContactPage;
