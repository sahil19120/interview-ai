"use client";

import { useEffect, useState } from "react";

type Interview = {
  _id: string;
  role: string;
  experience: string;
  techstack: string[];
  questionCount: string;
  completedAt: string;
  overallScore: number;
  questionsAnswered: number;
  duration: number;
};

export default function HistoryPage() {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const response = await fetch("/api/interviews");

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(
            data.message || "Failed to fetch interviews"
          );
        }

        setInterviews(data.interviews);
      } catch (error) {
        console.error(
          "Failed to fetch interview history:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchInterviews();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-gray-400">
          Loading interview history...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold">
          Interview History
        </h1>

        <p className="text-gray-400 mt-2">
          Your completed interviews
        </p>

        {interviews.length === 0 ? (
          <div className="mt-10 border border-white/10 rounded-xl p-10 text-center">
            <p className="text-gray-400">
              No interviews found.
            </p>
          </div>
        ) : (
          <div className="mt-10 space-y-4">
            {interviews.map((interview) => (
              <div
                key={interview._id}
                className="border border-white/10 bg-white/5 rounded-xl p-6"
              >
                <div className="flex items-center justify-between">

                  <div>
                    <h2 className="text-xl font-semibold">
                      {interview.role}
                    </h2>

                    <p className="text-gray-400 mt-1">
                      {interview.experience} ·{" "}
                      {interview.techstack.join(", ")}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-2xl font-bold">
                      {interview.overallScore}/10
                    </p>

                    <p className="text-sm text-gray-400">
                      Score
                    </p>
                  </div>

                </div>

                <div className="flex gap-6 mt-6 text-sm text-gray-400">

                  <span>
                    Questions:{" "}
                    {interview.questionsAnswered}
                  </span>

                  <span>
                    Duration:{" "}
                    {Math.floor(interview.duration / 60)}m{" "}
                    {interview.duration % 60}s
                  </span>

                  <span>
                    {new Date(
                      interview.completedAt
                    ).toLocaleDateString()}
                  </span>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}