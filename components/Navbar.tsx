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
              <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
                Sleep Monitor
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-300 hover:text-blue-400 transition text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-blue-400 transition text-base font-medium"
            >
              About
            </Link>

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
        <div className="md:hidden bg-gray-900 border-t border-gray-700">
          <div className="px-4 py-3 space-y-3">
            <Link
              href="/"
              className="block text-gray-300 hover:text-blue-400 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-300 hover:text-blue-400 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>

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
      
      <style jsx global>{`
        /* Customize Clerk UserButton to match dark theme */
        .cl-userButtonBox {
          display: flex;
          align-items: center;
        }
        
        .cl-userButtonTrigger {
          background-color: transparent;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .cl-userButtonPopoverCard {
          background-color: #1f2937;
          border: 1px solid #374151;
        }
        
        .cl-userButtonPopoverActionButton {
          color: #f3f4f6;
        }
        
        .cl-userButtonPopoverActionButton:hover {
          background-color: #374151;
        }
        
        .cl-userButtonPopoverFooter {
          display: none;
        }
      `}</style>
    </nav>
  );
}