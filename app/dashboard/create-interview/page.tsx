"use client";

import Link from "next/link";
import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const jobRoles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "React Developer",
  "Node.js Developer",
  "Software Engineer",
  "Data Analyst",
  "Machine Learning Engineer",
  "DevOps Engineer",
];

const techOptions = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Python",
  "Java",
  "C++",
  "Redux",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "REST APIs",
  "AWS",
  "Docker",
];

export default function CreateInterviewPage() {
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");
  const [techstack, setTechstack] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState("");

  const toggleTech = (tech: string) => {
    setTechstack((previousTechstack) => {
      if (previousTechstack.includes(tech)) {
        return previousTechstack.filter(
          (selectedTech) => selectedTech !== tech
        );
      }

      return [...previousTechstack, tech];
    });
  };

  const generateQuestions = async () => {
    if (!role || !experience || techstack.length === 0) {
      alert("Please select a job role, experience level, and tech stack.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/generate", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          role,
          experience,
          techstack: techstack.join(", "),
        }),
      });

      const data = await response.json();

      console.log(data);

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || "Failed to generate interview"
        );
      }

      setQuestions(data.questions);

      localStorage.setItem(
        "interviewQuestions",
        JSON.stringify(data.questions)
      );

    } catch (error) {
      console.error(error);
      alert(
        error instanceof Error
          ? error.message
          : "Failed to generate interview"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold">
          Create Interview
        </h1>

        <p className="text-gray-400 mt-4">
          Generate AI-powered mock interviews for your desired role.
        </p>


        <Card className="bg-white/5 border-white/10 text-white mt-10">

          <CardContent className="p-8">

            <div className="space-y-6">


              {/* Job Role */}

              <div>

                <label className="text-sm text-gray-400">
                  Job Role
                </label>

                <select
                  value={role}
                  onChange={(e) =>
                    setRole(e.target.value)
                  }
                  className="w-full mt-2 bg-black border border-white/10 rounded-xl p-4 outline-none"
                >

                  <option value="">
                    Select Job Role
                  </option>

                  {jobRoles.map((jobRole) => (

                    <option
                      key={jobRole}
                      value={jobRole}
                    >
                      {jobRole}
                    </option>

                  ))}

                </select>

              </div>


              {/* Experience */}

              <div>

                <label className="text-sm text-gray-400">
                  Experience Level
                </label>

                <select
                  value={experience}
                  onChange={(e) =>
                    setExperience(e.target.value)
                  }
                  className="w-full mt-2 bg-black border border-white/10 rounded-xl p-4 outline-none"
                >

                  <option value="">
                    Select Experience
                  </option>

                  <option value="Beginner">
                    Beginner
                  </option>

                  <option value="Intermediate">
                    Intermediate
                  </option>

                  <option value="Advanced">
                    Advanced
                  </option>

                </select>

              </div>


              {/* Tech Stack */}

              <div>

                <label className="text-sm text-gray-400">
                  Select Tech Stack
                </label>


                {/* Selected Technologies */}

                {techstack.length > 0 && (

                  <div className="flex flex-wrap gap-2 mt-3">

                    {techstack.map((tech) => (

                      <button
                        key={tech}
                        type="button"
                        onClick={() =>
                          toggleTech(tech)
                        }
                        className="bg-blue-600/20 border border-blue-500/30 text-blue-300 px-3 py-1 rounded-full text-sm hover:bg-red-500/20 hover:border-red-500/30 transition"
                      >

                        {tech} ×

                      </button>

                    ))}

                  </div>

                )}


                {/* Technology Options */}

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">

                  {techOptions.map((tech) => {

                    const selected =
                      techstack.includes(tech);

                    return (

                      <button
                        key={tech}
                        type="button"
                        onClick={() =>
                          toggleTech(tech)
                        }
                        className={`p-3 rounded-xl border text-sm transition
                          ${
                            selected
                              ? "bg-blue-600 border-blue-500 text-white"
                              : "bg-black border-white/10 text-gray-300 hover:border-blue-500/50"
                          }
                        `}
                      >

                        {tech}

                      </button>

                    );

                  })}

                </div>

              </div>


              {/* Generate Button */}

              <Button
                onClick={generateQuestions}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-lg"
              >

                {loading ? (

                  <div className="flex items-center gap-3">

                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />

                    Generating...

                  </div>

                ) : (

                  "Generate Interview"

                )}

              </Button>


              {/* Start Interview */}

              <Link href="/dashboard/interview-session">

                <Button
                  variant="outline"
                  disabled={!questions}
                  className="w-full mt-4 border-white/10 bg-transparent"
                >

                  Start Mock Interview

                </Button>

              </Link>


              {/* Generated Questions */}

              {questions && (

                <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6">

                  <h2 className="text-2xl font-bold mb-4">

                    Generated Questions

                  </h2>

                  <p className="text-gray-300 whitespace-pre-wrap">

                    {questions}

                  </p>

                </div>

              )}

            </div>

          </CardContent>

        </Card>

      </div>

    </main>
  );
}