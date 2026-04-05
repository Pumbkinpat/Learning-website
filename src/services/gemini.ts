import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function reviewCode(code: string, task: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a Senior Engineer at NAB (National Australia Bank). 
      Review the following Java code for the task: "${task}".
      
      Criteria:
      1. Correctness: Does it solve the task?
      2. NAB Standards: Use of BigDecimal for money, clean code, proper naming, OOP principles.
      3. Efficiency: Big O complexity.
      
      Return a JSON response with:
      - score: (0-100)
      - feedback: (Markdown string with pros/cons)
      - suggestions: (List of improvements)
      - isPassed: (boolean, true if score >= 80)
      
      Code:
      ${code}`,
      config: {
        responseMimeType: "application/json",
      }
    });

    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("AI Review Error:", error);
    return {
      score: 0,
      feedback: "Could not connect to AI Assistant. Please check your API key.",
      suggestions: [],
      isPassed: false
    };
  }
}
