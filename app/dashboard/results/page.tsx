import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-5xl font-bold">
          Interview Results
        </h1>

        <p className="text-gray-400 mt-4">
          AI-powered analysis of your interview performance.
        </p>

        {/* Score Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          
          <Card className="bg-white/5 border-white/10 text-white">
            <CardContent className="p-8">
              <h2 className="text-gray-400">
                Overall Score
              </h2>

              <p className="text-5xl font-bold mt-4 text-blue-500">
                88%
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 text-white">
            <CardContent className="p-8">
              <h2 className="text-gray-400">
                Communication
              </h2>

              <p className="text-5xl font-bold mt-4 text-blue-500">
                91%
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 text-white">
            <CardContent className="p-8">
              <h2 className="text-gray-400">
                Technical Skills
              </h2>

              <p className="text-5xl font-bold mt-4 text-blue-500">
                84%
              </p>
            </CardContent>
          </Card>

        </div>

        {/* Feedback */}
        <Card className="bg-white/5 border-white/10 text-white mt-10">
          
          <CardContent className="p-8">
            
            <h2 className="text-3xl font-bold mb-8">
              AI Feedback
            </h2>

            <div className="space-y-8">
              
              <div>
                <div className="flex justify-between mb-2">
                  <span>Confidence</span>
                  <span>90%</span>
                </div>

                <Progress value={90} />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Problem Solving</span>
                  <span>82%</span>
                </div>

                <Progress value={82} />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Technical Knowledge</span>
                  <span>85%</span>
                </div>

                <Progress value={85} />
              </div>

            </div>

            <div className="mt-10 bg-black/40 border border-white/10 rounded-2xl p-6">
              
              <h3 className="text-2xl font-semibold mb-4">
                Strengths
              </h3>

              <ul className="text-gray-300 space-y-2 list-disc ml-6">
                <li>Strong React fundamentals</li>
                <li>Good communication skills</li>
                <li>Confident problem-solving approach</li>
              </ul>
            </div>

            <div className="mt-8 bg-black/40 border border-white/10 rounded-2xl p-6">
              
              <h3 className="text-2xl font-semibold mb-4">
                Areas to Improve
              </h3>

              <ul className="text-gray-300 space-y-2 list-disc ml-6">
                <li>Improve backend concepts</li>
                <li>Explain answers more concisely</li>
                <li>Practice DSA-related questions</li>
              </ul>
            </div>

          </CardContent>
        </Card>
      </div>
    </main>
  );
}