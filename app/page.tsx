import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import Guest from "@/components/Guest";
import AddNewRecord from "@/components/AddNewRecord";
import RecordChart from "@/components/RecordChart";
import SleepAnimation from "@/components/SleepAnimation";
import getBestWorstSleep from "@/app/actions/getBestWorstSleep";
import RecordHistory from "@/components/RecordHistory";
import getStats from "@/app/actions/getStats";
import Sloth from "@/components/Sloth";

export default async function Home() {
  const user = await currentUser();
  const bestWorstSleep = await getBestWorstSleep();
  const statsData = await getStats();

  if (!user) return <Guest />;

  // Tailwind-safe colors
  const statColors = {
    cyan: { border: "border-cyan-700/30", bg: "bg-cyan-500/10", text: "text-cyan-400" },
    purple: { border: "border-purple-700/30", bg: "bg-purple-500/10", text: "text-purple-400" },
    teal: { border: "border-teal-700/30", bg: "bg-teal-500/10", text: "text-teal-400" },
    blue: { border: "border-blue-700/30", bg: "bg-blue-500/10", text: "text-blue-400" },
  };

  // Stats array
  const stats = [
    { label: "Avg. Sleep", value: `${statsData.avgSleep}h`, icon: "🛌", color: "cyan" },
    { label: "Records", value: statsData.totalRecords, icon: "📊", color: "purple" },
    { label: "Consistency", value: `${statsData.consistency}%`, icon: "⭐", color: "teal" },
  ];

  // Sleep quality indicators
  const getSleepQuality = (hours: number) => {
    if (hours >= 8) return { label: "Excellent", color: "text-green-400", bg: "bg-green-400/10" };
    if (hours >= 7) return { label: "Good", color: "text-teal-400", bg: "bg-teal-400/10" };
    if (hours >= 6) return { label: "Fair", color: "text-yellow-400", bg: "bg-yellow-400/10" };
    return { label: "Poor", color: "text-red-400", bg: "bg-red-400/10" };
  };

  const bestQuality = getSleepQuality(bestWorstSleep.bestSleep || 0);
  const worstQuality = getSleepQuality(bestWorstSleep.worstSleep || 0);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white pt-20 px-4 sm:px-6 lg:px-8">
      {/* Glowing Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-600/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-teal-600/15 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-teal-400 mb-2">
            Sleep Monitor's Dashboard
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Monitor your sleep patterns, track your progress, and improve your sleep quality
          </p>
        </div>

        {/* Profile + Add Record */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Profile */}
          <div className="bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-2xl p-6 flex flex-col items-center text-center border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300">
            <div className="relative mb-4">
              <img
                src={user.imageUrl}
                alt={`${user.firstName}'s profile`}
                className="w-28 h-28 rounded-full object-cover border-4 border-teal-400 shadow-lg hover:shadow-cyan-400/20 transition-all duration-300"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center border-2 border-gray-800 shadow-lg">
                <span className="text-sm">😴</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Welcome back, {user.firstName || "User"}!
            </h2>
            <p className="text-gray-300 mb-4 text-sm">
              You've tracked <span className="text-cyan-400 font-semibold">{statsData.totalRecords}</span> sleep sessions
            </p>
            <div className="w-full bg-gray-700/50 rounded-xl p-4 text-left space-y-2 border border-gray-600/30 hover:border-teal-400/30 transition-colors">
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

          {/* Add Record + Animation */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-gray-700/50 flex flex-col md:flex-row gap-6 hover:border-purple-500/30 transition-all duration-300">
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

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`bg-gray-800/70 backdrop-blur-md rounded-2xl p-5 border shadow-lg ${statColors[stat.color].border} hover:shadow-${stat.color}-500/20 hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="flex items-center">
                <div className={`p-3 rounded-full mr-4 ${statColors[stat.color].bg}`}>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className={`text-2xl font-bold ${statColors[stat.color].text}`}>{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chart + Best/Worst Sleep */}
        {/* Chart + Best/Worst Sleep */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1 space-y-4">
            {/* Best Sleep Card */}
            <div className="bg-gradient-to-br from-teal-900/30 to-teal-800/20 backdrop-blur-md rounded-2xl p-5 border border-teal-700/30 shadow-lg">
              <h4 className="text-teal-400 font-semibold mb-2">Best Sleep</h4>
              <p className="text-3xl font-bold text-white">{bestWorstSleep.bestSleep || 0} hrs</p>
              <span className={`text-sm px-2 py-1 rounded-full ${bestQuality.bg} ${bestQuality.color}`}>{bestQuality.label}</span>
            </div>

            {/* Worst Sleep Card */}
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-md rounded-2xl p-5 border border-purple-700/30 shadow-lg">
              <h4 className="text-purple-400 font-semibold mb-2">Worst Sleep</h4>
              <p className="text-3xl font-bold text-white">{bestWorstSleep.worstSleep || 0} hrs</p>
              <span className={`text-sm px-2 py-1 rounded-full ${worstQuality.bg} ${worstQuality.color}`}>{worstQuality.label}</span>
            </div>

            {/* Sloth Animation Below Cards */}
            <div className="bg-gray-800/70 backdrop-blur-md rounded-2xl p-4 border border-gray-700/50 shadow-lg flex items-center justify-center">
              <Sloth />
            </div>
          </div>

          {/* Main Chart Container */}
          <div className="lg:col-span-3 bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 shadow-2xl relative overflow-hidden">
            <h3 className="text-2xl font-bold text-white mb-4">Sleep History & Patterns</h3>
            <div className="h-96 relative z-10">
              <RecordChart />
            </div>
            {/* Decorative Background Blobs */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/3 w-[30rem] h-[30rem] bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/4 w-[25rem] h-[25rem] bg-cyan-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Sleep History */}
        <RecordHistory />

        {/* Sleep Tips */}
        <div className="bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300">
          <h3 className="text-xl font-bold mb-6 text-teal-400 flex items-center">
            <span className="mr-2">💤</span> Sleep Improvement Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Consistent Schedule", text: "Try to go to bed and wake up at the same time every day." },
              { title: "Dark Environment", text: "Make your bedroom as dark as possible." },
              { title: "Limit Blue Light", text: "Avoid screens for at least an hour before bedtime." },
              { title: "Comfortable Temperature", text: "Keep your bedroom slightly cool (~65°F/18°C)." },
            ].map((tip) => (
              <div key={tip.title} className="bg-gray-700/40 p-4 rounded-xl border border-gray-600/30 hover:border-cyan-500/30 hover:scale-[1.02] transition-all duration-300">
                <h4 className="font-semibold text-cyan-400 mb-2">{tip.title}</h4>
                <p className="text-sm text-gray-300">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
