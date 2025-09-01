import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import Guest from "@/components/Guest";
import AddNewRecord from "@/components/AddNewRecord";
import RecordChart from "@/components/RecordChart";
import SleepAnimation from "@/components/SleepAnimation";

export default async function Home() {
  const user = await currentUser();

  if (!user) return <Guest />;

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white pt-20 px-4 sm:px-6 lg:px-8">
      {/* Glowing Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-600/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
            Sleep Tracker Dashboard
          </h1>
          <p className="text-gray-400">Monitor and improve your sleep patterns</p>
        </div>

        {/* Profile + Add Record */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Profile */}
          <div className="bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-xl p-6 flex flex-col items-center text-center border border-gray-700/50">
            <div className="relative mb-4">
              <img
                src={user.imageUrl}
                alt={`${user.firstName}'s profile`}
                className="w-28 h-28 rounded-full object-cover border-4 border-teal-400 shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center border-2 border-gray-800">
                <span className="text-sm">😴</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">Welcome back, {user.firstName}!</h2>
            <p className="text-gray-300 mb-4 text-sm">
              Track your sleep and improve your wellness.
            </p>
            <div className="w-full bg-gray-700/50 rounded-xl p-4 text-left space-y-2 border border-gray-600/30">
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

          {/* Add New Record + Animation */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-gray-700/50 flex flex-col md:flex-row gap-6">
              {/* Add Record Form */}
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center">
                  <span className="mr-2">⏱</span> Track Your Sleep
                </h3>
                <AddNewRecord />
              </div>

              {/* Animation */}
              <div className="w-full md:w-1/2 hidden md:flex items-center justify-center">
                <SleepAnimation />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Avg. Sleep", value: "7.2h", icon: "🛌", color: "cyan" },
            { label: "Records", value: "24", icon: "📊", color: "purple" },
            { label: "Consistency", value: "82%", icon: "⭐", color: "teal" },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`bg-gray-800/70 backdrop-blur-md rounded-2xl p-5 border border-${stat.color}-700/30 shadow-lg`}
            >
              <div className="flex items-center">
                <div className={`p-3 rounded-full bg-${stat.color}-500/10 mr-4`}>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className={`text-2xl font-bold text-${stat.color}-400`}>{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chart Section - Simplified without time period selection */}
        <div className="rounded-2xl p-6 relative overflow-hidden">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white">Sleep History</h3>
          </div>
          <div className="h-96 relative z-10">
            <RecordChart />
          </div>

          {/* Glowing Overlay */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/3 w-[30rem] h-[30rem] bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-[25rem] h-[25rem] bg-cyan-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>


        {/* Best worst Sleep */}



        {/* Sleep Tips - Moved to separate section with proper spacing */}
        <div className="bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-gray-700/50 mt-12">
          <h3 className="text-xl font-bold mb-6 text-teal-400 flex items-center">
            <span className="mr-2">💤</span> Sleep Improvement Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Consistent Schedule",
                text: "Try to go to bed and wake up at the same time every day, even on weekends.",
              },
              {
                title: "Dark Environment",
                text: "Make your bedroom as dark as possible to improve sleep quality.",
              },
              {
                title: "Limit Blue Light",
                text: "Avoid screens for at least an hour before bedtime to help your mind unwind.",
              },
              {
                title: "Comfortable Temperature",
                text: "Keep your bedroom slightly cool (around 65°F or 18°C) for optimal sleep.",
              },
            ].map((tip) => (
              <div
                key={tip.title}
                className="bg-gray-700/40 p-4 rounded-xl border border-gray-600/30 hover:border-cyan-500/30 transition-colors"
              >
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