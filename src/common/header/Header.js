import React, { Component } from "react";
import "./Header.css";
import IconButton from "@material-ui/core/IconButton";
import SearchBar from "./SearchBar";
import ProfileMenu from "./profile_menu";
import Home from "../../screens/home/Home";

class Header extends Component {
  render() {
    const svgIcon = (
      <IconButton>
        <img alt="edit" src="./assets/user-profile.png" />
      </IconButton>
    );

    return (
      <div>
        {sessionStorage.getItem("access-token") === "null" ? (
          <div>
            <header className="app_header">
              <div className="app_logo">Image Viewer</div>
            </header>
          </div>
        ) : (
          <div>
            <header className="app_header">
              <div className="app_logo">Image Viewer</div>
              <SearchBar />
              <ProfileMenu />
            </header>
            <Home />
          </div>
        )}
      </div>
    );
  }
}

export default Header;
