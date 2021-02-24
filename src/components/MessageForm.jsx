// Logic to write and sent messages.
import React, { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine"; // special functions from react-chat-engine
import { SetOutlined, PictureOutlined, SendOutlined } from "@ant-design/icons";

function MessageForm(props) {
  const [value, setValue] = useState(""); // value is going to store the text entered in the input box
  const chatId = props.chatId,
    creds = props.creds; // These are just props passed from app.jsx by the chat-engine

  const handleOnSubmit = (event) => {
    event.preventDefault(); // To prevent from refreshing
    const text = value.trim(); // trim method with remove any trailing or leading spaces

    //sendMessage accepts three inputs creds , chatId and the data(text or image).
    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }

    setValue(""); // After sending message to the feed , set the value to empty string
  };

  const handleOnChange = (event) => {
    setValue(event.target.value);

    isTyping(props, chatId);
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: "" });
  };

  return (
    <div>
      <form className="message-form" onSubmit={handleOnSubmit}>
        <input
          className="message-input"
          placeholder="send a message..."
          onChange={handleOnChange}
          value={value}
          onSubmit={handleOnSubmit}
        />

        {/* code for image upload to the feed */}
        <label htmlFor="upload-button">
          <span className="image-button">
            <PictureOutlined className="picture-icon" />
          </span>
        </label>

        <input
          type="file"
          multiple={false}
          id="upload-button"
          onChange={handleUpload}
        />

        <button type="submit" className="send-button">
          <SendOutlined className="send-icon" />
        </button>
      </form>
    </div>
  );
}

export default MessageForm;
