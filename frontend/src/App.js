import { useState } from "react";
import "./App.css";
import Header from "./component/header/header.tsx";
import TypingAnimation from "./component/typingAnimation/typingAnimation.tsx";
import Navigation from "./navigation/Navigation.tsx";
import { CustomButton } from "./component/index.tsx";

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [onSearchPress, setSearchPress] = useState(false);
  const onSearch = () => {
    setSearchPress(true);
  };
  return (
    <div className="App">
      <Navigation />
      <Header />
      <TypingAnimation text="Generative AI Tool for you" />

      <div>
        <h2 style={style.chat}>Chat</h2>
        <div style={style.chatContainer}>
          {onSearchPress &&
            (response ? (
              <>
                <p>User: {message}</p>
                <p>Response: {response}</p>
              </>
            ) : (
              <p>Something went wrong</p>
            ))}
        </div>

        <input
          style={style.inputField}
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <CustomButton onClick={onSearch} text="Search" />
      </div>
    </div>
  );
}

export default App;

const style = {
  chat: {
    marginTop: "70px",
    color: "white",
  },
  chatContainer: {
    color: "white",
  },
  inputField: {
    width: "90%",
    height: "50px",
    paddingLeft: "20px",
    justifyContent: "center",
    border: "none",
    borderRadius: "10px",
  },
};
