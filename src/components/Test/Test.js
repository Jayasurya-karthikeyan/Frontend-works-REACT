import React from "react";
import AppBar from "../AppBar/AppBar";
import Sidebar from "../Sidebar/Sidebar";
import Body from "../test-body/Body";
import "./Test.css";

function Test() {
  return (
    <div className="test-parent">
      <div className="sidebar d-none d-sm-block">
        <Sidebar />
      </div>
      <div className="mob-view row">
        <div className="main-body">
          <Body />
        </div>
        <div className="navvbar d-sm-none">
          <AppBar />
        </div>
      </div>
    </div>
  );
}

export default Test;
