import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";
import Login from "./components/LoginForm";

function App() {
  // If there is no storage area named username that means user is not logged in and we will reder login form
  if (!localStorage.getItem("username")) return <Login />;

  return (
    <ChatEngine
      height="100vh"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      projectID="fd7c2763-58af-4363-85ff-c6a80272d4bb"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />} // This render chat feed function will allow us to customize chat feed and make it our own.
      // Here chatAppProps is the props provided by engine which passed over to chat feed component for customizing.
    />
  );
}

export default App;
