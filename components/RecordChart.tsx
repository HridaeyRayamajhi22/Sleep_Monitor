import getRecords from "@/app/actions/getRecords";
import BarChart from "./BarChart";
import { Record } from "@/types/Record";

const RecordChart = async () => {
  const { records, error } = await getRecords();

  if (error) {
    return (
      <div className="bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-700 text-center">
        <p className="text-red-400 font-semibold">{error}</p>
      </div>
    );
  }

  if (!records || records.length === 0) {
    return (
      <div className="bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-700 text-center">
        <h2 className="text-xl font-bold mb-2 text-teal-400">
          No Sleep Records Found
        </h2>
        <p className="text-gray-300">
          Start tracking your sleep to see your progress here.
        </p>
      </div>
    );
  }

  // Transform records for BarChart
  const chartData = records.map((record) => ({
    ...record,
    date: new Date(record.date).toLocaleDateString(), // prettier date format
  }));

  return (
    <div className="bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-700">
      <h3 className="text-xl font-bold mb-4 text-teal-400 text-center">
        Sleep Records Chart 🛌
      </h3>
      <div className="overflow-x-auto">
        <BarChart records={chartData} />
      </div>
    </div>
  );
};

export default RecordChart;
