"use client";

import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/sleep.png", // replace with your real images
  "/sleep-tracker.png",
  "/sleep1.png",
];

const Guest = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 500); // Match the transition duration
    }, 5000); // 5 sec rotation
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="pt-20 pb-24 px-6 sm:px-10 lg:px-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
            Welcome to SleepMonitor
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto md:mx-0 mb-8">
            Track your sleep, improve your health, and unlock a better lifestyle
            with smart insights tailored just for you.
          </p>
          <SignInButton>
            <button className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-md hover:opacity-90 transition">
              Get Started
            </button>
          </SignInButton>
        </div>

        {/* Slideshow */}
        <div className="flex-1 flex justify-center relative">
          <div className="w-full max-w-3xl h-[400px] relative overflow-hidden rounded-2xl shadow-lg border border-gray-700">
            {images.map((src, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={src}
                  alt="Sleep Tracker"
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="absolute bottom-4 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrent(index);
                    setIsTransitioning(false);
                  }, 100);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? "bg-teal-400" : "bg-gray-500 hover:bg-gray-400"
                }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-blue-500 to-teal-500 opacity-40 w-3/4 mx-auto rounded-full"></div>

      {/* FAQ Section */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-teal-400 transition">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              What is SleepMonitor?
            </h3>
            <p className="text-gray-300">
              SleepMonitor is an intelligent platform that tracks your sleep and
              provides data-driven insights for better rest.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-teal-400 transition">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              How does it work?
            </h3>
            <p className="text-gray-300">
              By analyzing your sleep data, SleepMonitor offers personalized
              recommendations and reminders to improve your routine.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-teal-400 transition">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              Is SleepMonitor free?
            </h3>
            <p className="text-gray-300">
              Yes! We offer a free plan with core features, and premium plans
              for advanced insights and detailed analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-gray-800 border-t border-gray-700">
        <h2 className="text-3xl font-bold text-center mb-12 text-teal-400">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-700 hover:border-blue-400 transition">
            <p className="text-gray-300 italic mb-4">
              "SleepMonitor has completely transformed my nights. I wake up
              refreshed and full of energy."
            </p>
            <p className="font-semibold text-blue-400">— Nisha Singh Thakuri</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-700 hover:border-blue-400 transition">
            <p className="text-gray-300 italic mb-4">
              "Finally I understand my sleep patterns! The insights are spot on
              and super easy to follow."
            </p>
            <p className="font-semibold text-blue-400">— Pranaya Pradhan</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-700 hover:border-blue-400 transition">
            <p className="text-gray-300 italic mb-4">
              "It's like having a personal sleep coach. Highly recommend to
              anyone struggling with sleep."
            </p>
            <p className="font-semibold text-blue-400">— Raman Bohora</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guest;