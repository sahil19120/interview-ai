"use client";

import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

type InterviewResult = {
  question: string;
  answer: string;
  feedback: string;
};

export default function ResultsPage() {

  const [results, setResults] = useState<InterviewResult[]>([]);

  useEffect(() => {

    const storedResults =
      localStorage.getItem("interviewResults");

    if (storedResults) {
      setResults(JSON.parse(storedResults));
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

        {results.length === 0 ? (

          <Card className="bg-white/5 border-white/10 text-white mt-12">

            <CardContent className="p-8">

              <h2 className="text-3xl font-semibold mb-6">
                No Results Available
              </h2>

              <p className="text-gray-300">
                Complete an interview to see your results.
              </p>

            </CardContent>

          </Card>

        ) : (

          <div className="space-y-6 mt-12">

            {results.map((result, index) => (

              <Card
                key={index}
                className="bg-white/5 border-white/10 text-white"
              >

                <CardContent className="p-8">

                  <p className="text-sm text-gray-400 mb-3">
                    Question {index + 1}
                  </p>

                  <h2 className="text-2xl font-semibold">
                    {result.question}
                  </h2>

                  <div className="mt-6">

                    <h3 className="text-lg font-semibold">
                      Your Answer
                    </h3>

                    <p className="text-gray-300 mt-2 whitespace-pre-line">
                      {result.answer}
                    </p>

                  </div>

                  <div className="mt-6">

                    <h3 className="text-lg font-semibold">
                      AI Feedback
                    </h3>

                    <p className="text-gray-300 mt-2 whitespace-pre-line leading-relaxed">
                      {result.feedback}
                    </p>

                  </div>

                </CardContent>

              </Card>

            ))}

          </div>

        )}

      </div>

    </main>

  );
}