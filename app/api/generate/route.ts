import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { role, experience, techstack } = body;

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const prompt = `
    Generate 10 interview questions for:
    
    Role: ${role}
    Experience: ${experience}
    Tech Stack: ${techstack}

    Give concise technical interview questions.
    `;

    const result = await model.generateContent(prompt);

    const response = result.response.text();

    return Response.json({
      success: true,
      questions: response,
    });

  } catch (error) {
    return Response.json({
      success: false,
      error,
    });
  }
}