import { useEffect, useRef, useState } from "react";
import { Message } from "../entities/entities";
import { sendMsgToOpenAI } from "../openai";

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi, I am AdnanGPT",
      isBot: true,
    },
  ]);

  const handleSend = async (input: string) => {
    const userMessage = input;
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: userMessage, isBot: false },
    ]);

    const botResponse = await sendMsgToOpenAI(userMessage);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: botResponse ?? "Sorry, I didn't get that.", isBot: true },
    ]);
  };

  const msgEnd = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (msgEnd.current) {
      msgEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return { messages, handleSend, msgEnd };
};
