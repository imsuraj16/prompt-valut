const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({});

async function generateTag(prompt) {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            systemInstruction: `You are a tag extraction AI. 
Read the provided text and return only 3-7 relevant, lowercase, short keyword tags (1-3 words each) related to the main topic. 
Do not include punctuation, numbers, or duplicates.`,
        },
    });
    return (response.text);
}

module.exports = generateTag;