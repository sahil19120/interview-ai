import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { role, experience, techstack } = body;

    const prompt = `
Generate 10 interview questions for:

Role: ${role}
Experience: ${experience}
Tech Stack: ${techstack}

Return concise interview questions.
`;

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });

    const questions =
      completion.choices[0]?.message?.content || "";

    return Response.json({
      success: true,
      questions,
    });

  } catch (error) {
    console.log(error);

    return Response.json({
      success: false,
      error: "Failed to generate questions",
    });
  }
}