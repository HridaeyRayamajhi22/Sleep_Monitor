'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  TooltipItem,
  ChartData,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Define the type for a record
interface Record {
  date: string; // ISO date string
  amount: number; // Hours slept
}

const BarChart = ({ records }: { records: Record[] }) => {
  // Prepare data for the chart
  const data: ChartData<'bar'> = {
    labels: records.map((record) => new Date(record.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Hours Slept',
        data: records.map((record) => record.amount),
        backgroundColor: records.map((record) => {
          if (record.amount < 5) return 'rgba(239, 68, 68, 0.7)'; // Red
          if (record.amount < 7) return 'rgba(249, 115, 22, 0.7)'; // Orange
          return 'rgba(34, 197, 94, 0.7)'; // Green
        }),
        borderColor: records.map((record) => {
          if (record.amount < 5) return 'rgba(239, 68, 68, 1)';
          if (record.amount < 7) return 'rgba(249, 115, 22, 1)';
          return 'rgba(34, 197, 94, 1)';
        }),
        borderWidth: 1.5,
        borderRadius: 6,
        barPercentage: 0.6,
        categoryPercentage: 0.7,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#e2e8f0',
          font: {
            size: 12,
            family: "'Inter', sans-serif",
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(26, 32, 44, 0.9)',
        titleColor: '#e2e8f0',
        bodyColor: '#e2e8f0',
        titleFont: {
          family: "'Inter', sans-serif",
          size: 14,
        },
        bodyFont: {
          family: "'Inter', sans-serif",
          size: 13,
        },
        padding: 12,
        cornerRadius: 6,
        displayColors: false,
        callbacks: {
          label: function (context: TooltipItem<'bar'>) {
            return `Hours: ${context.parsed.y}`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#a0aec0',
          font: {
            size: 11,
            family: "'Inter', sans-serif",
          },
          maxRotation: 45,
        },
        grid: {
          color: 'rgba(74, 85, 104, 0.3)',
          drawBorder: false,
        },
      },
      y: {
        beginAtZero: true,
        suggestedMin: 4,
        suggestedMax: 10,
        ticks: {
          color: '#a0aec0',
          font: {
            size: 11,
            family: "'Inter', sans-serif",
          },
          stepSize: 1,
          callback: function (value: number | string) {
            return value + 'h';
          },
        },
        grid: {
          color: 'rgba(74, 85, 104, 0.3)',
          drawBorder: false,
        },
      },
    },
    animation: {
      duration: 1500,
      easing: 'easeOutQuart',
    },
  };

  return (
    <div className="relative p-6 bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
      {/* Glowing background effects */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      {/* Chart title */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          Sleep Patterns
        </h2>
        <p className="text-gray-400 mt-2 text-sm">Track your nightly rest</p>
      </div>

      {/* Chart container */}
      <div className="relative z-10" style={{ height: '400px' }}>
        <Bar data={data} options={options} />
      </div>

      {/* Average sleep indicator */}
      <div className="mt-6 text-center">
        <p className="text-gray-400 text-sm">
          Average:{' '}
          <span className="font-bold text-cyan-400">
            {(
              records.reduce((sum, record) => sum + record.amount, 0) /
              records.length
            ).toFixed(1)}{' '}
            hours
          </span>
        </p>
      </div>
    </div>
  );
};

export default BarChart;
