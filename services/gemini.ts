import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = (typeof process !== 'undefined' ? process.env.GEMINI_API_KEY : import.meta.env.VITE_GEMINI_API_KEY) || '';
const ai = new GoogleGenerativeAI(apiKey);
export const troubleshootTV = async (issue: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User TV Issue: "${issue}"
      
      You are an expert TV technician for Screen Savers TV Repair in Bengaluru. 
      Analyze the issue and provide:
      1. Possible diagnosis.
      2. Estimated complexity (Low/Medium/High).
      3. A recommendation for service.
      4. A brief reassurance that Screen Savers can fix it with genuine parts.
      
      Keep it professional, empathetic, and concise. Use Markdown formatting.`,
      config: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble analyzing this right now. Please call us at +91 9606960679 for an immediate expert consultation.";
  }
};
