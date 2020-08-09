import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Header from "../../common/header/Header";
import ProfilePhotos from "../../screens/profile_photos/ProfilePhotos";

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
        <ProfilePhotos />
      </div>
    );
  }
}

export default Home;
