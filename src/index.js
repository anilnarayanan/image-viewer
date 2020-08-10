import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./screens/login/Login";
import "fontsource-roboto";

ReactDOM.render(
  <div>
    {/* Redirection to Login page */}
    <Login />
  </div>,
  document.getElementById("root")
);
