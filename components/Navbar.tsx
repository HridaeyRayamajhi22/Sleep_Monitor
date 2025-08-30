"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Animation variants
  const menuItem = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  const mobileMenu = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const logoAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const buttonAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
    },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-700 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={logoAnimation}
            className="flex items-center"
          >
            <Link href="/" className="flex-shrink-0">
              <span className="sr-only">Sleep Monitor</span>
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent"
              >
                Sleep Monitor
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <motion.div 
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
            className="hidden md:flex items-center space-x-6"
          >
            {["Home", "About", "Contact"].map((item) => (
              <motion.div
                key={item}
                variants={menuItem}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-blue-400 transition text-base font-medium"
                >
                  {item}
                </Link>
              </motion.div>
            ))}

            <SignedOut>
              <motion.div
                variants={buttonAnimation}
                whileHover="hover"
                whileTap="tap"
              >
                <SignInButton>
                  <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 text-white font-medium shadow-md hover:opacity-90 transition">
                    Sign In
                  </button>
                </SignInButton>
              </motion.div>
            </SignedOut>

            <SignedIn>
              <motion.div
                variants={menuItem}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "w-8 h-8",
                    },
                  }}
                />
              </motion.div>
            </SignedIn>
          </motion.div>

          {/* Mobile Hamburger */}
          <motion.div 
            className="md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-gray-300 hover:bg-gray-800 focus:outline-none"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            variants={mobileMenu}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-gray-900 border-t border-gray-700 overflow-hidden"
          >
            <motion.div className="px-4 py-4 space-y-4">
              {["Home", "About", "Contact"].map((item) => (
                <motion.div
                  key={item}
                  variants={menuItem}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="block text-gray-300 hover:text-blue-400 font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}

              <SignedOut>
                <motion.div
                  variants={menuItem}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <SignInButton >
                    <button
                      onClick={() => setMobileOpen(false)}
                      className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 text-white font-medium shadow-md hover:opacity-90 transition hover:cursor-pointer"
                    >
                      Sign In
                    </button>
                  </SignInButton>
                </motion.div>
              </SignedOut>

              <SignedIn>
                <motion.div 
                  variants={menuItem}
                  className="pt-2"
                >
                  <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        userButtonAvatarBox: "w-8 h-8",
                      },
                    }}
                  />
                </motion.div>
              </SignedIn>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Clerk dark mode overrides */}
      <style jsx global>{`
        .cl-userButtonTrigger {
          background-color: transparent !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
        }
        .cl-userButtonPopoverCard {
          background-color: #1f2937 !important;
          border: 1px solid #374151 !important;
        }
        .cl-userButtonPopoverActionButton {
          color: #f3f4f6 !important;
        }
        .cl-userButtonPopoverActionButton:hover {
          background-color: #374151 !important;
        }
        .cl-userButtonPopoverFooter {
          display: none !important;
        }
      `}</style>
    </nav>
  );
}