import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
// import './screens/login/Login';
import Login from "./screens/login/Login";
import Home from "./screens/home/Home";
// import Controller from './screens/Controller';
import "fontsource-roboto";

ReactDOM.render(
  <div>
    <Login />
  </div>,
  document.getElementById("root")
);
