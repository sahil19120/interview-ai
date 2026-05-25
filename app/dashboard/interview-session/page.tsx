"use client";
import { useRouter } from "next/navigation";

import { Textarea } from "@/components/ui/textarea";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";



export default function InterviewSessionPage() {

  const [questions, setQuestions] = useState<string[]>([]);

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  useEffect(() => {
    const storedQuestions =
      localStorage.getItem("interviewQuestions");

    if (storedQuestions) {
      const parsedQuestions = JSON.parse(storedQuestions);

      const questionsArray = parsedQuestions
        .split("\n")
        .filter((q: string) => q.trim() !== "");

      setQuestions(questionsArray);
    }
  }, []);

  const router = useRouter();

  const [answer, setAnswer] = useState("");

  const [feedback, setFeedback] = useState("");

  const [loading, setLoading] = useState(false);

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const submitAnswer = async () => {
    setLoading(true);

    setTimeout(() => {
      setFeedback(`
Score: 8/10

Strengths:
- Good explanation
- Clear understanding

Weaknesses:
- Could explain more deeply

Tips:
- Add real-world examples
    `);

      setLoading(false);
    }, 1200);
  };

  const endInterview = () => {
    localStorage.setItem(
      "interviewFeedback",
      feedback
    );

    router.push("/dashboard/results");
  };

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
              Question {currentQuestion + 1} of {questions.length}
            </p>

            <h2 className="text-3xl font-semibold mt-6 leading-relaxed">
              {questions[currentQuestion]}
            </h2>



            <div className="mt-8">

              <Textarea
                placeholder="Type your answer here..."
                className="bg-white/5 border-white/10 min-h-[140px]"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />

              <Button
                onClick={submitAnswer}
                className="mt-4 bg-green-600 hover:bg-green-700"
              >
                {loading ? "Evaluating..." : "Submit Answer"}
              </Button>

              {feedback && (
                <Card className="bg-white/5 border-white/10 mt-6">

                  <CardContent className="p-6">

                    <h3 className="text-xl font-semibold mb-4">
                      AI Feedback
                    </h3>

                    <p className="text-gray-300 whitespace-pre-line">
                      {feedback}
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="flex justify-between mt-8">

              <Button
                onClick={endInterview}
                variant="outline"
                className="border-white/10 bg-transparent"
              >
                End Interview
              </Button>

              <Button
                onClick={nextQuestion}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Next Question
              </Button>

            </div>

          </CardContent>
        </Card>
      </div>
    </main>
  );
}