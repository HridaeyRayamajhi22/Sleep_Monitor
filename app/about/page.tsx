"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

const slideIn = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-800 text-white pt-16">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center"
      >
        {/* subtle glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.15),transparent_70%)] pointer-events-none" />

        <motion.h1
          variants={fadeIn}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent mb-6 tracking-tight"
        >
          About SleepMonitor
        </motion.h1>
        <motion.p
          variants={fadeIn}
          className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Your ultimate companion for achieving better sleep, improved health,
          and enhanced productivity through intelligent sleep tracking and
          analysis.
        </motion.p>
      </motion.section>

      {/* Mission + Vision */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div variants={slideIn} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition" />
            <div className="relative bg-gray-800/90 rounded-2xl p-10 shadow-xl border border-gray-700 group-hover:border-teal-400 transition">
              <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 text-center leading-relaxed">
                To empower individuals with tools and insights that improve sleep
                hygiene, restore energy, and unlock better health and productivity.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div variants={slideInRight} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-green-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition" />
            <div className="relative bg-gray-800/90 rounded-2xl p-10 shadow-xl border border-gray-700 group-hover:border-green-400 transition">
              <h2 className="text-3xl font-bold text-teal-400 mb-6 text-center">
                Our Vision
              </h2>
              <p className="text-lg text-gray-300 text-center leading-relaxed">
                A future where everyone has the awareness and tools to optimize
                sleep, leading to healthier, happier, and more balanced lives.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        <motion.h2
          variants={fadeIn}
          className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent"
        >
          Why Choose SleepMonitor?
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {[
            {
              title: "Comprehensive Tracking",
              desc: "Monitor your sleep patterns, quality, and cycles with precision, supported by detailed analytics and visualizations.",
              color: "from-blue-500 to-blue-400",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zM9 9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0-14a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2"
                />
              ),
            },
            {
              title: "Personalized Insights",
              desc: "Get tailored recommendations and actionable advice based on your unique sleep patterns and lifestyle.",
              color: "from-teal-500 to-cyan-400",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              ),
            },
            {
              title: "Smart Reminders",
              desc: "Receive intelligent bedtime and wake-up notifications that sync with your natural cycles.",
              color: "from-green-500 to-emerald-400",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              ),
            },
            {
              title: "Community Support",
              desc: "Join a growing community, share progress, and stay motivated with others on the same journey.",
              color: "from-purple-500 to-pink-400",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857m14.288 1.857a5.002 5.002 0 00-9.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0"
                />
              ),
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              variants={scaleUp}
              whileHover={{
                y: -8,
                boxShadow: "0 0 20px rgba(45,212,191,0.4)"
              }}
              className="bg-gray-800/90 p-8 rounded-2xl border border-gray-700 hover:border-teal-400 transition group"
            >
              <div className="mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${f.color} flex items-center justify-center shadow-md`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {f.icon}
                  </svg>
                </motion.div>
              </div>
              <h3 className="text-lg font-semibold text-blue-300 mb-3">
                {f.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Story */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div variants={slideIn} className="md:w-1/2">
            <div className="bg-gradient-to-br from-blue-500 to-teal-400 p-1 rounded-2xl shadow-xl">
              <div className="bg-gray-800 rounded-2xl p-10 h-full">
                <h2 className="text-3xl font-bold text-blue-400 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  SleepMonitor started with a simple idea: everyone deserves
                  better rest. Many people struggle to understand their sleep
                  habits, so we built an intelligent, accessible tool to make
                  sleep data meaningful.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  With a blend of science, technology, and community, we&apos;sre
                  helping people transform their nights into stronger, brighter
                  days.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={slideInRight}
            className="bg-gray-800 rounded-2xl p-10 shadow-xl border border-gray-700 h-full flex items-center justify-center"
          >
            <blockquote className="text-xl text-gray-300 italic leading-relaxed text-center">
              "Good sleep is the foundation of good health. We built
              SleepMonitor to help you achieve it." <br /> ~ Hridaey Raya
            </blockquote>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={scaleUp}
        className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        <div className="bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 animate-gradient rounded-2xl p-14 text-center shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">
            Ready to Sleep Smart?
          </h2>
          <p className="text-lg text-blue-50 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join SleepMonitor today and take the first step towards improving
            your mental and physical health through better sleep.
          </p>
          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/sign-up"
              className="inline-block bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-gray-800 transition shadow-lg"
            >
              Get Started Now
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
