import { useState } from "react";
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
    // directly insert the input of the user
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, isBot: false },
    ]);

    // if response show the user, if not show them: sorry
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

  return { messages, handleSend };
};
