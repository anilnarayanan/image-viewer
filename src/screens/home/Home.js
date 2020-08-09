import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Header from "../../common/header/Header";
import ProfilePhotos from "../../screens/profile_photos/ProfilePhotos";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      instaToken: sessionStorage.getItem("access-token"),
    };
    this.fetchProfileMediaId();
  }

  fetchProfileMediaId = async () => {
    const url =
      "https://graph.instagram.com/me/media?fields=id,caption&access_token=";

    let response = await fetch(url + sessionStorage.getItem("access-token"));
    if (response.ok) {
      let json = await response.json();
      console.log(json);
    } else {
      console.log("HTTP-Error: " + response.status);
    }
  };

  render() {
    return (
      <div>
        {/* <Header /> */}
        {/* <ProfilePhotos /> */}
        <GridList cols={2}>
          <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
            Hello world
          </GridListTile>
        </GridList>
      </div>
    );
  }
}
