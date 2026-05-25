import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
    return (
        <PageWrapper>
            <div className="flex items-center justify-between">

                <div>
                    <h2 className="text-4xl font-bold">
                        Welcome Back 👋
                    </h2>

                    <p className="text-gray-400 mt-2">
                        Ready for your next mock interview?
                    </p>
                </div>

                <Link href="/dashboard/interview-session">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                        Start Interview
                    </Button>
                </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

                <Card className="bg-white/5 border-white/10 text-white card-hover">
                    <CardContent className="p-6">

                        <h3 className="text-gray-400">
                            Interviews Taken
                        </h3>

                        <p className="text-4xl font-bold mt-3">
                            24
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 text-white card-hover">
                    <CardContent className="p-6">

                        <h3 className="text-gray-400">
                            Average Score
                        </h3>

                        <p className="text-4xl font-bold mt-3">
                            87%
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 text-white card-hover">
                    <CardContent className="p-6">

                        <h3 className="text-gray-400">
                            Confidence Level
                        </h3>

                        <p className="text-4xl font-bold mt-3">
                            High
                        </p>
                    </CardContent>
                </Card>

            </div>

            {/* Recent Interviews */}
            <div className="mt-12">

                <h2 className="text-2xl font-bold mb-6">
                    Recent Interviews
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <Card className="bg-white/5 border-white/10 text-white card-hover">
                        <CardContent className="p-6">

                            <div className="flex items-center justify-between">

                                <div>
                                    <h3 className="text-xl font-semibold">
                                        Frontend Developer
                                    </h3>

                                    <p className="text-gray-400 mt-2">
                                        Completed 2 days ago
                                    </p>
                                </div>

                                <div className="text-blue-500 text-2xl font-bold">
                                    92%
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/5 border-white/10 text-white card-hover">
                        <CardContent className="p-6">

                            <div className="flex items-center justify-between">

                                <div>
                                    <h3 className="text-xl font-semibold">
                                        Backend Engineer
                                    </h3>

                                    <p className="text-gray-400 mt-2">
                                        Completed 5 days ago
                                    </p>
                                </div>

                                <div className="text-blue-500 text-2xl font-bold">
                                    85%
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-12">

                <h2 className="text-2xl font-bold mb-6">
                    Quick Actions
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <Link href="/dashboard/create-interview">
                        <Card className="bg-white/5 border-white/10 text-white hover:border-blue-500 transition cursor-pointer card-hover">

                            <CardContent className="p-8">

                                <h3 className="text-2xl font-semibold">
                                    Create Interview
                                </h3>

                                <p className="text-gray-400 mt-4">
                                    Generate AI-powered interview questions instantly.
                                </p>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link href="/dashboard/analytics">
                        <Card className="bg-white/5 border-white/10 text-white hover:border-blue-500 transition cursor-pointer card-hover">

                            <CardContent className="p-8">

                                <h3 className="text-2xl font-semibold">
                                    View Analytics
                                </h3>

                                <p className="text-gray-400 mt-4">
                                    Track interview performance and growth.
                                </p>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link href="/dashboard/results">
                        <Card className="bg-white/5 border-white/10 text-white hover:border-blue-500 transition cursor-pointer card-hover">

                            <CardContent className="p-8">

                                <h3 className="text-2xl font-semibold">
                                    AI Feedback
                                </h3>

                                <p className="text-gray-400 mt-4">
                                    Analyze strengths and weaknesses using AI.
                                </p>
                            </CardContent>
                        </Card>
                    </Link>

                </div>
            </div>

            {/* Activity Feed */}
            <div className="mt-12">

                <h2 className="text-2xl font-bold mb-6">
                    Recent Activity
                </h2>

                <div className="space-y-4">

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center justify-between">

                        <div>
                            <h3 className="font-semibold">
                                Completed Frontend Interview
                            </h3>

                            <p className="text-gray-400 text-sm mt-1">
                                Score improved by 12%
                            </p>
                        </div>

                        <span className="text-sm text-gray-500">
                            2h ago
                        </span>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center justify-between">

                        <div>
                            <h3 className="font-semibold">
                                AI Feedback Generated
                            </h3>

                            <p className="text-gray-400 text-sm mt-1">
                                Backend interview analysis completed
                            </p>
                        </div>

                        <span className="text-sm text-gray-500">
                            Yesterday
                        </span>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center justify-between">

                        <div>
                            <h3 className="font-semibold">
                                New Mock Interview Created
                            </h3>

                            <p className="text-gray-400 text-sm mt-1">
                                React + Node.js interview generated
                            </p>
                        </div>

                        <span className="text-sm text-gray-500">
                            3d ago
                        </span>
                    </div>

                </div>
            </div>
        </PageWrapper>
    );
}