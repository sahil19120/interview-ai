import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { question, answer } = body;

   const prompt = `
Evaluate this interview answer briefly.

Question:
${question}

Answer:
${answer}

Return:
Score: x/10
Strengths:
Weaknesses:
Tips:

Keep response under 120 words.
`;

    const completion =
      await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],

        model: "llama-3.1-8b-instant",
      });

    const feedback =
      completion.choices[0]?.message?.content || "";

    return Response.json({
      success: true,
      feedback,
    });

  } catch (error) {
    console.log(error);

    return Response.json({
      success: false,
      feedback: "Evaluation failed",
    });
  }
}