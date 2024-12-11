import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
  try {
    const { projectDetails } = await req.json(); // Parse incoming data

    // Initialize Google Generative AI client
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

    // Specify the model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Construct a prompt based on the project details
    const prompt = `
      Analyze the following project and provide a brief from scratch,and if its a team work , the task also each member according to their skills:
      1. A roadmap with milestones.
      2. Estimated time to complete.
      3. Recommendations for improvement and additional tool if needed .

      Project Details:
      ${JSON.stringify(projectDetails, null, 2)}
    `;

    // Send prompt to the model
    const result = await model.generateContent(prompt);

    // Respond with the analysis result
    return new Response(JSON.stringify({ analysis: result.response.text() }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error analyzing project:", error.message);
    return new Response(
      JSON.stringify({ error: "Failed to analyze project." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
