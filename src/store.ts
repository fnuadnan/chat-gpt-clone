import { create } from "zustand";
import { Message } from "./entities/entities";

interface IStore {
  // messages state
  messages: Message[];
  setMessages: (messages: Message[]) => void;
  addMessage: (message: Message) => void;

  // prompts state
  prompts: string[];
  setPrompts: (prompts: string[]) => void;
  addPrompt: (prompt: string) => void;
}

const useStore = create<IStore>((set) => ({
  // messages state
  messages: [
    {
      text: "Hi, I am AdnanGPT",
      isBot: true,
    },
  ],
  setMessages: (messages: Message[]) => set({ messages }),
  addMessage: (message: Message) =>
    set((store) => ({ messages: [...store.messages, message] })),

  // prompts state
  prompts: ["What is Programming?", "How to use an API?"],
  setPrompts: (prompts: string[]) => set({ prompts }),
  addPrompt: (prompt: string) =>
    set((store) => ({ prompts: [prompt, ...store.prompts] })),
}));

export default useStore;
