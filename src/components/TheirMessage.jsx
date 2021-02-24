import React from "react";

function TheirMessage({ lastMessage, message }) {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username; // If there is no last message or last message's user is not the current user then it means its the new message and show avatar along with message

  return (
    <div className="message-row">
      {isFirstMessageByUser && ( // If it is the first message then show avatar as well for the respectinve user
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}

      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ marginLeft: isFirstMessageByUser ? "4px" : "48px" }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            backgroundColor: "#CABCDC",
            marginLeft: isFirstMessageByUser ? "4px" : "48px",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}

export default TheirMessage;
