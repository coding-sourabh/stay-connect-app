import React, { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");

  //Once you used asynchronous conde fuction above that need to be asyn
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Provide username|password if it works out , will ask chat-engine to give messages and
    // We are successfully logged in
    // otherwise we will ask to try with different username and password

    const authObject = {
      "Project-ID": "fd7c2763-58af-4363-85ff-c6a80272d4bb",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      //Getting username and password and ask to give out messages
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      }); // Since this asyn request we have to add await in front of this

      //successfully logged in , need to store username and password for catching
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload(); // reload page after storing data
    } catch (error) {
      //error try with different username and password
      seterror("OOPS!! Incorrect credentials.");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title"> stay-Connect</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
            }}
            className="input"
            placeholder="username"
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            className="input"
            placeholder="password"
            required
          />

          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
