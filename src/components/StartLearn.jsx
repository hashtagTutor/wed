import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import "./styles/tutordetail.css";
import "./styles/start.css";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Card, CardContent } from "@material-ui/core";
import NvBarCom from "./NvBar";
import Table from "./Table";
import Box from "@material-ui/core/Box";
import { firebaseConfig } from "./configDB/cofig";
import firebase, { app } from "firebase";
class StartLearn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.location.state,
      login: props.location.state.login,
      course_path: props.location.state.course_path,
      subname_path: props.location.state.subname_path,
      subname: "",
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
      moncl: [
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white"
      ],
      tuecl: [
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white"
      ],
      wedcl: [
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white"
      ],
      thucl: [
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white"
      ],
      fricl: [
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white"
      ],
      satcl: [
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white"
      ],
      suncl: [
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white"
      ]
    };
    for (var day in this.state.data.data[0].time.mon) {
      this.state.mon[day] = this.state.data.data[0].time.mon[day];
      if (this.state.data.data[0].time.mon[day] === 0) {
        this.state.moncl[day] = "white";
      } else if (this.state.data.data[0].time.mon[day] === 2) {
        this.state.moncl[day] = "green";
      }
    } // tueday
    for (var day in this.state.data.data[0].time.tue) {
      this.state.tue[day] = this.state.data.data[0].time.tue[day];
      if (this.state.data.data[0].time.tue[day] === 0) {
        this.state.tuecl[day] = "white";
      } else if (this.state.data.data[0].time.tue[day] === 2) {
        this.state.tuecl[day] = "green";
      }
    } // wednesday
    for (var day in this.state.data.data[0].time.wed) {
      this.state.wed[day] = this.state.data.data[0].time.wed[day];
      if (this.state.data.data[0].time.wed[day] === 0) {
        this.state.wedcl[day] = "white";
      } else if (this.state.data.data[0].time.wed[day] === 2) {
        this.state.wedcl[day] = "green";
      }
    } // thureday
    for (var day in this.state.data.data[0].time.thu) {
      this.state.thu[day] = this.state.data.data[0].time.thu[day];
      if (this.state.data.data[0].time.thu[day] === 0) {
        this.state.thucl[day] = "white";
      } else if (this.state.data.data[0].time.thu[day] === 2) {
        this.state.thucl[day] = "green";
      }
    } // friday
    for (var day in this.state.data.data[0].time.fri) {
      this.state.fri[day] = this.state.data.data[0].time.fri[day];
      if (this.state.data.data[0].time.fri[day] === 0) {
        this.state.fricl[day] = "white";
      } else if (this.state.data.data[0].time.fri[day] === 2) {
        this.state.fricl[day] = "green";
      }
    } // saturday
    for (var day in this.state.data.data[0].time.sat) {
      this.state.sat[day] = this.state.data.data[0].time.sat[day];
      if (this.state.data.data[0].time.sat[day] === 0) {
        this.state.satcl[day] = "white";
      } else if (this.state.data.data[0].time.sat[day] === 2) {
        this.state.satcl[day] = "green";
      }
    } // sunday
    for (var day in this.state.data.data[0].time.sun) {
      this.state.sun[day] = this.state.data.data[0].time.sun[day];
      if (this.state.data.data[0].time.sun[day] === 0) {
        this.state.suncl[day] = "white";
      } else if (this.state.data.data[0].time.sun[day] === 2) {
        this.state.suncl[day] = "green";
      }
    }
  }
  onClick() {
    this.props.history.push({
      pathname: "/student_register"
    });
  }

  render() {
    // return;
    return (
      <div>
        <NvBarCom props={this.props}></NvBarCom>
        <Card className="testMargin">
          <Grid
            container
            component="main"
            className="backgroundPrimaryOne cp"
            justify="center"
          >
            <CssBaseline />
            <Grid item xs={false} sm={4} md={4}>
              <Grid container justify="center">
                <div className="sn">{this.state.data.data[0].subName}</div>
              </Grid>
              <br></br>
              <div>
                <Card className="card">
                  <CardMedia
                    className="cardMedia"
                    image={this.state.data.data[0].data.img}
                    title="Image title"
                  />
                  <CardContent className="cardContent">
                    <Typography gutterBottom variant="h5" component="h2">
                      {this.state.data.data[0].data.tutor_name}
                    </Typography>
                    <Typography>
                      {this.state.data.data[0].data.detail}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid item xs={12}>
                <div className="hnaja">ตารางเรียน</div>
              </Grid>
              <Grid container justify="center" className="padnaja">
                <CssBaseline />
                {/* row 1 title */}
                <Grid container justify="flex-start">
                  <Grid item xs={12} md={1}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={12}>
                        <Box border={1} className="border-table2">
                          DAY/ TIME
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box border={1} className="border-table2">
                          8.00 -<br></br> 9.00
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box border={1} className="border-table2">
                          9.00 - 10.00
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box border={1} className="border-table2">
                          10.00 - 11.00
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box border={1} className="border-table2">
                          11.00 - 12.00
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box border={1} className="border-table2">
                          12.00 - 13.00
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box border={1} className="border-table2">
                          13.00 - 14.00
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box border={1} className="border-table2">
                          14.00 - 15.00
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box border={1} className="border-table2">
                          16.00 - 17.00
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box border={1} className="border-table2">
                          18.00 - 19.00
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box border={1} className="border-table2">
                          19.00 - 20.00
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={1}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={12}>
                        <Box border={1} className="border-table2">
                          20.00 - 21.00
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                {/* row 2 */}
                <Grid container justify="flex-start">
                  <Grid item xs={12} md={1}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={12}>
                        <Box border={1} className="border-table2">
                          จันทร์
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.moncl[0]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.moncl[1]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.moncl[2]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.moncl[3]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.moncl[4]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.moncl[5]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.moncl[6]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.moncl[7]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.moncl[8]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.moncl[9]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={1}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={12}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.moncl[10]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                {/* row 3 */}
                <Grid container justify="flex-start">
                  <Grid item xs={12} md={1}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={12}>
                        <Box border={1} className="border-table2">
                          อังคาร
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.tuecl[0]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.tuecl[1]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.tuecl[2]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.tuecl[3]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.tuecl[4]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.tuecl[5]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.tuecl[6]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.tuecl[7]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.tuecl[8]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.tuecl[9]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={1}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={12}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.tuecl[10]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                {/* row 4 */}
                <Grid container justify="flex-start">
                  <Grid item xs={12} md={1}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={12}>
                        <Box border={1} className="border-table2">
                          พุธ
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.wedcl[0]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.wedcl[1]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.wedcl[2]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.wedcl[3]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.wedcl[4]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.wedcl[5]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.wedcl[6]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.wedcl[7]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.wedcl[8]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.wedcl[9]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={1}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={12}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.wedcl[10]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                {/* row 5 */}
                <Grid container justify="flex-start">
                  <Grid item xs={12} md={1}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={12}>
                        <Box border={1} className="border-table2">
                          พฤหัสบดี
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.thucl[0]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.thucl[1]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.thucl[2]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.thucl[3]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.thucl[4]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.thucl[5]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.thucl[6]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.thucl[7]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.thucl[8]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.thucl[9]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={1}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={12}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.thucl[10]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                {/* row 6 */}
                <Grid container justify="flex-start">
                  <Grid item xs={12} md={1}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={12}>
                        <Box border={1} className="border-table2">
                          ศุกร์
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.fricl[0]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.fricl[1]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.fricl[2]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.fricl[3]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.fricl[4]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.fricl[5]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.fricl[6]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.fricl[7]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.fricl[8]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.fricl[9]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={1}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={12}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.fricl[10]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                {/* row 7*/}
                <Grid container justify="flex-start">
                  <Grid item xs={12} md={1}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={12}>
                        <Box border={1} className="border-table2">
                          เสาร์
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.satcl[0]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.satcl[1]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.satcl[2]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.satcl[3]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.satcl[4]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.satcl[5]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.satcl[6]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.satcl[7]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.satcl[8]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.satcl[9]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={1}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={12}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.satcl[10]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                {/* row 8 */}
                <Grid container justify="flex-start">
                  <Grid item xs={12} md={1}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={12}>
                        <Box border={1} className="border-table2">
                          อาทิตย์
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.suncl[0]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.suncl[1]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.suncl[2]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.suncl[3]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.suncl[4]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.suncl[5]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.suncl[6]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.suncl[7]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.suncl[8]
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.suncl[9]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={1}>
                    <Grid container justify="flex-start">
                      <Grid item xs={12} md={12}>
                        <Box
                          border={1}
                          className="border-table2"
                          style={{
                            backgroundColor: this.state.suncl[10]
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container justify="center">
                <img
                  src={require("./styles/images/chat.png")}
                  width="500px"
                ></img>
              </Grid>
            </Grid>
            {/* collumn of promotion */}
            <Grid item xs={12} md={2}>
              <Grid container justify="flex-start" className="martop">
                <Box className="border-table-start2">
                  <Grid item xs={12}>
                    <div className="ty">จำนวนเวลา</div>
                  </Grid>
                  <Grid item xs={12}>
                    <div className="tw">เรียนแล้ว/ เรียนทั้งหมด</div>
                  </Grid>
                </Box>
                <Box className="border-table-start">
                  <Grid item xs={12}>
                    <div className="cl">2 ชม. /</div>
                  </Grid>
                  <Grid item xs={12}>
                    <div className="cl">20ชม.</div>
                  </Grid>
                </Box>
                <Grid container justify="center">
                  <button className="buy2" onClick={this.onClick.bind(this)}>
                    เริ่มเรียน
                  </button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}
export default StartLearn;
