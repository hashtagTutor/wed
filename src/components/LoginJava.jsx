import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "./styles/login.css";

import { firebaseConfig } from "./configDB/cofig";
import firebase from "firebase";

class Login extends React.Component {
  constructor(props) {
    super(props);
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
    this.state = { id: "", pass: "", login: false };
  }
  onclick() {
    var str_path = "/user/";
    this.dataBase = firebase.database().ref(str_path);
    this.dataBase.on("value", gotdata => {
      var user_data = gotdata.val();
      if (user_data == null) {
      } else {
        for (var i in user_data) {
          if (
            this.state.id === user_data[i].email &&
            this.state.pass === user_data[i].pass &&
            user_data[i].status === "student"
          ) {
            this.state.login = true;
            this.props.history.push({
              pathname: "/st_course",
              state: {
                login: this.state.login,
                user_path: str_path + i,
                status: "student"
              }
            });
            break;
          } else if (
            this.state.id === user_data[i].email &&
            this.state.pass === user_data[i].pass &&
            user_data[i].status === "tutor"
          ) {
            this.state.login = true;
            this.props.history.push({
              pathname: "/tt_course",
              state: {
                login: this.state.login,
                user_path: str_path + i,
                status: "tutor"
              }
            });
            break;
          }
        }
      }
    });
  }
  onChangeID(e) {
    this.setState({ id: e.target.value });
  }
  onChangePass(e) {
    this.setState({ pass: e.target.value });
  }
  render() {
    return (
      <Grid container component="main" className="root">
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className="test_image" />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className="paper">
            <Typography component="h1" variant="h5">
              เข้าสู่ระบบ
            </Typography>
            <form className="form" noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="อีเมล"
                name="email"
                autoComplete="email"
                onChange={this.onChangeID.bind(this)}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="รหัสผ่าน"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.onChangePass.bind(this)}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={this.onclick.bind(this)}
              >
                เข้าสู่ระบบ
              </Button>
              <Grid container justify="center">
                <Grid item className="register">
                  <Link href="/register" variant="body2">
                    สมัครสมาชิก
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}
export default Login;
