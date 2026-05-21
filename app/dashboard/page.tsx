import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  LayoutDashboard,
  Briefcase,
  BarChart3,
  Settings,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white flex">
      
      {/* Sidebar */}
      <aside className="w-72 border-r border-white/10 p-6 hidden md:flex flex-col bg-white/5 backdrop-blur-2xl">
        
        <h1 className="text-3xl font-bold mb-10">
          Interview<span className="text-blue-500">AI</span>
        </h1>

        <div className="flex flex-col gap-4">
          
          <Link href="/dashboard">
            <Button
              variant="ghost"
              className="justify-start gap-3 text-white hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 w-full"
            >
              <LayoutDashboard size={18} />
              Dashboard
            </Button>
          </Link>

          <Link href="/dashboard/create-interview">
            <Button
              variant="ghost"
              className="justify-start gap-3 text-white hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 w-full"
            >
              <Briefcase size={18} />
              Create Interview
            </Button>
          </Link>

          <Link href="/dashboard/analytics">
            <Button
              variant="ghost"
              className="justify-start gap-3 text-white hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 w-full"
            >
              <BarChart3 size={18} />
              Analytics
            </Button>
          </Link>

          <Link href="/dashboard/results">
            <Button
              variant="ghost"
              className="justify-start gap-3 text-white hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 w-full"
            >
              <Settings size={18} />
              Results
            </Button>
          </Link>

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

        {/* Recent Interviews */}
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

      </section>
    </main>
  );
}