import React, { Component } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import userprofile_logo from "../../assets/user-profile.png";
import SearchBar from "./SearchBar";

import ProfileMenu from "./profile_menu";

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
          <header className="app_header">
            <div className="app_logo">Image Viewer</div>
          </header>
        ) : (
          <header className="app_header">
            <div className="app_logo">Image Viewer</div>
            <SearchBar />
            <ProfileMenu />
          </header>
        )}
      </div>
    );
  }
}

export default Header;
