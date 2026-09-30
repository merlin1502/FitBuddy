import express from "express";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

app.use(express.json());
app.use(express.static("."));

app.post("/generate-plan", async (req, res) => {
  try {
    const {
      age,
      goal,
      activity,
      days,
      preference
    } = req.body;

    const prompt = `
You are FitBuddy, a friendly fitness planning assistant.

Create a safe, beginner-friendly weekly fitness plan based on:

Age: ${age}
Goal: ${goal}
Activity level: ${activity}
Available days: ${days}
Workout preference: ${preference}

Give:
1. Weekly schedule
2. Suitable exercises
3. Approximate workout duration
4. Rest/recovery suggestions
5. General healthy eating suggestions

Do not recommend extreme dieting, starvation, supplements, unsafe exercises,
or unrealistic body transformation goals.

Format the answer with clear headings and bullet points.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt
    });

    res.json({
      success: true,
      plan: response.text
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Unable to generate the plan. Please try again."
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`FitBuddy running on port ${PORT}`);
});
});
