import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from  './Chat';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";

const socket = io.connect("https://tangled-backend.herokuapp.com/");

function chatFrom() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("joinRoom", room);
      setShowChat(true);
    }
  };

  return (
    <GridContainer>
      <GridItem xs={0} sm={6} md={12}>
        <Card>

          <div className="App">
            {/* <h2>Please </h2> */}
            {!showChat ? (
              
              <div className="joinChatContainer">
                <h1 class="jt --debug">
                  <span class="jt__row">
                    <span class="jt__text">Join A chat </span>
                  </span>
                  <span class="jt__row jt__row--sibling" aria-hidden="true">
                    <span class="jt__text">Join A chat </span>
                  </span>
                  <span class="jt__row jt__row--sibling" aria-hidden="true">
                    <span class="jt__text">Join A chat </span>
                  </span>
                  <span class="jt__row jt__row--sibling" aria-hidden="true">
                    <span class="jt__text">Join A chat </span>
                  </span>
                </h1>
                <input
                  type="text"
                  placeholder="Add a username"
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Room ID "
                  onChange={(event) => {
                    setRoom(event.target.value);
                  }}
                />
                <button onClick={joinRoom}>Join A Room</button>
              </div>
            ) : (
              <Chat socket={socket} username={username} room={room} />
            )}
          </div >
        </Card>
      </GridItem>
    </GridContainer>
  )
}

export default chatFrom;

