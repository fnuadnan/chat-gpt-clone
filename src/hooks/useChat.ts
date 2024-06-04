import { useEffect, useRef, useState } from "react";
import { ApiResponse, Message } from "../entities/entities";
import APIClient from "../services/api-client";

const apiclient = new APIClient<ApiResponse>("/completions");

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

    const apiResponse = await apiclient.post(userMessage);
    const botResponse =
      apiResponse.choices[0]?.message.content || "No response";
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
