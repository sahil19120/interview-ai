"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";


type Feedback = {
  score: number;
  strengths: string[];
  weaknesses: string[];
  improvements: string[];
};


type InterviewResult = {
  question: string;
  answer: string;
  feedback: Feedback;
};


export default function ResultsPage() {

  const router = useRouter();

  const [results, setResults] =
    useState<InterviewResult[]>([]);


  useEffect(() => {

    const storedResults =
      localStorage.getItem("interviewResults");


    if (storedResults) {

      try {

        const parsedResults =
          JSON.parse(storedResults);

        setResults(parsedResults);

      } catch (error) {

        console.error(
          "Failed to load interview results:",
          error
        );

        setResults([]);

      }

    }

  }, []);


  const overallScore =
    results.length > 0
      ? (
          results.reduce(
            (total, result) =>
              total +
              result.feedback.score,
            0
          ) / results.length
        ).toFixed(1)
      : "0";


  const bestScore =
    results.length > 0
      ? Math.max(
          ...results.map(
            (result) =>
              result.feedback.score
          )
        )
      : 0;


  return (

    <main className="min-h-screen bg-black text-white p-8">

      <div className="max-w-5xl mx-auto">


        <h1 className="text-5xl font-bold">

          Interview Results

        </h1>


        <p className="text-gray-400 mt-4">

          Here is your overall interview performance.

        </p>


        {results.length === 0 ? (

          <Card className="bg-white/5 border-white/10 text-white mt-12 max-w-2xl">

            <CardContent className="p-10 text-center">


              <div className="text-5xl mb-6">

                📊

              </div>


              <h2 className="text-3xl font-bold">

                No Interview Results Yet

              </h2>


              <p className="text-gray-400 mt-4 leading-relaxed">

                Complete a mock interview to view your
                AI-powered performance analysis, scores,
                strengths, weaknesses, and improvement tips.

              </p>


              <Button

                onClick={() =>
                  router.push(
                    "/dashboard/create-interview"
                  )
                }

                className="mt-8 bg-blue-600 hover:bg-blue-700"

              >

                Create Interview

              </Button>


            </CardContent>

          </Card>

        ) : (

          <>


            {/* Overall Performance */}

            <div className="grid md:grid-cols-3 gap-6 mt-12">


              {/* Overall Score */}

              <Card className="bg-white/5 border-white/10 text-white">

                <CardContent className="p-6">

                  <p className="text-gray-400 text-sm">

                    Overall Score

                  </p>


                  <p className="text-4xl font-bold text-green-400 mt-3">

                    {overallScore}/10

                  </p>

                </CardContent>

              </Card>


              {/* Best Score */}

              <Card className="bg-white/5 border-white/10 text-white">

                <CardContent className="p-6">

                  <p className="text-gray-400 text-sm">

                    Best Score

                  </p>


                  <p className="text-4xl font-bold text-blue-400 mt-3">

                    {bestScore}/10

                  </p>

                </CardContent>

              </Card>


              {/* Questions Answered */}

              <Card className="bg-white/5 border-white/10 text-white">

                <CardContent className="p-6">

                  <p className="text-gray-400 text-sm">

                    Questions Answered

                  </p>


                  <p className="text-4xl font-bold mt-3">

                    {results.length}

                  </p>

                </CardContent>

              </Card>


            </div>


            {/* Question Results */}

            <div className="space-y-6 mt-12">


              {results.map(
                (result, index) => (

                  <Card
                    key={index}
                    className="bg-white/5 border-white/10 text-white"
                  >

                    <CardContent className="p-8">


                      {/* Question + Score */}

                      <div className="flex justify-between items-start gap-6">


                        <div>

                          <p className="text-sm text-gray-400 mb-3">

                            Question {index + 1}

                          </p>


                          <h2 className="text-2xl font-semibold leading-relaxed">

                            {result.question}

                          </h2>

                        </div>


                        <div className="text-2xl font-bold text-green-400 whitespace-nowrap">

                          {result.feedback.score}/10

                        </div>


                      </div>


                      {/* Answer */}

                      <div className="mt-8">

                        <h3 className="text-lg font-semibold">

                          Your Answer

                        </h3>


                        <p className="text-gray-300 mt-3 whitespace-pre-line leading-relaxed">

                          {result.answer}

                        </p>

                      </div>


                      {/* Strengths */}

                      <div className="mt-8">

                        <h3 className="font-semibold text-green-400 mb-3">

                          Strengths

                        </h3>


                        <ul className="list-disc ml-5 text-gray-300 space-y-2">

                          {result.feedback.strengths.map(
                            (
                              strength,
                              strengthIndex
                            ) => (

                              <li
                                key={strengthIndex}
                              >

                                {strength}

                              </li>

                            )
                          )}

                        </ul>

                      </div>


                      {/* Weaknesses */}

                      <div className="mt-8">

                        <h3 className="font-semibold text-red-400 mb-3">

                          Weaknesses

                        </h3>


                        <ul className="list-disc ml-5 text-gray-300 space-y-2">

                          {result.feedback.weaknesses.map(
                            (
                              weakness,
                              weaknessIndex
                            ) => (

                              <li
                                key={weaknessIndex}
                              >

                                {weakness}

                              </li>

                            )
                          )}

                        </ul>

                      </div>


                      {/* Improvement Tips */}

                      <div className="mt-8">

                        <h3 className="font-semibold text-blue-400 mb-3">

                          Improvement Tips

                        </h3>


                        <ul className="list-disc ml-5 text-gray-300 space-y-2">

                          {result.feedback.improvements.map(
                            (
                              improvement,
                              improvementIndex
                            ) => (

                              <li
                                key={improvementIndex}
                              >

                                {improvement}

                              </li>

                            )
                          )}

                        </ul>

                      </div>


                    </CardContent>

                  </Card>

                )
              )}


            </div>


          </>

        )}


      </div>

    </main>

  );

}