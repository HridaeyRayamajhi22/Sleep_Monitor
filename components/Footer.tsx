"use client";

import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const socialIcon = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    hover: { scale: 1.2, transition: { duration: 0.2 } },
    tap: { scale: 0.9 }
  };

  const linkItem = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    hover: { x: 5, transition: { duration: 0.2 } }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-700 text-gray-300">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10"
      >
        {/* Brand */}
        <motion.div variants={fadeInUp}>
          <motion.h2 
            whileHover={{ scale: 1.02 }}
            className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent"
          >
            SleepMonitor
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="mt-4 text-gray-400 text-sm leading-relaxed"
          >
            Helping you unlock better sleep through smart tracking, personalized
            insights, and healthy routines.
          </motion.p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeInUp}>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About", "Contact", "Get Started"].map((item, index) => (
              <motion.li
                key={item}
                variants={linkItem}
                whileHover="hover"
              >
                <Link 
                  href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-teal-400 transition block"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div variants={fadeInUp}>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            {["Blog", "FAQs", "Privacy Policy", "Terms of Service"].map((item, index) => (
              <motion.li
                key={item}
                variants={linkItem}
                whileHover="hover"
              >
                <a href="#" className="hover:text-teal-400 transition block">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact & Social */}
        <motion.div variants={fadeInUp}>
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <motion.p 
            variants={fadeInUp}
            className="text-sm text-gray-400 mb-4"
          >
            hridaeyrayamajhi@gmail.com
          </motion.p>
          <motion.div 
            variants={staggerContainer}
            className="flex space-x-4"
          >
            <motion.a
              variants={socialIcon}
              whileHover="hover"
              whileTap="tap"
              href="#"
              className="text-gray-400 hover:text-blue-400 transition text-xl"
              aria-label="Twitter"
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              variants={socialIcon}
              whileHover="hover"
              whileTap="tap"
              href="#"
              className="text-gray-400 hover:text-teal-400 transition text-xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              variants={socialIcon}
              whileHover="hover"
              whileTap="tap"
              href="#"
              className="text-gray-400 hover:text-green-400 transition text-xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom strip */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="border-t border-gray-700 py-6 text-center text-gray-500 text-sm"
      >
        © {new Date().getFullYear()} SleepMonitor. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;