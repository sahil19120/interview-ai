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


  /*
    Overall Score
  */

  const overallScoreNumber =
    results.length > 0
      ? results.reduce(
          (total, result) =>
            total +
            result.feedback.score,
          0
        ) / results.length
      : 0;


  const overallScore =
    overallScoreNumber.toFixed(1);


  /*
    Best Score
  */

  const bestScore =
    results.length > 0
      ? Math.max(
          ...results.map(
            (result) =>
              result.feedback.score
          )
        )
      : 0;


  /*
    Lowest Score
  */

  const lowestScore =
    results.length > 0
      ? Math.min(
          ...results.map(
            (result) =>
              result.feedback.score
          )
        )
      : 0;


  /*
    Performance Level
  */

  const getPerformanceLevel = (
    score: number
  ) => {

    if (score >= 9) {

      return {
        label: "Excellent",
        color: "text-green-400",
      };

    }


    if (score >= 8) {

      return {
        label: "Very Good",
        color: "text-blue-400",
      };

    }


    if (score >= 7) {

      return {
        label: "Good",
        color: "text-cyan-400",
      };

    }


    if (score >= 6) {

      return {
        label: "Average",
        color: "text-yellow-400",
      };

    }


    return {
      label: "Needs Improvement",
      color: "text-red-400",
    };

  };


  const performance =
    getPerformanceLevel(
      overallScoreNumber
    );


  /*
    Strongest Question
  */

  const strongestResult =
    results.length > 0
      ? results.reduce(
          (best, current) =>

            current.feedback.score >
            best.feedback.score

              ? current
              : best

        )
      : null;


  /*
    Weakest Question
  */

  const weakestResult =
    results.length > 0
      ? results.reduce(
          (lowest, current) =>

            current.feedback.score <
            lowest.feedback.score

              ? current
              : lowest

        )
      : null;


  /*
    Combined Strengths
  */

  const allStrengths =
    results.flatMap(
      (result) =>
        result.feedback.strengths
    );


  /*
    Combined Weaknesses
  */

  const allWeaknesses =
    results.flatMap(
      (result) =>
        result.feedback.weaknesses
    );


  /*
    Unique Strengths
  */

  const uniqueStrengths =
    [...new Set(allStrengths)].slice(
      0,
      5
    );


  /*
    Unique Weaknesses
  */

  const uniqueWeaknesses =
    [...new Set(allWeaknesses)].slice(
      0,
      5
    );


  return (

    <main className="min-h-screen bg-black text-white p-8">

      <div className="max-w-6xl mx-auto">


        {/* Header */}

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


            {/* Analytics Summary */}

            <div className="mt-12">


              <h2 className="text-3xl font-bold">

                Performance Analytics

              </h2>


              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">


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


                {/* Lowest Score */}

                <Card className="bg-white/5 border-white/10 text-white">

                  <CardContent className="p-6">

                    <p className="text-gray-400 text-sm">

                      Lowest Score

                    </p>


                    <p className="text-4xl font-bold text-red-400 mt-3">

                      {lowestScore}/10

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


              {/* Performance Level */}

              <Card className="bg-white/5 border-white/10 text-white mt-6">

                <CardContent className="p-6">


                  <p className="text-gray-400 text-sm">

                    Overall Performance

                  </p>


                  <h3
                    className={`text-3xl font-bold mt-3 ${performance.color}`}
                  >

                    {performance.label}

                  </h3>


                  <p className="text-gray-400 mt-2">

                    Based on your average score of{" "}

                    {overallScore}/10

                  </p>


                </CardContent>

              </Card>


            </div>


            {/* Score Per Question */}

            <div className="mt-12">


              <h2 className="text-3xl font-bold">

                Score Per Question

              </h2>


              <Card className="bg-white/5 border-white/10 text-white mt-6">

                <CardContent className="p-8">


                  <div className="space-y-6">


                    {results.map(
                      (result, index) => (

                        <div key={index}>


                          <div className="flex justify-between mb-2">


                            <span className="text-gray-300">

                              Question {index + 1}

                            </span>


                            <span className="font-semibold">

                              {result.feedback.score}/10

                            </span>


                          </div>


                          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">


                            <div
                              className="h-full bg-blue-600 transition-all duration-500"
                              style={{
                                width:
                                  `${result.feedback.score * 10}%`,
                              }}
                            />


                          </div>


                        </div>

                      )
                    )}


                  </div>


                </CardContent>

              </Card>


            </div>


            {/* Strongest and Weakest */}

            <div className="grid md:grid-cols-2 gap-6 mt-12">


              {/* Strongest */}

              <Card className="bg-white/5 border-white/10 text-white">

                <CardContent className="p-8">


                  <p className="text-green-400 font-semibold">

                    Strongest Performance

                  </p>


                  {strongestResult && (


                    <>


                      <p className="text-gray-400 mt-4 text-sm">

                        Score

                      </p>


                      <p className="text-4xl font-bold text-green-400 mt-2">

                        {strongestResult.feedback.score}/10

                      </p>


                      <p className="text-gray-300 mt-5 leading-relaxed">

                        {strongestResult.question}

                      </p>


                    </>


                  )}


                </CardContent>

              </Card>


              {/* Weakest */}

              <Card className="bg-white/5 border-white/10 text-white">

                <CardContent className="p-8">


                  <p className="text-red-400 font-semibold">

                    Needs Improvement

                  </p>


                  {weakestResult && (


                    <>


                      <p className="text-gray-400 mt-4 text-sm">

                        Score

                      </p>


                      <p className="text-4xl font-bold text-red-400 mt-2">

                        {weakestResult.feedback.score}/10

                      </p>


                      <p className="text-gray-300 mt-5 leading-relaxed">

                        {weakestResult.question}

                      </p>


                    </>


                  )}


                </CardContent>

              </Card>


            </div>


            {/* Key Insights */}

            <div className="grid md:grid-cols-2 gap-6 mt-12">


              {/* Key Strengths */}

              <Card className="bg-white/5 border-white/10 text-white">

                <CardContent className="p-8">


                  <h2 className="text-2xl font-bold text-green-400">

                    Key Strengths

                  </h2>


                  <ul className="list-disc ml-5 text-gray-300 space-y-3 mt-6">


                    {uniqueStrengths.map(
                      (strength, index) => (

                        <li key={index}>

                          {strength}

                        </li>

                      )
                    )}


                  </ul>


                </CardContent>

              </Card>


              {/* Areas To Improve */}

              <Card className="bg-white/5 border-white/10 text-white">

                <CardContent className="p-8">


                  <h2 className="text-2xl font-bold text-red-400">

                    Areas To Improve

                  </h2>


                  <ul className="list-disc ml-5 text-gray-300 space-y-3 mt-6">


                    {uniqueWeaknesses.map(
                      (weakness, index) => (

                        <li key={index}>

                          {weakness}

                        </li>

                      )
                    )}


                  </ul>


                </CardContent>

              </Card>


            </div>


            {/* Detailed Question Results */}

            <div className="mt-16">


              <h2 className="text-3xl font-bold">

                Detailed Question Results

              </h2>


              <div className="space-y-6 mt-6">


                {results.map(
                  (result, index) => (

                    <Card
                      key={index}
                      className="bg-white/5 border-white/10 text-white"
                    >

                      <CardContent className="p-8">


                        {/* Question */}

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


                        {/* Improvements */}

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


            </div>


          </>

        )}


      </div>

    </main>

  );

}