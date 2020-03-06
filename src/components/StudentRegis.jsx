import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NvBarCom from "./NvBar";
import "./styles/register.css";

import { firebaseConfig } from "./configDB/cofig";
import firebase, { app } from "firebase";

class StudentRegis extends React.Component {
  constructor(props) {
    super(props);
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
    this.state = {
      email: "",
      pass: "",
      name: "",
      school: "",
      bdate: "",
      tel: "",
      status: "student"
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
  onChangeSchool(e) {
    this.setState({ school: e.target.value });
  }
  onChangeDate(e) {
    this.setState({ bdate: e.target.value });
  }
  onChangeTel(e) {
    this.setState({ tel: e.target.value });
  }
  render() {
    return (
      <div>
        <NvBarCom props={this.props}></NvBarCom>
        <Grid container component="main" className="root paper-pad">
          <CssBaseline />
          <Grid item xs={12} component={Paper} elevation={6} square>
            <Grid container justify="center">
              <div className="head">ลงทะเบียนเรียน</div>
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
                  name="school"
                  label="โรงเรียน"
                  id="school"
                  onChange={this.onChangeSchool.bind(this)}
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
                  name="tel"
                  label="เบอร์โทรศัพท์"
                  id="tel"
                  onChange={this.onChangeTel.bind(this)}
                />
              </Grid>
              <Grid container justify="center">
                <button className="ok" onClick={this.onclickOK.bind(this)}>
                  ตกลง
                </button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default StudentRegis;
