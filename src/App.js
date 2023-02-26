import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./components/Chat";
import { over } from "stompjs";
import SockJS from "sockjs-client";
function App() {
  const url =
    process.env.NODE_ENV === "production"
      ? "http://socket-io-chat-live.herokuapp.com/ws"
      : "http://localhost:8080/ws";

  const Sock = new SockJS(url);
  const stompClient = over(Sock);
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const [showChat, setShowChat] = useState(false);

  const joinRoom = async () => {
    if (username === "" || room === "") return;

    setShowChat(true);
  };

  return (
    <div className="App flex h-screen flex-col items-center justify-center max-w-[1000px] mx-auto gap-2  ">
      {!showChat && (
        <div className="flex flex-col gap-2">
          <h4>Join A Chat</h4>
          <input
            className="border-2 p-1 "
            type="text"
            placeholder="Name"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            className="border-2 p-1 "
            type="text"
            placeholder="Room ID"
            onChange={(e) => setRoom(e.target.value)}
          ></input>
          <button className="border-2 p-1 hover:scale-110" onClick={joinRoom}>
            Join Room
          </button>
        </div>
      )}
      {showChat && (
        <Chat stompClient={stompClient} username={username} room={room}></Chat>
      )}
    </div>
  );
}

export default App;
