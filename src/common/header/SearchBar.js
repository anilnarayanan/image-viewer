import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import "./Header.css";

// Method to display Search bar on header

export default function SearchBar() {
  return (
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
  );
}
