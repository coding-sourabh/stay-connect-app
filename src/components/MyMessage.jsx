import React from "react";

function MyMessage({ message }) {
  if (message?.attachments?.lenght > 0) {
    // It is checking if user sent a image as an message
    return (
      <div>
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ float: "right" }}
        />
      </div>
    );
  }

  return (
    // here if no image is sent it means only simple text message is sent so simply render it with following styles
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#3b2a50",
      }}
    >
      {message.text}
    </div>
  );
}

export default MyMessage;
