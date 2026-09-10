import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});


export async function POST(req: Request) {

  try {

    const body = await req.json();


    const {
      role,
      experience,
      techstack,
      questionCount,
    } = body;


    if (
      !role ||
      !experience ||
      !Array.isArray(techstack) ||
      techstack.length === 0 ||
      !questionCount
    ) {

      return Response.json(
        {
          success: false,
          error:
            "Role, experience, tech stack and question count are required.",
        },
        {
          status: 400,
        }
      );

    }


    const count =
      Number(questionCount);


    if (
      !Number.isInteger(count) ||
      count < 1 ||
      count > 20
    ) {

      return Response.json(
        {
          success: false,
          error:
            "Question count must be between 1 and 20.",
        },
        {
          status: 400,
        }
      );

    }


    const prompt = `
You are an expert technical interviewer.

Generate exactly ${count} interview questions.

Interview Details:

Role: ${role}

Experience Level: ${experience}

Tech Stack: ${techstack.join(", ")}


Rules:

- Generate exactly ${count} questions.
- Match the difficulty with the experience level.
- Focus on the provided role and tech stack.
- Include practical and technical questions where appropriate.
- Make each question clear and concise.
- Do not include answers.
- Do not add introductions or explanations.
- Return only the numbered list of questions.

Example format:

1. Question here?

2. Question here?

3. Question here?
`;


    const completion =
      await groq.chat.completions.create({

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],

        model: "openai/gpt-oss-120b",

        temperature: 0.7,

        max_completion_tokens: 1000,

      });


    const questions =
      completion.choices[0]?.message?.content || "";


    if (!questions) {

      throw new Error(
        "No questions generated."
      );

    }


    return Response.json({

      success: true,

      questions,

    });


  } catch (error) {

    console.error(
      "Question generation error:",
      error
    );


    return Response.json(
      {

        success: false,

        error:
          error instanceof Error
            ? error.message
            : "Failed to generate questions",

      },

      {
        status: 500,
      }
    );

  }

}