import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./App.css"; 

const socket = io("http://localhost:8989");

function App() {
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [users, setUsers] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      setChat((prev) => [...prev, { type: "text", ...data }]);
    });

    socket.on("receiveFile", (data) => {
      setChat((prev) => [...prev, { type: "file", ...data }]);
    });

    socket.on("userList", (data) => {
      setUsers(data);
    });

    socket.on("notify", (msg) => {
      alert(msg);
    });

    return () => socket.disconnect();
  }, []);

  const joinChat = () => {
    if (username.trim()) {
      setLoggedIn(true);
      socket.emit("join", { username });
    }
  };

  const sendMessage = () => {
    if (message) {
      const data = { username, message, time: new Date().toLocaleTimeString() };
      socket.emit("sendMessage", data);
      setMessage("");
    }
  };

  const sendFile = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        socket.emit("sendFile", {
          username,
          file: reader.result,
          filename: file.name,
          time: new Date().toLocaleTimeString(),
        });
      };
      reader.readAsDataURL(file);
      setFile(null);
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      {!loggedIn ? (
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-bold">Join Chat</h1>
          <input
            className="p-2 border rounded"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={joinChat}>
            Join
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold">Hello {username}</h2>
          <div className="flex gap-2 mt-2">
            <input
              className="border p-2 flex-grow"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type message"
            />
            <button onClick={sendMessage} className="bg-green-500 px-4 py-2 text-white rounded">
              Send
            </button>
          </div>

          <div className="mt-2">
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={sendFile} className="bg-purple-500 text-white px-3 py-1 rounded">
              Send File
            </button>
          </div>

          <div className="mt-4 border p-2 h-80 overflow-y-auto">
            {chat.map((msg, idx) => (
              <div key={idx} className="mb-2">
                <span className="font-bold">{msg.username}</span>:{" "}
                {msg.type === "file" ? (
                  <a href={msg.file} download={msg.filename} className="text-blue-600 underline">
                    {msg.filename}
                  </a>
                ) : (
                  msg.message
                )}{" "}
                <span className="text-xs text-gray-500">({msg.time})</span>
              </div>
            ))}
          </div>

          <h3 className="mt-4 text-lg font-semibold">Online Users</h3>
          <ul>
            {users.map((u, i) => (
              <li key={i} className="text-green-700">{u}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
