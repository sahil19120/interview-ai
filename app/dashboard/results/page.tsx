"use client";

import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function ResultsPage() {

  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const storedFeedback =
      localStorage.getItem("interviewFeedback");

    if (storedFeedback) {
      setFeedback(storedFeedback);
    }
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold">
          Interview Results
        </h1>

        <p className="text-gray-400 mt-4">
          Here is your AI interview evaluation.
        </p>

        <Card className="bg-white/5 border-white/10 text-white mt-12">

          <CardContent className="p-8">

            <h2 className="text-3xl font-semibold mb-6">
              AI Feedback
            </h2>

            <p className="text-gray-300 whitespace-pre-line leading-relaxed">
              {feedback || "No feedback available yet."}
            </p>

          </CardContent>
        </Card>

      </div>
    </main>
  );
}