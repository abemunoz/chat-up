import React from 'react';

const Message = ({ message: { text, user }, name }) => {
  let currentUser = false;

  const trimmedName = name.trim();

  if (user === trimmedName) {
    currentUser = true;
  }

  return (
    currentUser
      ? (
        <div className="messageContainer right">
          <p className="sentText right10">{trimmedName}</p>
          <div className="messageBox backgroundGreen">
            <p className="messageText white">{text}</p>
          </div>
        </div>
        )
        : (
          <div className="messageContainer left">
            <div className="messageBox backgroundLight">
              <p className="messageText black">{text}</p>
            </div>
            <p className="sentText left10 ">{user}</p>
          </div>
        )
  );
}

export default Message;
