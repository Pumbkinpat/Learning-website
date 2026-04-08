import { GoogleGenAI } from "@google/genai";

const getApiKey = () => {
  const key = process.env.GEMINI_API_KEY;
  if (!key || key === "undefined") return "";
  return key;
};

const ai = new GoogleGenAI({ apiKey: getApiKey() });

export async function reviewCode(code: string, task: string) {
  const apiKey = getApiKey();
  if (!apiKey) {
    return {
      score: 0,
      feedback: "Gemini API Key is missing. Please configure it in the application settings.",
      suggestions: ["Ensure GEMINI_API_KEY is set in your environment variables."],
      isPassed: false
    };
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: `You are a Senior Engineer at NAB (National Australia Bank). 
      Review the following Java code for the task: "${task}".
      
      Criteria:
      1. Correctness: Does it solve the task?
      2. NAB Standards: Use of BigDecimal for money, clean code, proper naming, OOP principles.
      3. Efficiency: Big O complexity.
      
      Return a JSON response with:
      - score: (number 0-100)
      - feedback: (Markdown string with pros/cons)
      - suggestions: (List of strings)
      - isPassed: (boolean, true if score >= 80)
      
      Code:
      ${code}`,
      config: {
        responseMimeType: "application/json",
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("Empty response from AI");
    }

    try {
      return JSON.parse(text);
    } catch (parseError) {
      console.error("Failed to parse AI response:", text);
      throw new Error("Invalid JSON response from AI");
    }
  } catch (error: any) {
    console.error("AI Review Error:", error);
    
    let errorMessage = "Could not connect to AI Assistant.";
    if (error?.message?.includes("API_KEY_INVALID") || error?.message?.includes("invalid API key")) {
      errorMessage = "Invalid Gemini API Key. Please check your settings.";
    } else if (error?.message?.includes("quota") || error?.message?.includes("429")) {
      errorMessage = "AI Assistant quota exceeded. Please try again later.";
    }

    return {
      score: 0,
      feedback: errorMessage,
      suggestions: ["Check your internet connection", "Verify your Gemini API key in settings"],
      isPassed: false
    };
  }
}
