import React, { Component } from "react";
import Header from "../../common/header/Header";
import Modal from "react-modal";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    sessionStorage.setItem("access-token", null);
    this.state = {
      login_card_display: "login_card",
      username: "",
      usernameValidation: "dispNone",
      password: "",
      passwordValidation: "dispNone",
      credentialValidation: "dispNone",
      // Instagram token
      instaToken:
        "IGQVJWejRhd2FQQWdTY0NOQzh1SFVQS3BTTzJtS1pGRGlJR3RXUi02WVZA4bW9UUVhtSEsxRDc0YWlVaVJaeFU5QmVOdnRQZAU52MmsyVVVDTWpBaUFaMlRlV1UweUdEWHZAESGxzWHhlREg5VUR1cnVqXwZDZD",
      // Login username & password
      uname: "anilnarayanan",
      pwd: "welcome123",
    };
  }

  // Username change handler
  inputUsernameChangeHandler = (e) => {
    this.setState({ username: e.target.value });
  };

  // Password change handler
  inputPasswordChangeHandler = (e) => {
    this.setState({ password: e.target.value });
  };

  // On click handler
  loginClickHandler = () => {
    if (
      this.state.uname === this.state.username &&
      this.state.pwd === this.state.password
    ) {
      this.setState({
        login_card_display: "dispNone",
        credentialValidation: "dispNone",
      });
      // Storing authentication token in session storage
      sessionStorage.setItem("access-token", this.state.instaToken);
    } else if (this.state.username === "" && this.state.password === "") {
      this.setState({
        usernameValidation: "dispBlock",
        passwordValidation: "dispBlock",
      });
    } else {
      this.setState({
        usernameValidation: "dispNone",
        passwordValidation: "dispNone",
        credentialValidation: "dispBlock",
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className={this.state.login_card_display}>
          <Card>
            <CardContent>
              <h2>LOGIN</h2>
              <FormControl required fullWidth="true">
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input
                  id="username"
                  type="text"
                  aria-describedby="my-helper-text"
                  username={this.state.username}
                  onChange={this.inputUsernameChangeHandler}
                />
              </FormControl>
              <br />
              <br />
              <FormHelperText className={this.state.usernameValidation}>
                <span className="red">required</span>
              </FormHelperText>
              <FormControl required fullWidth="true">
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  type="password"
                  aria-describedby="my-helper-text"
                  username={this.state.password}
                  onChange={this.inputPasswordChangeHandler}
                />
              </FormControl>
              <br />
              <br />
              <FormHelperText className={this.state.passwordValidation}>
                <span className="red">required</span>
              </FormHelperText>
              <FormHelperText className={this.state.credentialValidation}>
                <span className="red">Incorrect username and/or password</span>
              </FormHelperText>
              <br />
              <Button
                variant="contained"
                color="primary"
                onClick={this.loginClickHandler}
              >
                LOGIN
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

export default Login;
