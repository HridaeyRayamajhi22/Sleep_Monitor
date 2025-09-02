import getRecords from "@/app/actions/getRecords";
import BarChart from "./BarChart";

const RecordChart = async () => {
  const { records, error } = await getRecords();

  if (error) {
    return (
      <div className="text-center">
        <p className="text-red-400 font-semibold">{error}</p>
      </div>
    );
  }

  if (!records || records.length === 0) {
    return (
      <div className="text-center">
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
    date: new Date(record.date).toLocaleDateString(),
  }));

  return (
    <div className="h-full w-full">
      <BarChart records={chartData} />
    </div>
  );
};

export default RecordChart;
