"use client";

import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
            SleepMonitor
          </h2>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Helping you unlock better sleep through smart tracking, personalized
            insights, and healthy routines.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-teal-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-teal-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-teal-400 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/sign-up" className="hover:text-teal-400 transition">
                Get Started
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-teal-400 transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400 transition">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400 transition">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <p className="text-sm text-gray-400 mb-4">
            hridaeyrayamajhi@gmail.com
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-teal-400 transition text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 transition text-xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-gray-700 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} SleepMonitor. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
