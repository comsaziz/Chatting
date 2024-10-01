import React, { useState } from "react";

function AmyPhone({ messages, onSendMessage }) {
  const [currentMessage, setCurrentMessage] = useState("");

  const SendFun = () => {
    if (currentMessage.trim()) {
      const timecal = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      onSendMessage("Amy", currentMessage, timecal);
      setCurrentMessage("");
    }
  };

  return (
    <div className="mockup-phone mt-8 w-[350px] h-[650px] hover:bg-slate-500">
      <div className="camera"></div>
      <div className="display bg-[#202022] h-full w-full">
        <div className="artboard flex flex-col h-full justify-end">
          <h3 className="text-center w-full bg-[#172b5e] text-white pt-8 pb-2">
            Amy
          </h3>

          <div
            style={{
              backgroundImage:
                'url("https://i.pinimg.com/originals/d2/bf/d3/d2bfd3ea45910c01255ae022181148c4.png")',
            }}
            className="flex-1 overflow-y-auto p-4 break-words "
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat ${
                  msg.sender === "Amy" ? "chat-end" : "chat-start"
                }`}
              >
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="avatar"
                      src={
                        msg.sender === "Amy"
                          ? "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=600" 
                          : "https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=600" 
                      }
                    />
                  </div>
                </div>
                <div className="chat-header text-white mb-1">{msg.sender} </div>
                <div
                  className={`chat-bubble ${
                    msg.sender === "Amy" ? "bg-blue-500" : "bg-gray-400"
                  }`}
                >
                  {msg.message}
                </div>
                <time className="text-xs text-white opacity-50 mt-2">
                  {msg.time}
                </time>
              </div>
            ))}
          </div>

          <div className="flex p-[4%] w-full">
            <textarea
              type="text"
              placeholder="Write Here"
              className="input input-bordered w-[80%] py-2 px-4 rounded-xl bg-[#222d3b] text-white self-center resize-none"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
            />
            <button className="ml-3" onClick={SendFun}>
              <img
               className="w-18 h-10 rounded-full hover:bg-zinc-900 bg-[#172b5e]"
                src="img.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AmyPhone;
