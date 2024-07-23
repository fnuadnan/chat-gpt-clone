import { ApiResponse } from "../entities/entities";
import APIClient from "../services/api-client";
import useStore from "../store";

const apiclient = new APIClient<ApiResponse>("/completions");

export const useChat = () => {
  // get the messages and addMessage function from the store
  const { addMessage } = useStore((state) => ({
    addMessage: state.addMessage,
  }));

  const handleSend = async (input: string) => {
    // directly insert the input of the user
    addMessage({ text: input, isBot: false });

    // if response show the user, if not show them: sorry
    try {
      const apiResponse = await apiclient.post(input);
      const botResponse =
        apiResponse.choices[0]?.message.content || "No response";
      addMessage({ text: botResponse, isBot: true });
    } catch (error) {
      addMessage({ text: "Sorry, there was an error.", isBot: true });
    }
  };

  return { handleSend };
};
