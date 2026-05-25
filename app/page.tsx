"use client";
import Link from "next/link";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full"></div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-xl sticky top-0 z-50">
        <h1 className="text-2xl font-bold">
          Interview<span className="text-blue-500">AI</span>
        </h1>

        <div className="hidden md:flex items-center gap-8 text-gray-300">

          <Link
            href="/dashboard"
            className="hover:text-white transition"
          >
            Dashboard
          </Link>

          <Link
            href="/dashboard/create-interview"
            className="hover:text-white transition"
          >
            Create Interview
          </Link>

          <Link
            href="/dashboard/analytics"
            className="hover:text-white transition"
          >
            Analytics
          </Link>

        </div>

        <div className="flex items-center gap-4">
          <SignInButton mode="modal">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Sign In
            </Button>
          </SignInButton>

          <UserButton />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">

        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full top-20"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold max-w-4xl leading-tight relative z-10"
        >
          Ace Your Interviews with{" "}
          <span className="text-blue-500">AI Power</span>
        </motion.h1>

        <p className="text-gray-400 mt-6 max-w-2xl text-lg relative z-10">
          Practice mock interviews, receive AI feedback, and improve your
          confidence for real-world job interviews.
        </p>

        <div className="flex gap-4 mt-10 relative z-10">
          <Link href="/dashboard">
            <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-6 text-lg">
              Start Interview
            </Button>
          </Link>

          <Link href="/dashboard/analytics">
            <Button
              variant="outline"
              className="px-6 py-6 text-lg border-white/20 bg-transparent"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      <section className="px-8 pb-24">
        <p className="text-center text-gray-500 mb-8 uppercase tracking-widest text-sm">
          Trusted by aspiring developers worldwide
        </p>

        <div className="flex flex-wrap items-center justify-center gap-10 text-gray-400 text-xl font-semibold">
          <span>Google</span>
          <span>Amazon</span>
          <span>Microsoft</span>
          <span>Netflix</span>
          <span>Meta</span>
        </div>
      </section>

      {/* Cards Section */}
      <section className="px-8 pb-24">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            Powerful AI Features
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Everything you need to crack your next interview.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition duration-300">

            <h3 className="text-2xl font-semibold mb-4">
              AI Interview Questions
            </h3>

            <p className="text-gray-400">
              Generate smart technical and HR interview questions instantly.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition duration-300">

            <h3 className="text-2xl font-semibold mb-4">
              Instant Feedback
            </h3>

            <p className="text-gray-400">
              Get AI-powered performance analysis and improvement tips.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition duration-300">

            <h3 className="text-2xl font-semibold mb-4">
              Analytics Dashboard
            </h3>

            <p className="text-gray-400">
              Track interview scores and monitor your progress visually.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition duration-300">

            <h3 className="text-2xl font-semibold mb-4">
              Real Interview Experience
            </h3>

            <p className="text-gray-400">
              Simulate actual technical interview sessions with timed questions.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition duration-300">

            <h3 className="text-2xl font-semibold mb-4">
              Secure Authentication
            </h3>

            <p className="text-gray-400">
              Safe login and personalized interview dashboard using Clerk Auth.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition duration-300">

            <h3 className="text-2xl font-semibold mb-4">
              Modern SaaS UI
            </h3>

            <p className="text-gray-400">
              Premium responsive design with animations and glassmorphism.
            </p>
          </div>

        </div>
      </section>

      <section className="px-8 pb-24">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            What Users Say
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Trusted by aspiring developers and students worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

            <p className="text-gray-300 leading-relaxed">
              “InterviewAI helped me improve my confidence before placements. The mock interviews felt real.”
            </p>

            <div className="mt-6">
              <h3 className="font-semibold text-lg">
                Rahul Sharma
              </h3>

              <p className="text-gray-500 text-sm">
                Frontend Developer
              </p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

            <p className="text-gray-300 leading-relaxed">
              “The analytics dashboard and AI feedback made interview preparation much easier.”
            </p>

            <div className="mt-6">
              <h3 className="font-semibold text-lg">
                Priya Verma
              </h3>

              <p className="text-gray-500 text-sm">
                Software Engineer
              </p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

            <p className="text-gray-300 leading-relaxed">
              “One of the best AI-based interview prep platforms I have used so far.”
            </p>

            <div className="mt-6">
              <h3 className="font-semibold text-lg">
                Arjun Mehta
              </h3>

              <p className="text-gray-500 text-sm">
                MERN Stack Developer
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 pb-20">

        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.2 }}
        >
          <Card className="bg-white/5 border-white/10 text-white backdrop-blur-xl">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-3">
                AI Mock Interviews
              </h2>

              <p className="text-gray-400">
                Practice technical and HR interviews powered by AI.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.2 }}
        >
          <Card className="bg-white/5 border-white/10 text-white backdrop-blur-xl">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-3">
                Instant Feedback
              </h2>

              <p className="text-gray-400">
                Get smart suggestions and performance analysis instantly.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.2 }}
        >
          <Card className="bg-white/5 border-white/10 text-white backdrop-blur-xl">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-3">
                Track Progress
              </h2>

              <p className="text-gray-400">
                Monitor your interview scores and growth over time.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </section>
      {/*stats section */}
      <section className="px-8 pb-24">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
            <h2 className="text-4xl font-bold text-blue-500">
              10K+
            </h2>

            <p className="text-gray-400 mt-2">
              Mock Interviews Completed
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
            <h2 className="text-4xl font-bold text-blue-500">
              95%
            </h2>

            <p className="text-gray-400 mt-2">
              Success Improvement Rate
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
            <h2 className="text-4xl font-bold text-blue-500">
              AI Powered
            </h2>

            <p className="text-gray-400 mt-2">
              Smart Personalized Feedback
            </p>
          </div>

        </div>
      </section>

      <div className="mt-12">

        <h2 className="text-2xl font-bold mb-6">
          Recent Interviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Card className="bg-white/5 border-white/10 text-white">
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

          <Card className="bg-white/5 border-white/10 text-white">
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

      <section className="px-8 pb-24">

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center">

          <h2 className="text-5xl font-bold">
            Ready to Crack Your Next Interview?
          </h2>

          <p className="text-white/80 mt-6 text-lg max-w-2xl mx-auto">
            Practice with AI-powered mock interviews and improve your confidence before real placements.
          </p>

          <div className="mt-10">

            <Link href="/dashboard">
              <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg">
                Get Started Now
              </Button>
            </Link>

          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 px-8 text-center text-gray-500">

        <p>
          © 2026 InterviewAI. Built with Next.js, Clerk, Gemini AI & Tailwind CSS.
        </p>

      </footer>
    </main>
  );
}