import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import NvBarCom from "./NvBar";
import "./styles/register.css";

import { firebaseConfig } from "./configDB/cofig";
import firebase, { app } from "firebase";

class TeacherRegis extends React.Component {
  constructor(props) {
    super(props);
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
    this.state = {
      email: "",
      pass: "",
      name: "",
      sex: "",
      bdate: "",
      grad: "",
      sub: "",
      status: "tutor"
    };
    this.state2 = { userNum: 0 };
  }
  componentDidMount() {
    var str_path = "/user/";
    this.dataBase = firebase.database().ref(str_path);
    this.dataBase.on("value", gotdata => {
      var user_data = gotdata.val();
      if (user_data == null) {
        this.state2.userNum = 0;
      } else {
        this.state2.userNum = Object.keys(user_data).length;
      }
    });
  }
  onclickOK() {
    var str_path = "/user/" + this.state2.userNum;
    this.dataBase = firebase.database().ref(str_path);
    this.dataBase.update(this.state);
    this.props.history.push({
      pathname: "/login"
    });
  }
  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangePass(e) {
    this.setState({ pass: e.target.value });
  }
  onChangeName(e) {
    this.setState({ name: e.target.value });
  }
  onChangeDate(e) {
    this.setState({ bdate: e.target.value });
  }
  onChangeSex(e) {
    this.setState({ sex: e.target.value });
  }
  onChangeGrad(e) {
    this.setState({ grad: e.target.value });
  }
  onChangeSub(e) {
    this.setState({ sub: e.target.value });
  }
  render() {
    return (
      <div>
        <NvBarCom props={this.props}></NvBarCom>
        <Grid container component="main" className="root paper-pad">
          <CssBaseline />
          <Grid item xs={12} component={Paper} elevation={6} square>
            <Grid container justify="center">
              <div className="head">ลงทะเบียนติวเตอร์</div>
              <Grid container justify="center" className="tf-pad">
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="email"
                  label="อีเมล"
                  id="email"
                  onChange={this.onChangeEmail.bind(this)}
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
                  onChange={this.onChangePass.bind(this)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="name"
                  label="ชื่อ-สกุล"
                  type="text"
                  id="name"
                  onChange={this.onChangeName.bind(this)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="bathdate"
                  label="วัน/เดือน/ปี เกิด"
                  id="bathdate"
                  onChange={this.onChangeDate.bind(this)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="sex"
                  label="เพศ"
                  id="sex"
                  onChange={this.onChangeSex.bind(this)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="graduate"
                  label="ระดับการศึกษา"
                  id="graduate"
                  onChange={this.onChangeGrad.bind(this)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="subject"
                  label="วิชาที่สอน"
                  id="subject"
                  onChange={this.onChangeSub.bind(this)}
                />
              </Grid>
              <Grid container justify="center">
                <button className="ok" onClick={this.onclickOK.bind(this)}>
                  ถัดไป
                </button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default TeacherRegis;
