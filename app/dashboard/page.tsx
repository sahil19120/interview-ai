import {
    LayoutDashboard,
    Briefcase,
    BarChart3,
    Settings,
} from "lucide-react";


import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {

  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  return (
        <main className="min-h-screen bg-black text-white flex">

            {/* Sidebar */}
            <aside className="w-72 border-r border-white/10 p-6 hidden md:flex flex-col">

                <h1 className="text-3xl font-bold mb-10">
                    Interview<span className="text-blue-500">AI</span>
                </h1>

                <div className="flex flex-col gap-4">

                    <Button
                        variant="ghost"
                        className="justify-start gap-3 text-white hover:bg-white/10"
                    >
                        <LayoutDashboard size={18} />
                        Dashboard
                    </Button>

                    <Button
                        variant="ghost"
                        className="justify-start gap-3 text-white hover:bg-white/10"
                    >
                        <Briefcase size={18} />
                        Interviews
                    </Button>

                    <Button
                        variant="ghost"
                        className="justify-start gap-3 text-white hover:bg-white/10"
                    >
                        <BarChart3 size={18} />
                        Analytics
                    </Button>

                    <Button
                        variant="ghost"
                        className="justify-start gap-3 text-white hover:bg-white/10"
                    >
                        <Settings size={18} />
                        Settings
                    </Button>

                </div>
            </aside>

            {/* Main Content */}
            <section className="flex-1 p-8">

                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-4xl font-bold">
                            Welcome Back 👋
                        </h2>

                        <p className="text-gray-400 mt-2">
                            Ready for your next mock interview?
                        </p>
                    </div>

                    <Button className="bg-blue-600 hover:bg-blue-700">
                        Start Interview
                    </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

                    <Card className="bg-white/5 border-white/10 text-white">
                        <CardContent className="p-6">
                            <h3 className="text-gray-400">
                                Interviews Taken
                            </h3>

                            <p className="text-4xl font-bold mt-3">
                                24
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/5 border-white/10 text-white">
                        <CardContent className="p-6">
                            <h3 className="text-gray-400">
                                Average Score
                            </h3>

                            <p className="text-4xl font-bold mt-3">
                                87%
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/5 border-white/10 text-white">
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
            </section>
        </main>
    );
}