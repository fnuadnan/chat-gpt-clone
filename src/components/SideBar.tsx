import "../App.css";
import addBtn from "../assets/add-30.png";
import saved from "../assets/bookmark.svg";
import gptLogo from "../assets/chatgpt.svg";
import home from "../assets/home.svg";
import msgIcon from "../assets/message.svg";
import rocket from "../assets/rocket.svg";
import { useChat } from "../hooks/useChat";
import useStore from "../store";

const SideBar = () => {
  const { prompts } = useStore((state) => ({ prompts: state.prompts })); // prompts state

  // This function is used to handle the chat
  const { handleSend } = useChat();
  // This function is used to handle the query when the user clicks on the prompt
  const handleQuery = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const userMessage = e.currentTarget.value;
    handleSend(userMessage);
  };

  return (
    <div className="sideBar">
      <div className="upperSide">
        <div className="upperSideTop"> <img src={gptLogo} alt="Logo" className="logo" /> <span className="brand">AdnanGPT</span> </div>
        <button className="midBtn" onClick={() => { window.location.reload(); }} > <img src={addBtn} alt="new chat" className="addBtn" /> New Chat </button>

        <div className="upperSideBottom">
          {prompts.map((prompt, index) => (
            <button key={index} className="query" value={prompt} onClick={handleQuery} >
              <img src={msgIcon} alt="Query" />
              {prompt.length > 22 ? prompt.slice(0, 22) + "..." : prompt}
            </button>
          ))}
        </div>
      </div>

      <div className="lowerSide">
        <div className="listItems"> <img src={home} alt="Home" className="listItemsImg" /> Home </div>
        <div className="listItems"> <img src={saved} alt="Saved" className="listItemsImg" /> Saved </div>
        <div className="listItems"> <img src={rocket} alt="Upgrade" className="listItemsImg" /> Upgrade to Pro </div>
      </div>
    </div>
  );
};

export default SideBar;
