export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ reply: "Method not allowed" });
  }

  const { message } = req.body;
  const text = message.toLowerCase();

  let reply = "";

  // 📘 EXPLAIN MODE
  if (text.includes("explain")) {
    reply = "📘 Sure! I’ll explain it simply:\n\n" +
            "Break the topic into small parts and understand each step. If you want, tell me the exact topic.";
  }

  // 🧪 QUIZ MODE
  else if (text.includes("quiz")) {
    reply = "🧪 Quiz Time!\n\nWhat is 2 + 2?\nA) 3\nB) 4\nC) 5\n\nReply with your answer.";
  }

  // 🧠 FLASHCARDS MODE
  else if (text.includes("flashcard")) {
    reply = "🧠 Flashcard:\n\nQ: What is photosynthesis?\nA: Process where plants make food using sunlight.";
  }

  // 🎯 EXAM MODE
  else if (text.includes("exam")) {
    reply = "🎯 Exam Tip:\nPractice past year questions and focus on weak topics first.";
  }

  // 👋 DEFAULT AI
  else if (text.includes("hello")) {
    reply = "Hello 👋 I’m Skilio, your study assistant.";
  }

  else {
    reply = "I can help you with:\n📘 explain\n🧪 quiz\n🧠 flashcards\n🎯 exam\n\nTry typing one of these!";
  }

  return res.status(200).json({ reply });
}
