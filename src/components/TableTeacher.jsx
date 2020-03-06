import React from "react";
import Grid from "@material-ui/core/Grid";
import NvBarCom from "./NvBar";
import "./styles/table.css";
import { Link, Divider } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import { firebaseConfig } from "./configDB/cofig";
import firebase, { app } from "firebase";

class TableTeacher extends React.Component {
  constructor(props) {
    super(props);
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
    this.state = {
      time: {
        mon: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        tue: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        wed: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        thu: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        fri: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        sat: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        sun: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      m1: [
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก"
      ],
      tue: [
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก"
      ],
      wed: [
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก"
      ],
      thu: [
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก"
      ],
      fri: [
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก"
      ],
      sat: [
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก"
      ],
      sun: [
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก",
        "เลือก"
      ],
      m1cl: [
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary"
      ],
      tuecl: [
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary"
      ],
      wedcl: [
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary"
      ],
      thucl: [
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary"
      ],
      fricl: [
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary"
      ],
      satcl: [
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary"
      ],
      suncl: [
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary",
        "primary"
      ]
    };

    // this.dataBase2 = firebase.database().ref(props.location.state.path);
    // this.dataBase2.update({ time: this.state });
    // this.dataBase = firebase.database().ref(props.location.state.path2);
    // this.dataBase.update({ time: this.state });
  }
  onclickOK() {
    this.dataBase2 = firebase
      .database()
      .ref(this.props.location.state.path_mycourse);
    this.dataBase2.update(this.props.location.state.detail);
    this.dataBase2.update({ time: this.state.time });
    this.dataBase = firebase.database().ref(this.props.location.state.path2);
    this.dataBase.update(this.props.location.state.detail);
    this.dataBase.update({ time: this.state.time });
    this.props.history.push({
      pathname: "/tt_course",
      state: {
        login: this.props.location.state.login,
        user_path: this.props.location.state.user_path,
        status: this.props.location.state.status
      }
    });
  }
  // monday
  onClickM1(index) {
    if (this.state.time.mon[index]) {
      this.state.time.mon[index] = 0;
      this.state.m1[index] = "เลือก";
      this.state.m1cl[index] = "primary";
      this.setState({ m1: this.state.m1, m1cl: this.state.m1cl });
    } else {
      this.state.time.mon[index] = 1;
      this.state.m1[index] = "ยกเลิก";
      this.state.m1cl[index] = "secondary";
      this.setState({ m1: this.state.m1, m1cl: this.state.m1cl });
    }
  }
  onClickTue(index) {
    if (this.state.time.tue[index]) {
      this.state.time.tue[index] = 0;
      this.state.tue[index] = "เลือก";
      this.state.tuecl[index] = "primary";
      this.setState({ tue: this.state.tue, tuecl: this.state.tuecl });
    } else {
      this.state.time.tue[index] = 1;
      this.state.tue[index] = "ยกเลิก";
      this.state.tuecl[index] = "secondary";
      this.setState({ tue: this.state.tue, tuecl: this.state.tuecl });
    }
  }
  onClickWed(index) {
    if (this.state.time.wed[index]) {
      this.state.time.wed[index] = 0;
      this.state.wed[index] = "เลือก";
      this.state.wedcl[index] = "primary";
      this.setState({ wed: this.state.wed, wedcl: this.state.wedcl });
    } else {
      this.state.time.wed[index] = 1;
      this.state.wed[index] = "ยกเลิก";
      this.state.wedcl[index] = "secondary";
      this.setState({ wed: this.state.wed, wedcl: this.state.wedcl });
    }
  }
  onClickThu(index) {
    if (this.state.time.thu[index]) {
      this.state.time.thu[index] = 0;
      this.state.thu[index] = "เลือก";
      this.state.thucl[index] = "primary";
      this.setState({ thu: this.state.thu, thucl: this.state.thucl });
    } else {
      this.state.time.thu[index] = 1;
      this.state.thu[index] = "ยกเลิก";
      this.state.thucl[index] = "secondary";
      this.setState({ thu: this.state.thu, thucl: this.state.thucl });
    }
  }
  onClickFri(index) {
    if (this.state.time.fri[index]) {
      this.state.time.fri[index] = 0;
      this.state.fri[index] = "เลือก";
      this.state.fricl[index] = "primary";
      this.setState({ fri: this.state.fri, fricl: this.state.fricl });
    } else {
      this.state.time.fri[index] = 1;
      this.state.fri[index] = "ยกเลิก";
      this.state.fricl[index] = "secondary";
      this.setState({ fri: this.state.fri, fricl: this.state.fricl });
    }
  }
  onClickSat(index) {
    if (this.state.time.sat[index]) {
      this.state.time.sat[index] = 0;
      this.state.sat[index] = "เลือก";
      this.state.satcl[index] = "primary";
      this.setState({ sat: this.state.sat, satcl: this.state.satcl });
    } else {
      this.state.time.sat[index] = 1;
      this.state.sat[index] = "ยกเลิก";
      this.state.satcl[index] = "secondary";
      this.setState({ sat: this.state.sat, satcl: this.state.satcl });
    }
  }
  onClickSun(index) {
    if (this.state.time.sun[index]) {
      this.state.time.sun[index] = 0;
      this.state.sun[index] = "เลือก";
      this.state.suncl[index] = "primary";
      this.setState({ sun: this.state.sun, suncl: this.state.suncl });
    } else {
      this.state.time.sun[index] = 1;
      this.state.sun[index] = "ยกเลิก";
      this.state.suncl[index] = "secondary";
      this.setState({ sun: this.state.sun, suncl: this.state.suncl });
    }
  }
  render() {
    return (
      <div>
        <NvBarCom props={this.props}></NvBarCom>
        <Grid container component="main" className="root bg2" justify="center">
          <Card className="card-table">
            <div className="th">เลือกเวลาสอน</div>
            <Grid container justify="center">
              <CssBaseline />
              {/* row 1 title */}
              <Grid container justify="flex-start">
                <Grid item xs={12} md={1}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={12}>
                      <Box border={1} className="border-table">
                        DAY/ TIME
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        8.00 -<br></br> 9.00
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        9.00 - 10.00
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        10.00 - 11.00
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        11.00 - 12.00
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        12.00 - 13.00
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        13.00 - 14.00
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        14.00 - 15.00
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        16.00 - 17.00
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        18.00 - 19.00
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        19.00 - 20.00
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={1}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={12}>
                      <Box border={1} className="border-table">
                        20.00 - 21.00
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* row 2 monday*/}
              <Grid container justify="flex-start">
                <Grid item xs={12} md={1}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={12}>
                      <Box border={1} className="border-table">
                        จันทร์
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.m1cl[0]}
                            onClick={this.onClickM1.bind(this, 0)}
                          >
                            {this.state.m1[0]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.m1cl[1]}
                            onClick={this.onClickM1.bind(this, 1)}
                          >
                            {this.state.m1[1]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.m1cl[2]}
                            onClick={this.onClickM1.bind(this, 2)}
                          >
                            {this.state.m1[2]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.m1cl[3]}
                            onClick={this.onClickM1.bind(this, 3)}
                          >
                            {this.state.m1[3]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.m1cl[4]}
                            onClick={this.onClickM1.bind(this, 4)}
                          >
                            {this.state.m1[4]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.m1cl[5]}
                            onClick={this.onClickM1.bind(this, 5)}
                          >
                            {this.state.m1[5]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.m1cl[6]}
                            onClick={this.onClickM1.bind(this, 6)}
                          >
                            {this.state.m1[6]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.m1cl[7]}
                            onClick={this.onClickM1.bind(this, 7)}
                          >
                            {this.state.m1[7]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.m1cl[8]}
                            onClick={this.onClickM1.bind(this, 8)}
                          >
                            {this.state.m1[8]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.m1cl[9]}
                            onClick={this.onClickM1.bind(this, 9)}
                          >
                            {this.state.m1[9]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={1}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={12}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.m1cl[10]}
                            onClick={this.onClickM1.bind(this, 10)}
                          >
                            {this.state.m1[10]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* row 3 tuesday*/}
              <Grid container justify="flex-start">
                <Grid item xs={12} md={1}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={12}>
                      <Box border={1} className="border-table">
                        อังคาร
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.tuecl[0]}
                            onClick={this.onClickTue.bind(this, 0)}
                          >
                            {this.state.tue[0]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.tuecl[1]}
                            onClick={this.onClickTue.bind(this, 1)}
                          >
                            {this.state.tue[1]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.tuecl[2]}
                            onClick={this.onClickTue.bind(this, 2)}
                          >
                            {this.state.tue[2]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.tuecl[3]}
                            onClick={this.onClickTue.bind(this, 3)}
                          >
                            {this.state.tue[3]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.tuecl[4]}
                            onClick={this.onClickTue.bind(this, 4)}
                          >
                            {this.state.tue[4]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.tuecl[5]}
                            onClick={this.onClickTue.bind(this, 5)}
                          >
                            {this.state.tue[5]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.tuecl[6]}
                            onClick={this.onClickTue.bind(this, 6)}
                          >
                            {this.state.tue[6]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.tuecl[7]}
                            onClick={this.onClickTue.bind(this, 7)}
                          >
                            {this.state.tue[7]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.tuecl[8]}
                            onClick={this.onClickTue.bind(this, 8)}
                          >
                            {this.state.tue[8]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.tuecl[9]}
                            onClick={this.onClickTue.bind(this, 9)}
                          >
                            {this.state.tue[9]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={1}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={12}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.tuecl[10]}
                            onClick={this.onClickTue.bind(this, 10)}
                          >
                            {this.state.tue[10]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* row 4 wednesday*/}
              <Grid container justify="flex-start">
                <Grid item xs={12} md={1}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={12}>
                      <Box border={1} className="border-table">
                        พุธ
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.wedcl[0]}
                            onClick={this.onClickWed.bind(this, 0)}
                          >
                            {this.state.wed[0]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.wedcl[1]}
                            onClick={this.onClickWed.bind(this, 1)}
                          >
                            {this.state.wed[1]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.wedcl[2]}
                            onClick={this.onClickWed.bind(this, 2)}
                          >
                            {this.state.wed[2]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.wedcl[3]}
                            onClick={this.onClickWed.bind(this, 3)}
                          >
                            {this.state.wed[3]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.wedcl[4]}
                            onClick={this.onClickWed.bind(this, 4)}
                          >
                            {this.state.wed[4]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.wedcl[5]}
                            onClick={this.onClickWed.bind(this, 5)}
                          >
                            {this.state.wed[5]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.wedcl[6]}
                            onClick={this.onClickWed.bind(this, 6)}
                          >
                            {this.state.wed[6]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.wedcl[7]}
                            onClick={this.onClickWed.bind(this, 7)}
                          >
                            {this.state.wed[7]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.wedcl[8]}
                            onClick={this.onClickWed.bind(this, 8)}
                          >
                            {this.state.wed[8]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.wedcl[9]}
                            onClick={this.onClickWed.bind(this, 9)}
                          >
                            {this.state.wed[9]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={1}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={12}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.wedcl[10]}
                            onClick={this.onClickWed.bind(this, 10)}
                          >
                            {this.state.wed[10]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* row 5 thursday*/}
              <Grid container justify="flex-start">
                <Grid item xs={12} md={1}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={12}>
                      <Box border={1} className="border-table">
                        พฤหัสบดี
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.thucl[0]}
                            onClick={this.onClickThu.bind(this, 0)}
                          >
                            {this.state.thu[0]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.thucl[1]}
                            onClick={this.onClickThu.bind(this, 1)}
                          >
                            {this.state.thu[1]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.thucl[2]}
                            onClick={this.onClickThu.bind(this, 2)}
                          >
                            {this.state.thu[2]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.thucl[3]}
                            onClick={this.onClickThu.bind(this, 3)}
                          >
                            {this.state.thu[3]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.thucl[4]}
                            onClick={this.onClickThu.bind(this, 4)}
                          >
                            {this.state.thu[4]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.thucl[5]}
                            onClick={this.onClickThu.bind(this, 5)}
                          >
                            {this.state.thu[5]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.thucl[6]}
                            onClick={this.onClickThu.bind(this, 6)}
                          >
                            {this.state.thu[6]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.thucl[7]}
                            onClick={this.onClickThu.bind(this, 7)}
                          >
                            {this.state.thu[7]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.thucl[8]}
                            onClick={this.onClickThu.bind(this, 8)}
                          >
                            {this.state.thu[8]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.thucl[9]}
                            onClick={this.onClickThu.bind(this, 9)}
                          >
                            {this.state.thu[9]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={1}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={12}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.thucl[10]}
                            onClick={this.onClickThu.bind(this, 10)}
                          >
                            {this.state.thu[10]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* row 6 friday*/}
              <Grid container justify="flex-start">
                <Grid item xs={12} md={1}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={12}>
                      <Box border={1} className="border-table">
                        ศุกร์
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.fricl[0]}
                            onClick={this.onClickFri.bind(this, 0)}
                          >
                            {this.state.fri[0]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.fricl[1]}
                            onClick={this.onClickFri.bind(this, 1)}
                          >
                            {this.state.fri[1]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.fricl[2]}
                            onClick={this.onClickFri.bind(this, 2)}
                          >
                            {this.state.fri[2]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.fricl[3]}
                            onClick={this.onClickFri.bind(this, 3)}
                          >
                            {this.state.fri[3]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.fricl[4]}
                            onClick={this.onClickFri.bind(this, 4)}
                          >
                            {this.state.fri[4]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.fricl[5]}
                            onClick={this.onClickFri.bind(this, 5)}
                          >
                            {this.state.fri[5]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.fricl[6]}
                            onClick={this.onClickFri.bind(this, 6)}
                          >
                            {this.state.fri[6]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.fricl[7]}
                            onClick={this.onClickFri.bind(this, 7)}
                          >
                            {this.state.fri[7]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.fricl[8]}
                            onClick={this.onClickFri.bind(this, 8)}
                          >
                            {this.state.fri[8]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.fricl[9]}
                            onClick={this.onClickFri.bind(this, 9)}
                          >
                            {this.state.fri[9]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={1}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={12}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.fricl[10]}
                            onClick={this.onClickFri.bind(this, 10)}
                          >
                            {this.state.fri[10]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* row 7 saturday*/}
              <Grid container justify="flex-start">
                <Grid item xs={12} md={1}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={12}>
                      <Box border={1} className="border-table">
                        เสาร์
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.satcl[0]}
                            onClick={this.onClickSat.bind(this, 0)}
                          >
                            {this.state.sat[0]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.satcl[1]}
                            onClick={this.onClickSat.bind(this, 1)}
                          >
                            {this.state.sat[1]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.satcl[2]}
                            onClick={this.onClickSat.bind(this, 2)}
                          >
                            {this.state.sat[2]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.satcl[3]}
                            onClick={this.onClickSat.bind(this, 3)}
                          >
                            {this.state.sat[3]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.satcl[4]}
                            onClick={this.onClickSat.bind(this, 4)}
                          >
                            {this.state.sat[4]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.satcl[5]}
                            onClick={this.onClickSat.bind(this, 5)}
                          >
                            {this.state.sat[5]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.satcl[6]}
                            onClick={this.onClickSat.bind(this, 6)}
                          >
                            {this.state.sat[6]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.satcl[7]}
                            onClick={this.onClickSat.bind(this, 7)}
                          >
                            {this.state.sat[7]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.satcl[8]}
                            onClick={this.onClickSat.bind(this, 8)}
                          >
                            {this.state.sat[8]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.satcl[9]}
                            onClick={this.onClickSat.bind(this, 9)}
                          >
                            {this.state.sat[9]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={1}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={12}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={this.state.satcl[10]}
                            onClick={this.onClickSat.bind(this, 10)}
                          >
                            {this.state.sat[10]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* row 8 sunday*/}
              <Grid container justify="flex-start">
                <Grid item xs={12} md={1}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={12}>
                      <Box border={1} className="border-table">
                        อาทิตย์
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={"" + this.state.suncl[0]}
                            onClick={this.onClickSun.bind(this, 0)}
                          >
                            {this.state.sun[0]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={"" + this.state.suncl[1]}
                            onClick={this.onClickSun.bind(this, 1)}
                          >
                            {this.state.sun[1]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={"" + this.state.suncl[2]}
                            onClick={this.onClickSun.bind(this, 2)}
                          >
                            {this.state.sun[2]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={"" + this.state.suncl[3]}
                            onClick={this.onClickSun.bind(this, 3)}
                          >
                            {this.state.sun[3]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={"" + this.state.suncl[4]}
                            onClick={this.onClickSun.bind(this, 4)}
                          >
                            {this.state.sun[4]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={"" + this.state.suncl[5]}
                            onClick={this.onClickSun.bind(this, 5)}
                          >
                            {this.state.sun[5]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={"" + this.state.suncl[6]}
                            onClick={this.onClickSun.bind(this, 6)}
                          >
                            {this.state.sun[6]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={"" + this.state.suncl[7]}
                            onClick={this.onClickSun.bind(this, 7)}
                          >
                            {this.state.sun[7]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={"" + this.state.suncl[8]}
                            onClick={this.onClickSun.bind(this, 8)}
                          >
                            {this.state.sun[8]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={"" + this.state.suncl[9]}
                            onClick={this.onClickSun.bind(this, 9)}
                          >
                            {this.state.sun[9]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={1}>
                  <Grid container justify="flex-start">
                    <Grid item xs={12} md={12}>
                      <Box border={1} className="border-table">
                        <div className="selecttime">
                          <Button
                            variant="contained"
                            color={"" + this.state.suncl[10]}
                            onClick={this.onClickSun.bind(this, 10)}
                          >
                            {this.state.sun[10]}
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container justify="center">
              <button className="ok-time" onClick={this.onclickOK.bind(this)}>
                ตกลง
              </button>
            </Grid>
          </Card>
        </Grid>
      </div>
    );
  }
}
export default TableTeacher;
