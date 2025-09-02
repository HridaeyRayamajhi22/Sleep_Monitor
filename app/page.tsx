import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import Guest from "@/components/Guest";
import AddNewRecord from "@/components/AddNewRecord";
import RecordChart from "@/components/RecordChart";
import SleepAnimation from "@/components/SleepAnimation";
import getBestWorstSleep from "@/app/actions/getBestWorstSleep";
import RecordHistory from "@/components/RecordHistory";
import getStats from "@/app/actions/getStats";
import SlothWrapper from "@/components/SlothWrapper";
import Image from "next/image";

export default async function Home() {
  const user = await currentUser();
  const bestWorstSleep = await getBestWorstSleep();
  const statsData = await getStats();

  if (!user) return <Guest />;

  // Enhanced Tailwind-safe colors with better contrast
  const statColors = {
    cyan: {
      border: "border-cyan-500",
      bg: "bg-gradient-to-br from-cyan-900/40 to-cyan-800/30",
      text: "text-cyan-300",
      hover: "hover:shadow-cyan-500/30",
    },
    purple: {
      border: "border-purple-500",
      bg: "bg-gradient-to-br from-purple-900/40 to-purple-800/30",
      text: "text-purple-300",
      hover: "hover:shadow-purple-500/30",
    },
    teal: {
      border: "border-teal-500",
      bg: "bg-gradient-to-br from-teal-900/40 to-teal-800/30",
      text: "text-teal-300",
      hover: "hover:shadow-teal-500/30",
    },
    blue: {
      border: "border-blue-500",
      bg: "bg-gradient-to-br from-blue-900/40 to-blue-800/30",
      text: "text-blue-300",
      hover: "hover:shadow-blue-500/30",
    },
  } as const;

  //  Corrected Stat type
  type Stat = {
    label: string;
    value: string | number;
    icon: string;
    color: keyof typeof statColors;
  };

  // Stats array
  const stats: Stat[] = [
    { label: "Avg. Sleep", value: `${statsData?.avgSleep ?? 0}h`, icon: "🛌", color: "cyan" },
    { label: "Records", value: statsData?.totalRecords ?? 0, icon: "📊", color: "purple" },
    { label: "Consistency", value: `${statsData?.consistency ?? 0}%`, icon: "⭐", color: "teal" },
  ];


  // Sleep quality indicators with better contrast
  const getSleepQuality = (hours: number) => {
    if (hours >= 8)
      return {
        label: "Excellent",
        color: "text-green-300",
        bg: "bg-green-900/40",
        border: "border-green-600/50",
      };
    if (hours >= 7)
      return {
        label: "Good",
        color: "text-teal-300",
        bg: "bg-teal-900/40",
        border: "border-teal-600/50",
      };
    if (hours >= 6)
      return {
        label: "Fair",
        color: "text-yellow-300",
        bg: "bg-yellow-900/40",
        border: "border-yellow-600/50",
      };
    return {
      label: "Poor",
      color: "text-red-300",
      bg: "bg-red-900/40",
      border: "border-red-600/50",
    };
  };

  const bestQuality = getSleepQuality(bestWorstSleep.bestSleep || 0);
  const worstQuality = getSleepQuality(bestWorstSleep.worstSleep || 0);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 text-white pt-20 px-4 sm:px-6 lg:px-8">
      {/* Enhanced Glowing Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-600/30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-teal-600/25 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Enhanced Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-teal-400 mb-2">
            Sleep Monitor&apos;s Dashboard
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Monitor your sleep patterns, track your progress, and improve your sleep quality
          </p>
        </div>

        {/* Profile + Add Record - Enhanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Enhanced User Profile */}
          <div className="bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 flex flex-col items-center text-center border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-cyan-500/20">
            <div className="relative mb-4">
              <Image
                src={user.imageUrl}
                alt={`${user.firstName}'s profile`}
                className="w-28 h-28 rounded-full object-cover border-4 border-teal-400 shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 hover:scale-105"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center border-2 border-gray-800 shadow-lg">
                <span className="text-sm">😴</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Welcome back, {user.firstName || "User"}!
            </h2>
            <p className="text-gray-300 mb-4 text-sm">
              You&apos;ve tracked <span className="text-cyan-400 font-semibold">{statsData.totalRecords}</span> sleep sessions
            </p>
            <div className="w-full bg-gray-700/60 rounded-xl p-4 text-left space-y-2 border border-gray-600/50 hover:border-teal-400/50 transition-colors">
              <p className="flex justify-between items-center">
                <span className="font-semibold text-teal-400">Joined:</span>
                <span>{new Date(user.createdAt).toLocaleDateString()}</span>
              </p>
              <p className="flex justify-between items-center">
                <span className="font-semibold text-teal-400">Last Active:</span>
                <span>{user.lastActiveAt ? new Date(user.lastActiveAt).toLocaleDateString() : "N/A"}</span>
              </p>
            </div>
          </div>

          {/* Enhanced Add Record + Animation */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-purple-500/30 flex flex-col md:flex-row gap-6 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center">
                  <span className="mr-2">⏱</span> Track Your Sleep
                </h3>
                <AddNewRecord />
              </div>
              <div className="w-full md:w-1/2 hidden md:flex items-center justify-center cursor-pointer">
                <SleepAnimation />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`${statColors[stat.color].bg} backdrop-blur-md rounded-2xl p-5 border ${statColors[stat.color].border} shadow-lg ${statColors[stat.color].hover} hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="flex items-center">
                <div className="p-3 rounded-full mr-4 bg-gray-800/60 border border-gray-700/50">
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                  <p className={`text-2xl font-bold ${statColors[stat.color].text}`}>{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Chart + Best/Worst Sleep */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1 space-y-4">
            {/* Enhanced Best Sleep Card */}
            <div className="bg-gradient-to-br from-teal-900/40 to-teal-800/30 backdrop-blur-md rounded-2xl p-5 border border-teal-500 shadow-lg hover:shadow-teal-500/30 transition-all duration-300">
              <h4 className="text-teal-300 font-semibold mb-2 flex items-center">
                <span className="mr-2">👍</span> Best Sleep
              </h4>
              <p className="text-3xl font-bold text-white">{bestWorstSleep.bestSleep || 0} hrs</p>
              <span
                className={`text-xs px-2 py-1 rounded-full ${bestQuality.bg} ${bestQuality.color} border ${bestQuality.border} mt-2 inline-block`}
              >
                {bestQuality.label}
              </span>
            </div>

            {/* Enhanced Worst Sleep Card */}
            <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/30 backdrop-blur-md rounded-2xl p-5 border border-purple-500 shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
              <h4 className="text-purple-300 font-semibold mb-2 flex items-center">
                <span className="mr-2">👎</span> Worst Sleep
              </h4>
              <p className="text-3xl font-bold text-white">{bestWorstSleep.worstSleep || 0} hrs</p>
              <span
                className={`text-xs px-2 py-1 rounded-full ${worstQuality.bg} ${worstQuality.color} border ${worstQuality.border} mt-2 inline-block`}
              >
                {worstQuality.label}
              </span>
            </div>

            {/* Enhanced Sloth Animation */}
            <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl p-4 border border-gray-700 shadow-lg flex justify-center items-center">
              <SlothWrapper />
            </div>
          </div>

          {/* Enhanced Main Chart Container */}
          <div className="lg:col-span-3 bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-2xl relative overflow-hidden hover:border-cyan-500/30 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="mr-2">📈</span> Sleep History & Patterns
            </h3>
            <div className="h-96 relative z-10">
              <RecordChart />
            </div>
            {/* Enhanced Decorative Background Blobs */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/3 w-[30rem] h-[30rem] bg-purple-600/40 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/4 w-[25rem] h-[25rem] bg-cyan-600/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Sleep History */}
        <RecordHistory />

        {/* Enhanced Sleep Tips */}
        <div className="bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300">
          <h3 className="text-xl font-bold mb-6 text-teal-400 flex items-center">
            <span className="mr-2">💤</span> Sleep Improvement Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Consistent Schedule", text: "Try to go to bed and wake up at the same time every day.", icon: "⏰" },
              { title: "Dark Environment", text: "Make your bedroom as dark as possible.", icon: "🌙" },
              { title: "Limit Blue Light", text: "Avoid screens for at least an hour before bedtime.", icon: "📵" },
              { title: "Comfortable Temperature", text: "Keep your bedroom slightly cool (~65°F/18°C).", icon: "🌡️" },
            ].map((tip) => (
              <div
                key={tip.title}
                className="bg-gray-700/50 p-4 rounded-xl border border-gray-600/50 hover:border-cyan-500/50 hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="flex items-center mb-2">
                  <span className="text-xl mr-2">{tip.icon}</span>
                  <h4 className="font-semibold text-cyan-400">{tip.title}</h4>
                </div>
                <p className="text-sm text-gray-300">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
