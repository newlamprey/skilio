export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ reply: "Method not allowed" });
  }

  const { message } = req.body;

  // 🌟 SAFE FALLBACK AI (works even without OpenAI)
  const lower = message.toLowerCase();

  let reply = "";

  if (lower.includes("math")) {
    reply = "Math tip: Practice step by step and don’t rush.";
  } 
  else if (lower.includes("study")) {
    reply = "Study tip: Use 25-minute focus sessions (Pomodoro method).";
  } 
  else if (lower.includes("career")) {
    reply = "Career tip: Learn skills, build small projects, and stay consistent.";
  } 
  else if (lower.includes("hello")) {
    reply = "Hello 👋 I am Skilio, your study assistant.";
  } 
  else {
    reply = "I am Skilio AI. Ask me about studying, careers, or school topics.";
  }

  return res.status(200).json({ reply });
}
