import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import "./styles/tutordetail.css";
import "./styles/start.css";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Card, CardContent } from "@material-ui/core";
import NvBarCom from "./NvBar";
import Box from "@material-ui/core/Box";

import { firebaseConfig } from "./configDB/cofig";
import firebase, { app } from "firebase";
class StartTeacher extends React.Component {
  constructor(props) {
    super(props);
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
    console.log(props);
    this.state = {
      course_data: {
        time: {
          mon: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          tue: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          wed: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          thu: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          fri: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          sat: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          sun: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
      },
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
    this.dataBase = firebase.database().ref(this.state.course_path);
    this.dataBase.on("value", gotdata => {
      var course_data = gotdata.val();
      this.setState({ course_data: course_data });
      // monday
      for (var day in this.state.course_data.time.mon) {
        this.state.mon[day] = this.state.course_data.time.mon[day];
        if (this.state.course_data.time.mon[day] === 0) {
          this.state.moncl[day] = "white";
        } else if (this.state.course_data.time.mon[day] === 1) {
          this.state.moncl[day] = "blue";
        } else if (this.state.course_data.time.mon[day] === 2) {
          this.state.moncl[day] = "green";
        }
        this.setState({ mon: this.state.mon, moncl: this.state.moncl });
      } // tueday
      for (var day in this.state.course_data.time.tue) {
        this.state.tue[day] = this.state.course_data.time.tue[day];
        if (this.state.course_data.time.tue[day] === 0) {
          this.state.tuecl[day] = "white";
        } else if (this.state.course_data.time.tue[day] === 1) {
          this.state.tuecl[day] = "blue";
        } else if (this.state.course_data.time.tue[day] === 2) {
          this.state.tuecl[day] = "green";
        }
        this.setState({ tue: this.state.tue, tuecl: this.state.tuecl });
      } // wednesday
      for (var day in this.state.course_data.time.wed) {
        this.state.wed[day] = this.state.course_data.time.wed[day];
        if (this.state.course_data.time.wed[day] === 0) {
          this.state.wedcl[day] = "white";
        } else if (this.state.course_data.time.wed[day] === 1) {
          this.state.wedcl[day] = "blue";
        } else if (this.state.course_data.time.wed[day] === 2) {
          this.state.wedcl[day] = "green";
        }
        this.setState({ wed: this.state.wed, wedcl: this.state.wedcl });
      } // thureday
      for (var day in this.state.course_data.time.thu) {
        this.state.thu[day] = this.state.course_data.time.thu[day];
        if (this.state.course_data.time.thu[day] === 0) {
          this.state.thucl[day] = "white";
        } else if (this.state.course_data.time.thu[day] === 1) {
          this.state.thucl[day] = "blue";
        } else if (this.state.course_data.time.thu[day] === 2) {
          this.state.thucl[day] = "green";
        }
        this.setState({ thu: this.state.thu, thucl: this.state.thucl });
      } // friday
      for (var day in this.state.course_data.time.fri) {
        this.state.fri[day] = this.state.course_data.time.fri[day];
        if (this.state.course_data.time.fri[day] === 0) {
          this.state.fricl[day] = "white";
        } else if (this.state.course_data.time.fri[day] === 1) {
          this.state.fricl[day] = "blue";
        } else if (this.state.course_data.time.fri[day] === 2) {
          this.state.fricl[day] = "green";
        }
        this.setState({ fri: this.state.fri, fricl: this.state.fricl });
      } // saturday
      for (var day in this.state.course_data.time.sat) {
        this.state.sat[day] = this.state.course_data.time.sat[day];
        if (this.state.course_data.time.sat[day] === 0) {
          this.state.satcl[day] = "white";
        } else if (this.state.course_data.time.sat[day] === 1) {
          this.state.satcl[day] = "blue";
        } else if (this.state.course_data.time.sat[day] === 2) {
          this.state.satcl[day] = "green";
        }
        this.setState({ sat: this.state.sat, satcl: this.state.satcl });
      } // sunday
      for (var day in this.state.course_data.time.sun) {
        this.state.sun[day] = this.state.course_data.time.sun[day];
        if (this.state.course_data.time.sun[day] === 0) {
          this.state.suncl[day] = "white";
        } else if (this.state.course_data.time.sun[day] === 1) {
          this.state.suncl[day] = "blue";
        } else if (this.state.course_data.time.sun[day] === 2) {
          this.state.suncl[day] = "green";
        }
        this.setState({ sun: this.state.sun, suncl: this.state.suncl });
      }
    });
  }
  componentDidMount() {
    // name path
    this.dataBase = firebase.database().ref(this.state.course_path);
    this.dataBase.on("value", gotdata => {
      var course_data = gotdata.val();
      console.log(course_data);
      // monday
      this.state.course_data = course_data;
      for (var day in this.state.course_data.time.mon) {
        this.state.mon[day] = this.state.course_data.time.mon[day];
        if (this.state.course_data.time.mon[day] === 0) {
          this.state.moncl[day] = "white";
        } else if (this.state.course_data.time.mon[day] === 1) {
          this.state.moncl[day] = "blue";
        } else if (this.state.course_data.time.mon[day] === 2) {
          this.state.moncl[day] = "green";
        }
      } // tueday
      for (var day in this.state.course_data.time.tue) {
        this.state.tue[day] = this.state.course_data.time.tue[day];
        if (this.state.course_data.time.tue[day] === 0) {
          this.state.tuecl[day] = "white";
        } else if (this.state.course_data.time.tue[day] === 1) {
          this.state.tuecl[day] = "blue";
        } else if (this.state.course_data.time.tue[day] === 2) {
          this.state.tuecl[day] = "green";
        }
      } // wednesday
      for (var day in this.state.course_data.time.wed) {
        this.state.wed[day] = this.state.course_data.time.wed[day];
        if (this.state.course_data.time.wed[day] === 0) {
          this.state.wedcl[day] = "white";
        } else if (this.state.course_data.time.wed[day] === 1) {
          this.state.wedcl[day] = "blue";
        } else if (this.state.course_data.time.wed[day] === 2) {
          this.state.wedcl[day] = "green";
        }
      } // thureday
      for (var day in this.state.course_data.time.thu) {
        this.state.thu[day] = this.state.course_data.time.thu[day];
        if (this.state.course_data.time.thu[day] === 0) {
          this.state.thucl[day] = "white";
        } else if (this.state.course_data.time.thu[day] === 1) {
          this.state.thucl[day] = "blue";
        } else if (this.state.course_data.time.thu[day] === 2) {
          this.state.thucl[day] = "green";
        }
      } // friday
      for (var day in this.state.course_data.time.fri) {
        this.state.fri[day] = this.state.course_data.time.fri[day];
        if (this.state.course_data.time.fri[day] === 0) {
          this.state.fricl[day] = "white";
        } else if (this.state.course_data.time.fri[day] === 1) {
          this.state.fricl[day] = "blue";
        } else if (this.state.course_data.time.fri[day] === 2) {
          this.state.fricl[day] = "green";
        }
      } // saturday
      for (var day in this.state.course_data.time.sat) {
        this.state.sat[day] = this.state.course_data.time.sat[day];
        if (this.state.course_data.time.sat[day] === 0) {
          this.state.satcl[day] = "white";
        } else if (this.state.course_data.time.sat[day] === 1) {
          this.state.satcl[day] = "blue";
        } else if (this.state.course_data.time.sat[day] === 2) {
          this.state.satcl[day] = "green";
        }
      } // sunday
      for (var day in this.state.course_data.time.sun) {
        this.state.sun[day] = this.state.course_data.time.sun[day];
        if (this.state.course_data.time.sun[day] === 0) {
          this.state.suncl[day] = "white";
        } else if (this.state.course_data.time.sun[day] === 1) {
          this.state.suncl[day] = "blue";
        } else if (this.state.course_data.time.sun[day] === 2) {
          this.state.suncl[day] = "green";
        }
      }
    });
    this.dataBase = firebase.database().ref(this.state.subname_path);
    this.dataBase.on("value", gotdata => {
      var subname = gotdata.val();
      this.setState({ subname: subname });
    });
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
                <div className="sn">{this.state.subname}</div>
              </Grid>
              <br></br>
              <div>
                <Card className="card">
                  <CardMedia
                    className="cardMedia"
                    image={this.state.course_data.img}
                    title="Image title"
                  />
                  <CardContent className="cardContent">
                    <Typography gutterBottom variant="h5" component="h2">
                      {this.state.course_data.tutor_name}
                    </Typography>
                    <Typography>{this.state.course_data.detail}</Typography>
                  </CardContent>
                </Card>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid item xs={12}>
                <div className="hnaja">ตารางสอน</div>
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
                    <div className="tw">สอนแล้ว/ สอนทั้งหมด</div>
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
                    เริ่มสอน
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
export default StartTeacher;
