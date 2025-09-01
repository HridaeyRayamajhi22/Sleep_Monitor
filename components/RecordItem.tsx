'use client';
import { useState } from 'react';
import { Record } from '@/types/Record';
import deleteRecord from '@/app/actions/deleteRecords';

const RecordItem = ({ record }: { record: Record }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteRecord = async (recordId: string) => {
    setIsLoading(true);
    await deleteRecord(recordId);
    setIsLoading(false);
  };

  // Conditional left border color based on sleep hours
  const borderColor = record?.amount < 7 ? 'border-red-500' : 'border-teal-400';
  const bgColor = 'bg-gray-900/50';

  return (
    <li
      className={`flex flex-col md:flex-row justify-between items-start md:items-center p-4 rounded-xl shadow-md border-l-4 ${borderColor} ${bgColor} transition hover:scale-[1.02] hover:shadow-lg`}
    >
      <div className='flex flex-col mb-2 md:mb-0'>
        <span className='text-sm text-gray-400'>
          {new Date(record?.date).toLocaleDateString()}
        </span>
        <span className='text-lg font-bold text-white'>
          {record?.amount} hours
        </span>
        <span className='text-sm text-gray-300'>
          Sleep Mode: {record?.text}
        </span>
      </div>
      <button
        onClick={() => handleDeleteRecord(record.id)}
        disabled={isLoading}
        className={`mt-2 md:mt-0 bg-red-600 hover:bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center transition ${
          isLoading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        aria-label='Delete record'
      >
        {isLoading ? (
          <svg
            className='animate-spin h-5 w-5 text-white'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            />
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z'
            />
          </svg>
        ) : (
          '✖'
        )}
      </button>
    </li>
  );
};

export default RecordItem;
