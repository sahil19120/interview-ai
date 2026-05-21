"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", score: 60 },
  { name: "Tue", score: 72 },
  { name: "Wed", score: 68 },
  { name: "Thu", score: 80 },
  { name: "Fri", score: 91 },
  { name: "Sat", score: 87 },
];

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-5xl font-bold">
          Analytics
        </h1>

        <p className="text-gray-400 mt-4">
          Track your interview performance and growth.
        </p>

        <div className="mt-12 bg-white/5 border border-white/10 rounded-3xl p-8">
          
          <h2 className="text-2xl font-semibold mb-8">
            Weekly Performance
          </h2>

          <div className="h-[400px]">
            
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                
                <XAxis dataKey="name" stroke="#888" />
                
                <YAxis stroke="#888" />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#2563eb"
                  strokeWidth={4}
                />
              </LineChart>
            </ResponsiveContainer>

          </div>
        </div>
      </div>
    </main>
  );
}