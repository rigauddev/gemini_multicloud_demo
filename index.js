const { default: fetch } = require("node-fetch");

module.exports = async function (context, req) {
  const prompt = req.body?.prompt || "";
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    context.res = { status: 500, body: "API key não configurada." };
    return;
  }

  try {
    const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + apiKey, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    const data = await res.json();
    const content = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sem resposta";

    context.res = {
      status: 200,
      body: { content }
    };
  } catch (err) {
    context.res = {
      status: 500,
      body: "Erro ao consultar Gemini API."
    };
  }
};