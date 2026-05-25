import Link from "next/link";
import { Bell } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

import {
    LayoutDashboard,
    Briefcase,
    BarChart3,
    ClipboardCheck,
} from "lucide-react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen bg-black text-white flex">

            {/* Sidebar */}
            <aside className="w-72 border-r border-white/10 p-6 hidden md:flex flex-col bg-white/5 backdrop-blur-2xl">

                <Link href="/">
                    <h1 className="text-3xl font-bold mb-10 cursor-pointer">
                        Interview<span className="text-blue-500">AI</span>
                    </h1>
                </Link>

                <div className="flex flex-col gap-4">

                    <Link
                        href="/dashboard"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-500/20 hover:text-blue-400 transition"
                    >
                        <LayoutDashboard size={18} />
                        Dashboard
                    </Link>

                    <Link
                        href="/dashboard/create-interview"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-500/20 hover:text-blue-400 transition"
                    >
                        <Briefcase size={18} />
                        Create Interview
                    </Link>

                    <Link
                        href="/dashboard/analytics"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-500/20 hover:text-blue-400 transition"
                    >
                        <BarChart3 size={18} />
                        Analytics
                    </Link>

                    <Link
                        href="/dashboard/results"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-500/20 hover:text-blue-400 transition"
                    >
                        <ClipboardCheck size={18} />
                        Results
                    </Link>

                </div>
            </aside>

            {/* Page Content */}
            <section className="flex-1">

                {/* Top Navbar */}
                <div className="flex items-center justify-between border-b border-white/10 px-8 py-5 bg-black/40 backdrop-blur-xl sticky top-0 z-50">

                    <div>
                        <h2 className="text-2xl font-semibold">
                            AI Interview Platform
                        </h2>

                        <p className="text-sm text-gray-400 mt-1">
                            Practice smarter with AI-powered interviews
                        </p>
                    </div>

                    <div className="flex items-center gap-6">

                        <button className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition">
                            <Bell size={20} />
                        </button>

                        <UserButton />
                    </div>
                </div>

                {/* Page Content */}
                <div className="p-8">
                    {children}
                </div>

            </section>
        </main>
    );
}