 require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');

// Initialize the SDK using my API key from the .env file
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function testAI() {
  try {
    console.log("Asking Gemini...");

    // Send a prompt to the model
    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: 'Say hello to an IT student who just conquered the terminal setup!',
    });

    console.log("\n--- AI Response ---");
    console.log(response.text);

  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

testAI();