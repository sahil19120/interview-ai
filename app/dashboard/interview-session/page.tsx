"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const questions = [
  "Tell me about yourself.",
  "What is React?",
  "Explain useEffect hook.",
  "Difference between SQL and NoSQL?",
  "Why should we hire you?",
];

export default function InterviewSessionPage() {

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
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

            <textarea
              placeholder="Type your answer here..."
              className="w-full h-40 mt-10 bg-black border border-white/10 rounded-2xl p-4 outline-none resize-none"
            />

            <div className="flex justify-between mt-8">
              
              <Button
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