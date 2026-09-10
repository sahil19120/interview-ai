import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { question, answer } = await req.json();

    if (!question || !answer) {
      return Response.json(
        {
          success: false,
          feedback: "Question and answer are required.",
        },
        { status: 400 }
      );
    }

    const prompt = `
You are an expert technical interviewer.

Evaluate the candidate's answer to the interview question.

Question:
${question}

Candidate Answer:
${answer}

Return a concise evaluation in exactly this format:

Score: X/10

Strengths:
- point 1
- point 2

Weaknesses:
- point 1
- point 2

Improvement Tips:
- point 1
- point 2

Keep the complete response under 150 words.
`;

    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b",

      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],

      temperature: 0.4,
      max_completion_tokens: 350,
    });

    const feedback =
      completion.choices[0]?.message?.content;

    if (!feedback) {
      throw new Error("No evaluation received from AI.");
    }

    return Response.json({
      success: true,
      feedback,
    });

  } catch (error) {
    console.error("Groq evaluation error:", error);

    return Response.json(
      {
        success: false,
        feedback:
          error instanceof Error
            ? error.message
            : "Failed to evaluate the answer.",
      },
      { status: 500 }
    );
  }
}