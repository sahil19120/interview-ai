import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CreateInterviewPage() {
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
                  className="w-full mt-2 bg-black border border-white/10 rounded-xl p-4 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">
                  Experience Level
                </label>

                <select className="w-full mt-2 bg-black border border-white/10 rounded-xl p-4 outline-none">
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
                  className="w-full mt-2 bg-black border border-white/10 rounded-xl p-4 outline-none"
                />
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-lg">
                Generate Interview
              </Button>

            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}