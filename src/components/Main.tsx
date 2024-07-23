import { useForm } from "react-hook-form";
import "../App.css";
import gptImgLogo from "../assets/chatgptLogo.svg";
import sendBtn from "../assets/send.svg";
import userIcon from "../assets/user-icon.png";
import { FormValues } from "../entities/entities";
import { useChat } from "../hooks/useChat";
import useMsgEnd from "../hooks/useMsgEnd";
import useStore from "../store";

const Main = () => {
  // get the messages and addPrompt state from the store
  const { messages, addPrompt } = useStore((state) => ({
    addPrompt: state.addPrompt,
    messages: state.messages,
  }));

  // This function is used to handle the form
  const { register, handleSubmit, reset } = useForm<FormValues>();

  // This function is used to handle the chat
  const { handleSend } = useChat();

  // This function is used to handle the form submission
  const onSubmit = (data: FormValues) => {
    handleSend(data.message); // Send the message to the bot
    addPrompt(data.message); // Add the message to the prompts
    reset({ message: "" }); // Ensure the input is reset properly
  };

  const msgEndRef = useMsgEnd(messages); // make the page smooth when the page is full : better scrolling

  return (
    <div className="main">
      <div className="chats">
        {messages.map((message, index) => (
          <div key={index} className={message.isBot ? "chat bot" : "chat"}>
            <img
              className="chatimg"
              src={message.isBot ? gptImgLogo : userIcon}
              alt=""
            />
            <p className="txt">{message.text}</p>
          </div>
        ))}
        <div ref={msgEndRef} />
      </div>
      <div className="chatFooter">
        <div className="inp">
          <form className="inp" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Send a message"
              autoComplete="off"
              {...register("message")}
            />
            <button type="submit" className="send">
              <img src={sendBtn} alt="Send" />
            </button>
          </form>
        </div>
        <p>
          AdnanGPT may produce inaccurate information about people, places, or
          facts. AdnanGPT August 20 Version
        </p>
      </div>
    </div>
  );
};

export default Main;
