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

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-gray-700 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="sr-only">Sleep Monitor</span>
              <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
                Sleep Monitor
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {["Home", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-gray-300 hover:text-blue-400 transition text-base font-medium"
              >
                {item}
              </Link>
            ))}

            <SignedOut>
              <SignInButton>
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 text-white font-medium shadow-md hover:opacity-90 transition">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-8 h-8",
                  },
                }}
              />
            </SignedIn>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-gray-300 hover:bg-gray-800 focus:outline-none"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700 animate-slideDown">
          <div className="px-4 py-4 space-y-4">
            {["Home", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="block text-gray-300 hover:text-blue-400 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </Link>
            ))}

            <SignedOut>
              <SignInButton>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 text-white font-medium shadow-md hover:opacity-90 transition"
                >
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <div className="pt-2">
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "w-8 h-8",
                    },
                  }}
                />
              </div>
            </SignedIn>
          </div>
        </div>
      )}

      {/* Clerk dark mode overrides */}
      <style jsx global>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-5%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.25s ease-out;
        }

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
