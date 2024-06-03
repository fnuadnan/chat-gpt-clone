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

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">AdnanGPT</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="new chat" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="Query" />
              What is Programming ?
            </button>
            <button className="query">
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
          <div className="chat">
            <img className="chatimg" src={userIcon} alt="" />
            <p className="txt">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci assumenda quos dolorem mollitia expedita, hic dolorum ipsa obcaecati, soluta quasi ea accusantium in unde? Eum assumenda architecto beatae consequuntur omnis?
            </p>
          </div>
          <div className="chat bot">
            <img className="chatimg" src={gptImgLogo} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eius, dolores deleniti voluptate aliquid excepturi libero inventore ipsum minus hic totam porro quaerat doloremque quas ut modi minima ea vitae facere aspernatur. Assumenda ipsam illum, porro, qui perferendis ad ipsum perspiciatis soluta dicta iste odit veritatis odio incidunt ratione, alias error reiciendis quis ex nobis praesentium! Nobis, fugit deleniti reprehenderit provident perspiciatis illo quam quos, dolores laudantium, necessitatibus vel obcaecati. Fuga exercitationem commodi ab totam quibusdam labore quidem, ex perspiciatis deleniti, velit dolore quam, neque ipsum praesentium earum. Nisi molestias quis, non odio quasi fugiat doloribus asperiores ipsa perferendis perspiciatis!
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a message" />
            <button className="send">
              <img src={sendBtn} alt="Send" />
            </button>
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
