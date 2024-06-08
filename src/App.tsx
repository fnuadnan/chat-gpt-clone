import { useForm } from "react-hook-form";
import "./App.css";
import addBtn from "./assets/add-30.png";
import saved from "./assets/bookmark.svg";
import gptLogo from "./assets/chatgpt.svg";
import gptImgLogo from "./assets/chatgptLogo.svg";
import home from "./assets/home.svg";
import msgIcon from "./assets/message.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import { FormValues } from "./entities/entities";
import { useChat } from "./hooks/useChat";
import useMsgEnd from "./hooks/useMsgEnd";

function App() {
  const { messages, handleSend } = useChat();
  const msgEndRef = useMsgEnd(messages); // make the page smooth when the page is full : better scrolling
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    handleSend(data.message);
    reset({ message: "" }); // Ensure the input is reset properly
  };

  const handleQuery = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const userMessage = e.currentTarget.value;
    handleSend(userMessage);
  };

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">AdnanGPT</span>
          </div>
          <button
            className="midBtn"
            onClick={() => {
              window.location.reload();
            }}
          >
            <img src={addBtn} alt="new chat" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button
              className="query"
              value={"What is Programming "}
              onClick={handleQuery}
            >
              <img src={msgIcon} alt="Query" />
              What is Programming ?
            </button>
            <button
              className="query"
              value={"How to use an API ?"}
              onClick={handleQuery}
            >
              <img src={msgIcon} alt="Query" />
              How to use an API ?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="Home" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="Saved" className="listItemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="Upgrade" className="listItemsImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>
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
    </div>
  );
}

export default App;
