"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
} from "@/components/ui/card";


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


export default function InterviewSessionPage() {

  const router = useRouter();

  const [questions, setQuestions] = useState<string[]>([]);

  const [questionsLoaded, setQuestionsLoaded] =
    useState(false);

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [answer, setAnswer] = useState("");

  const [feedback, setFeedback] =
    useState<Feedback | null>(null);

  const [loading, setLoading] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const [results, setResults] =
    useState<InterviewResult[]>([]);


  useEffect(() => {

    const storedQuestions =
      localStorage.getItem("interviewQuestions");

    if (storedQuestions) {

      try {

        const parsedQuestions =
          JSON.parse(storedQuestions);

        const questionsArray =
          parsedQuestions
            .split("\n")
            .filter(
              (q: string) =>
                q.trim() !== ""
            );

        setQuestions(questionsArray);

      } catch (error) {

        console.error(
          "Failed to load interview questions:",
          error
        );

      }

    }

    setQuestionsLoaded(true);

  }, []);


  const endInterview = () => {

    const confirmed = window.confirm(
      "Are you sure you want to end the interview early? Your completed answers will be saved."
    );

    if (!confirmed) {
      return;
    }

    finishInterview();

  };

  const finishInterview = () => {

    localStorage.setItem(
      "interviewResults",
      JSON.stringify(results)
    );

    router.push("/dashboard/results");

  };


  const nextQuestion = () => {

    if (
      currentQuestion <
      questions.length - 1
    ) {

      setCurrentQuestion(
        currentQuestion + 1
      );

      setAnswer("");

      setFeedback(null);

      setSubmitted(false);

    } else {

      endInterview();

    }

  };


  const submitAnswer = async () => {

    if (loading || submitted) {
      return;
    }

    if (!answer.trim()) {
      return;
    }

    try {

      setLoading(true);

      setFeedback(null);


      const response =
        await fetch("/api/evaluate", {

          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({

            question:
              questions[currentQuestion],

            answer: answer,

          }),

        });


      const data =
        await response.json();


      if (
        !response.ok ||
        !data.success
      ) {

        throw new Error(
          data.feedback ||
          "Evaluation failed"
        );

      }


      setFeedback(
        data.feedback
      );


      const newResult:
        InterviewResult = {

        question:
          questions[currentQuestion],

        answer:
          answer,

        feedback:
          data.feedback,

      };


      setResults((previousResults) => {

        const alreadySubmitted =
          previousResults.some(
            (result) =>
              result.question ===
              questions[currentQuestion]
          );

        if (alreadySubmitted) {
          return previousResults;
        }

        return [
          ...previousResults,
          newResult,
        ];

      });


      setSubmitted(true);


    } catch (error) {

      console.error(
        "Evaluation error:",
        error
      );

    } finally {

      setLoading(false);

    }

  };


  const progress =
    questions.length > 0
      ? (
        ((currentQuestion + 1) /
          questions.length) *
        100
      )
      : 0;


  const MAX_CHARACTERS = 2000;

  /*
    Loading Questions
  */

  if (!questionsLoaded) {

    return (

      <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">

        <div className="text-center">

          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />

          <p className="text-gray-400 mt-4">

            Loading interview...

          </p>

        </div>

      </main>

    );

  }


  /*
    No Questions Found
  */

  if (questions.length === 0) {

    return (

      <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">

        <Card className="bg-white/5 border-white/10 text-white max-w-lg w-full">

          <CardContent className="p-10 text-center">

            <h1 className="text-3xl font-bold">

              No Interview Questions Found

            </h1>


            <p className="text-gray-400 mt-4">

              Generate an interview first to
              start your mock interview session.

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

      </main>

    );

  }


  return (

    <main className="min-h-screen bg-black text-white p-8">

      <div className="max-w-4xl mx-auto">


        <h1 className="text-5xl font-bold">

          AI Interview Session

        </h1>


        <p className="text-gray-400 mt-4">

          Answer the questions like a real interview.

        </p>


        <Card className="bg-white/5 border-white/10 text-white mt-12">

          <CardContent className="p-10">


            <p className="text-sm text-gray-400">

              Question {currentQuestion + 1} of{" "}
              {questions.length}

            </p>


            <div className="mt-3">

              <div className="flex justify-between text-sm text-gray-400 mb-2">

                <span>
                  Interview Progress
                </span>

                <span>
                  {Math.round(progress)}%
                </span>

              </div>


              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">

                <div
                  className="h-full bg-blue-600 transition-all duration-500"
                  style={{
                    width:
                      `${progress}%`,
                  }}
                />

              </div>

            </div>


            <h2 className="text-3xl font-semibold mt-6 leading-relaxed">

              {
                questions[
                currentQuestion
                ]
              }

            </h2>


            <div className="mt-8">


              <Textarea
                placeholder="Type your answer here..."
                className="bg-white/5 border-white/10 min-h-[140px]"
                value={answer}
                maxLength={MAX_CHARACTERS}
                onChange={(e) =>
                  setAnswer(e.target.value)
                }
              />

              <div className="flex justify-end mt-2">
                <p
                  className={`text-sm ${answer.length >= MAX_CHARACTERS
                    ? "text-red-400"
                    : "text-gray-400"
                    }`}
                >
                  {answer.length} / {MAX_CHARACTERS} characters
                </p>
              </div>


              <Button

                onClick={
                  submitAnswer
                }

                disabled={
                  loading ||
                  submitted
                }

                className="mt-4 bg-green-600 hover:bg-green-700"

              >

                {loading
                  ? "Evaluating..."
                  : submitted
                    ? "Answer Submitted"
                    : "Submit Answer"}

              </Button>


              {feedback && (

                <Card className="bg-white/5 border-white/10 mt-6">

                  <CardContent className="p-6">


                    <div className="flex items-center justify-between mb-6">

                      <h3 className="text-xl font-semibold">

                        AI Feedback

                      </h3>


                      <div className="text-2xl font-bold text-green-400">

                        {feedback.score}/10

                      </div>

                    </div>


                    <div className="space-y-6">


                      <div>

                        <h4 className="font-semibold text-green-400 mb-2">

                          Strengths

                        </h4>


                        <ul className="list-disc ml-5 text-gray-300 space-y-1">

                          {feedback.strengths.map(
                            (
                              strength,
                              index
                            ) => (

                              <li
                                key={index}
                              >

                                {strength}

                              </li>

                            )
                          )}

                        </ul>

                      </div>


                      <div>

                        <h4 className="font-semibold text-red-400 mb-2">

                          Weaknesses

                        </h4>


                        <ul className="list-disc ml-5 text-gray-300 space-y-1">

                          {feedback.weaknesses.map(
                            (
                              weakness,
                              index
                            ) => (

                              <li
                                key={index}
                              >

                                {weakness}

                              </li>

                            )
                          )}

                        </ul>

                      </div>


                      <div>

                        <h4 className="font-semibold text-blue-400 mb-2">

                          Improvement Tips

                        </h4>


                        <ul className="list-disc ml-5 text-gray-300 space-y-1">

                          {feedback.improvements.map(
                            (
                              improvement,
                              index
                            ) => (

                              <li
                                key={index}
                              >

                                {
                                  improvement
                                }

                              </li>

                            )
                          )}

                        </ul>

                      </div>


                    </div>


                  </CardContent>

                </Card>

              )}


            </div>


            <div className="flex justify-between mt-8">


              <Button

                variant="outline"

                onClick={
                  endInterview
                }

                className="border-white/10 bg-transparent"

              >

                End Interview

              </Button>


              {currentQuestion ===
                questions.length - 1 ? (

                <Button
                  onClick={finishInterview}
                  disabled={!submitted}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Finish Interview
                </Button>

              ) : (

                <Button

                  onClick={
                    nextQuestion
                  }

                  disabled={
                    !submitted
                  }

                  className="bg-blue-600 hover:bg-blue-700"

                >

                  Next Question

                </Button>

              )}


            </div>


          </CardContent>

        </Card>


      </div>

    </main>

  );

}