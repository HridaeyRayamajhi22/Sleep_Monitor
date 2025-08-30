"use client";
import React, { useRef, useState } from "react";
import addSleepRecord from "@/app/actions/addSleepRecord";

const AddNewRecord = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [amount, setAmount] = useState(6);
  const [sleepQuality, setSleepQuality] = useState("");
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const clientAction = async (formData: FormData) => {
    setIsLoading(true);
    setAlertMessage(null);

    formData.set("amount", amount.toString());
    formData.set("text", sleepQuality);

    const { error } = await addSleepRecord(formData);

    if (error) {
      setAlertMessage(`Error: ${error}`);
      setAlertType("error");
    } else {
      setAlertMessage("Sleep record added successfully!");
      setAlertType("success");
      formRef.current?.reset();
      setAmount(6);
      setSleepQuality("");
    }

    setIsLoading(false);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 max-w-lg mx-auto">
      <h3 className="text-2xl font-bold text-teal-400 mb-6 text-center">
        Track Your Sleep 🛌
      </h3>

      {alertMessage && (
        <div
          className={`mb-4 p-3 rounded ${
            alertType === "success" ? "bg-green-500/30 text-green-200" : "bg-red-500/30 text-red-200"
          }`}
        >
          {alertMessage}
        </div>
      )}

      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(formRef.current!);
          clientAction(formData);
        }}
        className="space-y-5"
      >
        {/* Sleep Quality */}
        <div>
          <label htmlFor="text" className="block mb-1 font-semibold text-gray-300">
            Sleep Quality
          </label>
          <select
            name="text"
            id="text"
            required
            value={sleepQuality}
            onChange={(e) => setSleepQuality(e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            <option value="" disabled>
              Select sleep quality
            </option>
            <option value="Refreshed">Refreshed 😃</option>
            <option value="Tired">Tired 😴</option>
            <option value="Mid point">Mid Point 😐</option>
            <option value="Exhausted">Exhausted 😓</option>
            <option value="Fulfilling">Fulfilling 😊</option>
          </select>
        </div>

        {/* Sleep Date */}
        <div>
          <label htmlFor="date" className="block mb-1 font-semibold text-gray-300">
            Sleep Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            required
            onFocus={(e) => e.target.showPicker()}
            className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        {/* Hours Slept */}
        <div>
          <label htmlFor="amount" className="block mb-1 font-semibold text-gray-300">
            Hours Slept: <span className="text-teal-400">{amount}h</span>
          </label>
          <input
            type="range"
            name="amount"
            id="amount"
            min="0"
            max="12"
            step="0.5"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg accent-teal-400 cursor-pointer"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold shadow-md hover:opacity-90 transition"
        >
          {isLoading ? "Saving..." : "Add Sleep Record"}
        </button>
      </form>
    </div>
  );
};

export default AddNewRecord;
