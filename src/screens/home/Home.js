import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Header from "../../common/header/Header";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      instaToken: sessionStorage.getItem("access-token"),
    };
    alert(this.state.instaToken);
  }

  render() {
    return (
      <div>
        <Header />
        {/* <div className="search_box"> */}
        {/* <SearchIcon className="search_icon" color="primary" /> */}

        {/* <FormControl required fullWidth="true"> */}
        {/* <Input
              id="search"
              type="text"
              aria-describedby="my-helper-text"
              placeholder="Search…"
              disableUnderline="true"
              color="secondary"
              fullWidth="false"
            /> */}
        {/* </FormControl> */}
        {/* </div> */}
      </div>
    );
  }
}

export default Home;
