"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
          <a href="#" className="hover:text-white transition">
            Features
          </a>

          <a href="#" className="hover:text-white transition">
            Dashboard
          </a>

          <a href="#" className="hover:text-white transition">
            Pricing
          </a>
        </div>

        <Button className="bg-blue-600 hover:bg-blue-700">
          Get Started
        </Button>
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
          <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-6 text-lg">
            Start Interview
          </Button>

          <Button
            variant="outline"
            className="px-6 py-6 text-lg border-white/20 bg-transparent"
          >
            Learn More
          </Button>
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
    </main>
  );
}