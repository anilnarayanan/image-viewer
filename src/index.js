import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import './screens/login/Login';
import Login from "./screens/login/Login";
import Home from "./screens/home/Home";
// import Controller from './screens/Controller';
import "fontsource-roboto";

ReactDOM.render(
  <div>
    {/* <Login /> */}
    <Home />
  </div>,
  document.getElementById("root")
);
