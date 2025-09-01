'use server';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';

export default async function getStats() {
  const { userId } = await auth();

  if (!userId) return { error: 'User not found' };

  const records = await db.record.findMany({
    where: { userId },
    select: { amount: true, date: true },
  });

  if (!records || records.length === 0) {
    return { avgSleep: 0, totalRecords: 0, consistency: 0 };
  }

  const totalRecords = records.length;
  const avgSleep =
    records.reduce((sum, rec) => sum + rec.amount, 0) / totalRecords;

  // Example consistency: % of records >= 7 hours
  const consistency =
    (records.filter((rec) => rec.amount >= 7).length / totalRecords) * 100;

  return { avgSleep: parseFloat(avgSleep.toFixed(1)), totalRecords, consistency: parseInt(consistency.toFixed(0)) };
}
