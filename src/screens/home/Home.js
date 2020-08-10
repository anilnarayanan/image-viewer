import React, { Component } from "react";
import ReactDOM from "react-dom";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Header from "../../common/header/Header";
import { Grid, Paper } from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import userprofile_logo from "../../assets/user-profile.png";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Login from "../login/Login";

const useStyles = makeStyles((theme) => ({
  grid: {
    marginLeft: "0px",
    display: "block",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

class Home extends Component {
  constructor() {
    super();
    this.state = {
      // Saving authentication token in session storage
      instaToken: sessionStorage.getItem("access-token"),
      payload: [],
    };
  }

  // On component mount, fetch session token and gather media details of respective user from instagram
  componentDidMount() {
    const url =
      "https://graph.instagram.com/me/media?fields=id,caption&access_token=" +
      this.state.instaToken;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((json) => this.setState({ payload: json.data }));
    console.log(this.state.payload);
  }

  render() {
    return (
      <div>
        <Grid
          container
          spacing={2}
          className={useStyles.grid}
          direction="row"
          justify="center"
        >
          <Grid item xs={10} md={5}>
            <Card>
              <CardHeader
                avatar=<img src={userprofile_logo} width="50" height="50" />
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
                Anil
                Narayanan
              />
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add
                  saffron and set aside for 10 minutes.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={10} md={5}>
            <Card>
              <CardHeader
                avatar=<img src={userprofile_logo} width="50" height="50" />
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
                Anil
                Narayanan
              />
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add
                  saffron and set aside for 10 minutes.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        )
      </div>
    );
  }
}

export default Home;
