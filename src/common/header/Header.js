import React, { Component } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import userprofile_logo from "../../assets/user-profile.png";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import SimpleMenu from "./profile_menu";

class Header extends Component {
  render() {
    const svgIcon = (
      <IconButton>
        <img alt="edit" src="./assets/user-profile.png" />
      </IconButton>
    );

    return (
      <div>
        <header className="app_header">
          <div className="app_logo">Image Viewer</div>
          <div className="search_box">
            <div className="search_icon">
              <SearchIcon fontSize="large" />
            </div>
            <div className="search_bar">
              <FormControl required fullWidth="true">
                <Input
                  id="search"
                  type="text"
                  aria-describedby="my-helper-text"
                  placeholder="Search…"
                  disableUnderline="true"
                  color="secondary"
                  fullWidth="false"
                />
              </FormControl>
            </div>
          </div>
          <div>
            {/* <IconButton>
              <img src={userprofile_logo} width="50" height="50" />
            </IconButton> */}
          </div>
          {/* <div class="dropdown">
            <button onclick="" class="dropbtn">
              Dropdown
            </button>
            <div id="myDropdown" class="dropdown-content">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
          </div> */}
          <SimpleMenu />
        </header>
      </div>
    );
  }
}

export default Header;
