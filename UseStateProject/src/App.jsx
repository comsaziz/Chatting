import React, { useState } from "react";
import AmyPhone from "./Components/AmyPhone";
import JohnPhone from "./Components/JohnPhone";

function App() {
  const [messages, setMessages] = useState([]);

  const MassFun = (sender, message, time) => {
    setMessages([...messages, { sender, message, time }]);
  };

  return (
 
        <div className="bg-slate-950 min-h-screen"> 
          <div className="flex justify-around flex-wrap">
            <AmyPhone messages={messages} onSendMessage={MassFun} />
            <JohnPhone messages={messages} onSendMessage={MassFun} />
          </div>
        </div>
      
 
    
  );
}

export default App;
