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
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const formField = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const glowEffect = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.7 }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center"
      >
        <motion.h1 
          variants={fadeInUp}
          className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent mb-6"
        >
          Contact SleepMonitor
        </motion.h1>
        <motion.p 
          variants={fadeInUp}
          className="text-lg text-gray-300 max-w-2xl mx-auto"
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
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto"
      >
        <motion.div 
          variants={glowEffect}
          whileHover="hover"
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition" />
          <motion.div 
            variants={fadeInUp}
            className="relative bg-gray-800 rounded-2xl p-10 shadow-lg border border-gray-700"
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
                  className="w-full rounded-lg border border-gray-600 bg-gray-900 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
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
                  className="w-full rounded-lg border border-gray-600 bg-gray-900 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  placeholder="Your Email"
                  required
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={formField}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full rounded-lg border border-gray-600 bg-gray-900 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  placeholder="Your message..."
                  required
                />
              </motion.div>

              {/* Button */}
              <motion.div 
                variants={formField}
                className="text-center"
              >
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-md hover:opacity-90 transition"
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