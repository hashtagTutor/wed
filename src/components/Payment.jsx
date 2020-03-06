import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NvBarCom from "./NvBar";
import "./styles/pay.css";

import { firebaseConfig } from "./configDB/cofig";
import firebase, { app } from "firebase";

class Payment extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
    this.state = {
      time: {
        mon: props.location.state.mon,
        tue: props.location.state.tue,
        wed: props.location.state.wed,
        thu: props.location.state.thu,
        fri: props.location.state.fri,
        sat: props.location.state.sat,
        sun: props.location.state.sun
      },
      login: props.location.state.login,
      course_path: props.location.state.course_path,
      user_path: props.location.state.user_path,
      status: props.location.state.status,
      data: props.location.state.data,
      subName: props.location.state.subName
    };
    this.cn = 0;
  }
  onclickT() {
    this.props.history.push({
      pathname: "/"
    });
  }
  onclickS() {
    this.props.history.push({
      pathname: "/"
    });
  }
  componentDidMount() {
    this.dataBase = firebase.database().ref(this.state.user_path + "/mycourse");
    this.dataBase.on("value", gotdata => {
      var user_data = gotdata.val();
      if (user_data == null) {
        this.cn = 0;
      } else {
        this.cn = Object.keys(user_data).length;
      }
    });
  }
  onclickSuc() {
    this.dataBase2 = firebase
      .database()
      .ref("allcourse/" + this.state.course_path);
    this.dataBase2.update({ time: this.state.time });

    this.dataBase = firebase
      .database()
      .ref(this.state.user_path + "/mycourse/" + this.cn); // course totur path
    // console.log(this.state);
    this.dataBase.update(this.state);
    this.props.history.push({
      pathname: "/st_course",
      state: this.state
    });
  }
  render() {
    return (
      <div>
        <NvBarCom props={this.props}></NvBarCom>
        <Grid container component="main" className="root paper-pad-pay">
          <CssBaseline />
          <Grid item xs={12} component={Paper} elevation={6} square>
            <Grid container justify="center">
              <div className="head-pay">ชำระเงิน</div>
              <Grid container justify="center">
                <button
                  className="btn-paytype"
                  onClick={this.onclickS.bind(this)}
                >
                  บัตรเดบิต/เครดิต
                </button>
              </Grid>
              <Grid container justify="center">
                <button
                  className="btn-paytype"
                  onClick={this.onclickT.bind(this)}
                >
                  โอนผ่านธนาคาร
                </button>
              </Grid>
              <Grid container justify="center">
                <button
                  className="btn-success2"
                  onClick={this.onclickSuc.bind(this)}
                >
                  เรียบร้อย
                </button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Payment;
