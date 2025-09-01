import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import Guest from "@/components/Guest";
import AddNewRecord from "@/components/AddNewRecord";
import RecordChart from "@/components/RecordChart";

export default async function Home() {
  const user = await currentUser();

  // Show guest view if no user is logged in
  if (!user) {
    return <Guest />;
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white pt-20 px-6 sm:px-10 lg:px-20">
      {/* Main grid: user profile + add record + chart */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">

        {/* ===== Left Column: User Profile ===== */}
        <div className="bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-col items-center text-center">
          <img
            src={user.imageUrl}
            alt={`${user.firstName}'s profile`}
            className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-teal-400 shadow-md"
          />
          <h2 className="text-2xl font-bold mb-4">
            Welcome back, {user.fullName} 🎉
          </h2>
          <p className="text-gray-300 mb-4">
            Here's a quick overview of your activity and sleep tracking.
          </p>

          <div className="w-full bg-gray-700 rounded-xl p-4 text-left space-y-2 border border-gray-600">
            <p>
              <span className="font-semibold text-teal-400">Joined:</span>{" "}
              {new Date(user.createdAt).toLocaleDateString()}
            </p>
            <p>
              <span className="font-semibold text-teal-400">Last Active:</span>{" "}
              {user.lastActiveAt
                ? new Date(user.lastActiveAt).toLocaleString()
                : "N/A"}
            </p>
          </div>
        </div>

        {/* ===== Middle Column: Add New Record ===== */}
        <div className="lg:col-span-2">
          <AddNewRecord />
        </div>

        {/* ===== Right Column (optional grid row if needed) ===== */}
        <div className="lg:col-span-3 mt-6 lg:mt-0">
          <RecordChart />
        </div>
      </div>

      {/* ===== Optional Section: Sleep Overview Stats ===== */}
      <section className="mt-10 max-w-7xl mx-auto">
        <div className="bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-700">
          <h3 className="text-xl font-bold mb-4 text-teal-400">
            Your Sleep Overview 🛌
          </h3>
          <p className="text-gray-300">
            Track your progress over the last week and see insights into your sleep patterns.
          </p>
          {/* You can add charts or stats components here */}
        </div>
      </section>
    </main>
  );
}
