import getRecords from '@/app/actions/getRecords';
import RecordItem from './RecordItem';
import { Record } from '@/types/Record';

const RecordHistory = async () => {
  const { records, error } = await getRecords();

  if (error) {
    return (
      <div className='bg-red-800/30 text-red-400 border border-red-700 rounded-md p-4 text-center'>
        <p>{error}</p>
      </div>
    );
  }

  if (!records || records.length === 0) {
    return (
      <div className='flex items-center justify-center py-6'>
        <div className='bg-gray-800/70 backdrop-blur-md shadow-xl rounded-xl p-8 w-full md:w-2/3 text-center border border-gray-700/50'>
          <h3 className='text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
            No Sleep Records Found
          </h3>
          <p className='text-gray-300'>
            Start tracking your sleep to see your history here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='p-4'>
      <div className='bg-gray-800/70 backdrop-blur-md shadow-xl rounded-xl p-6 mx-auto w-full md:w-4/5 border border-gray-700/50'>
        <h3 className='text-2xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent border-b border-gray-700 pb-4'>
          Sleep History
        </h3>
        <ul className='space-y-4'>
          {records.map((record: Record) => (
            <RecordItem key={record.id} record={record} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecordHistory;
