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

Evaluate the candidate's answer.

Question:
${question}

Candidate Answer:
${answer}

Return ONLY valid JSON.

Do not use markdown.
Do not use code blocks.
Do not add any text before or after the JSON.

Use exactly this structure:

{
  "score": 0,
  "strengths": [
    "point 1",
    "point 2"
  ],
  "weaknesses": [
    "point 1",
    "point 2"
  ],
  "improvements": [
    "point 1",
    "point 2"
  ]
}

Rules:
- Score must be a number between 0 and 10.
- Keep feedback concise.
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

      response_format: {
        type: "json_object",
      },
    });

    const feedbackText =
      completion.choices[0]?.message?.content;

    if (!feedbackText) {
      throw new Error("No evaluation received from AI.");
    }

    let feedback;

    try {
      feedback = JSON.parse(feedbackText);
    } catch {
      console.error(
        "Invalid AI response:",
        feedbackText
      );

      throw new Error("AI returned invalid JSON.");
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