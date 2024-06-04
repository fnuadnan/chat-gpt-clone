import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function sendMsgToOpenAI(message: string) {
  const res = await openai.chat.completions.create({
    messages: [{ role: "user", content: message }],
    model: "gpt-3.5-turbo",
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return res.choices[0].message.content;
}

// const chatCompletion = await openai.chat.completions.create({
//   messages: [{ role: "user", content: "Say this is a test" }],
//   model: "gpt-3.5-turbo",
// });
