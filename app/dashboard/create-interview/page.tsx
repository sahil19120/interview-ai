"use client";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function CreateInterviewPage() {
    const [role, setRole] = useState("");
    const [experience, setExperience] = useState("");
    const [techstack, setTechstack] = useState("");

    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState("");

    const generateQuestions = async () => {
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
                    techstack,
                }),
            });

            const data = await response.json();
            console.log(data);

            setQuestions(data.questions);

        } catch (error) {
            console.log(error);
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

                            <div>
                                <label className="text-sm text-gray-400">
                                    Job Role
                                </label>

                                <input
                                    type="text"
                                    placeholder="Frontend Developer"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    className="w-full mt-2 bg-black border border-white/10 rounded-xl p-4 outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-400">
                                    Experience Level
                                </label>

                                <select
                                    value={experience}
                                    onChange={(e) => setExperience(e.target.value)}
                                    className="w-full mt-2 bg-black border border-white/10 rounded-xl p-4 outline-none"
                                >
                                    <option value="">Select Experience</option>
                                    <option>Beginner</option>
                                    <option>Intermediate</option>
                                    <option>Advanced</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-sm text-gray-400">
                                    Tech Stack
                                </label>

                                <input
                                    type="text"
                                    placeholder="React, Node.js, MongoDB"
                                    value={techstack}
                                    onChange={(e) => setTechstack(e.target.value)}
                                    className="w-full mt-2 bg-black border border-white/10 rounded-xl p-4 outline-none"
                                />
                            </div>

                            <Button
                                onClick={generateQuestions}
                                className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-lg"
                            >
                                {loading ? (
                                    <div className="flex items-center gap-3">

                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>

                                        Generating...
                                    </div>
                                ) : (
                                    "Generate Interview"
                                )}
                            </Button>
                            <Link href="/dashboard/interview-session">
                                <Button
                                    variant="outline"
                                    className="w-full mt-4 border-white/10 bg-transparent"
                                >
                                    Start Mock Interview
                                </Button>
                            </Link>
                            {questions && (
                                <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 whitespace-pre-wrap">
                                    <h2 className="text-2xl font-bold mb-4">
                                        Generated Questions
                                    </h2>

                                    <p className="text-gray-300">
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