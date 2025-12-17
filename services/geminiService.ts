import { GoogleGenAI } from "@google/genai";
import { MY_PROFILE, PROJECTS, SKILLS } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for ${MY_PROFILE.name}'s portfolio website. 
Your goal is to answer questions about ${MY_PROFILE.name}'s skills, projects, and experience based on the data provided below.
Be professional, concise, and helpful. Adopt a tone that is friendly and tech-savvy.

If asked about contact info, provide the email: ${MY_PROFILE.email}.
If asked about hiring, mention that ${MY_PROFILE.name} is open to opportunities.

Here is the context about ${MY_PROFILE.name}:
Bio: ${MY_PROFILE.bio}
Skills: ${SKILLS.join(', ')}
Location: ${MY_PROFILE.location}
Company: ${MY_PROFILE.company}

Projects:
${PROJECTS.map(p => `- ${p.name}: ${p.description} (Tech: ${p.language}, Stars: ${p.stars})`).join('\n')}

Do not make up facts not present in this data. If you don't know, suggest they contact ${MY_PROFILE.name} directly via email.
`;

export const generateChatResponse = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, I can't connect to my brain right now (API Key missing). Please check back later!";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I'm thinking... but I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered a temporary glitch in the matrix. Please try asking again.";
  }
};