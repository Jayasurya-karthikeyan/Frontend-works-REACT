import React from "react";
import "./AppBar.css";

function AppBar() {
  return (
    <div className="App-bar d-flex p-1 text-center">
      <div className="list row text-center">
        <i class="bi bi-list m-1"></i>
        <label>Menu</label>
      </div>
      <div className="chat row text-center">
        <i class="bi bi-chat-dots m-1"></i>
        <label>Chat</label>
      </div>
      <div className="home row text-center">
        <i class="bi bi-house-fill m-1"></i>
        <label>Home</label>
      </div>
      <div className="bookmarks row text-center">
        <i class="bi bi-bookmarks m-1"></i>
        <label>Saved</label>
      </div>
      <div className="people row text-center">
        <i class="bi bi-people m-1"></i>
        <label>People</label>
      </div>
    </div>
  );
}

export default AppBar;
