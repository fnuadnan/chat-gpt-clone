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
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, isBot: false },
    ]);

    try {
      const apiResponse = await apiclient.post(input);
      const botResponse =
        apiResponse.choices[0]?.message.content || "No response";
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, isBot: true },
      ]);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Sorry, there was an error.", isBot: true },
      ]);
    }
  };

  const msgEnd = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (msgEnd.current) {
      msgEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return { messages, handleSend, msgEnd };
};
