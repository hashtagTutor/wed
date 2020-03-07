import React from "react";
import Grid from "@material-ui/core/Grid";
import NvBarCom from "./NvBar";
import "./styles/table.css";
import Card from "@material-ui/core/Card";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { firebaseConfig } from "./configDB/cofig";
import firebase, { app } from "firebase";

class Table extends React.Component {
  constructor(props) {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
    super(props);
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
      course_path: props.location.state.subpath,
      user_path: props.location.state.user_path,
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
      ],
      status: props.location.state.status,
      data: props.location.state.data,
      subName: props.location.state.subName
    };

    this.dataBase = firebase
      .database()
      .ref("allcourse/" + this.state.course_path);
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
          this.state.moncl[day] = "red";
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
          this.state.tuecl[day] = "red";
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
          this.state.wedcl[day] = "red";
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
          this.state.thucl[day] = "red";
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
          this.state.fricl[day] = "red";
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
          this.state.satcl[day] = "red";
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
          this.state.suncl[day] = "red";
        }
        this.setState({ sun: this.state.sun, suncl: this.state.suncl });
      }
    });
  }
  onclickOK() {
    this.props.history.push({
      pathname: "/payment",
      state: this.state
    });
  }
  // monday
  onClickM1(index) {
    // console.log(this.state);
    if (this.state.mon[index] === 2) {
      this.state.mon[index] = 1;
      this.state.moncl[index] = "blue";
      this.setState({ mon: this.state.mon, moncl: this.state.moncl });
    } else if (this.state.mon[index] === 1) {
      this.state.mon[index] = 2;
      this.state.moncl[index] = "green";
      this.setState({ mon: this.state.mon, moncl: this.state.moncl });
    }
  }
  onClickTue(index) {
    if (this.state.tue[index] === 2) {
      this.state.tue[index] = 1;
      this.state.tuecl[index] = "blue";
      this.setState({ tue: this.state.tue, tuecl: this.state.tuecl });
    } else if (this.state.tue[index] === 1) {
      this.state.tue[index] = 2;
      this.state.tuecl[index] = "green";
      this.setState({ tue: this.state.tue, tuecl: this.state.tuecl });
    }
  }
  onClickWed(index) {
    if (this.state.wed[index] === 2) {
      this.state.wed[index] = 1;
      this.state.wedcl[index] = "blue";
      this.setState({ wed: this.state.wed, wedcl: this.state.wedcl });
    } else if (this.state.wed[index] === 1) {
      this.state.wed[index] = 2;
      this.state.wedcl[index] = "green";
      this.setState({ wed: this.state.wed, wedcl: this.state.wedcl });
    }
  }
  onClickThu(index) {
    if (this.state.thu[index] === 2) {
      this.state.thu[index] = 1;
      this.state.thucl[index] = "blue";
      this.setState({ thu: this.state.thu, thucl: this.state.thucl });
    } else if (this.state.thu[index] === 1) {
      this.state.thu[index] = 2;
      this.state.thucl[index] = "green";
      this.setState({ thu: this.state.thu, thucl: this.state.thucl });
    }
  }
  onClickFri(index) {
    if (this.state.fri[index] === 2) {
      this.state.fri[index] = 1;
      this.state.fricl[index] = "blue";
      this.setState({ fri: this.state.fri, fricl: this.state.fricl });
    } else if (this.state.fri[index] === 1) {
      this.state.fri[index] = 2;
      this.state.fricl[index] = "green";
      this.setState({ fri: this.state.fri, fricl: this.state.fricl });
    }
  }
  onClickSat(index) {
    if (this.state.sat[index] === 2) {
      this.state.sat[index] = 1;
      this.state.satcl[index] = "blue";
      this.setState({ sat: this.state.sat, satcl: this.state.satcl });
    } else if (this.state.sat[index] === 1) {
      this.state.sat[index] = 2;
      this.state.satcl[index] = "green";
      this.setState({ sat: this.state.sat, satcl: this.state.satcl });
    }
  }
  onClickSun(index) {
    if (this.state.sun[index] === 2) {
      this.state.sun[index] = 1;
      this.state.suncl[index] = "blue";
      this.setState({ sun: this.state.sun, suncl: this.state.suncl });
    } else if (this.state.sun[index] === 1) {
      this.state.sun[index] = 2;
      this.state.suncl[index] = "green";
      this.setState({ sun: this.state.sun, suncl: this.state.suncl });
    }
  }
  componentDidMount() {
    // name path
    this.dataBase = firebase
      .database()
      .ref("allcourse/" + this.state.course_path);
    this.dataBase.on("value", gotdata => {
      var course_data = gotdata.val();
      // monday
      this.state.course_data = course_data;
      for (var day in this.state.course_data.time.mon) {
        this.state.mon[day] = this.state.course_data.time.mon[day];
        if (this.state.course_data.time.mon[day] === 0) {
          this.state.moncl[day] = "white";
        } else if (this.state.course_data.time.mon[day] === 1) {
          this.state.moncl[day] = "blue";
        } else if (this.state.course_data.time.mon[day] === 2) {
          this.state.moncl[day] = "red";
        }
      } // tueday
      for (var day in this.state.course_data.time.tue) {
        this.state.tue[day] = this.state.course_data.time.tue[day];
        if (this.state.course_data.time.tue[day] === 0) {
          this.state.tuecl[day] = "white";
        } else if (this.state.course_data.time.tue[day] === 1) {
          this.state.tuecl[day] = "blue";
        } else if (this.state.course_data.time.tue[day] === 2) {
          this.state.tuecl[day] = "red";
        }
      } // wednesday
      for (var day in this.state.course_data.time.wed) {
        this.state.wed[day] = this.state.course_data.time.wed[day];
        if (this.state.course_data.time.wed[day] === 0) {
          this.state.wedcl[day] = "white";
        } else if (this.state.course_data.time.wed[day] === 1) {
          this.state.wedcl[day] = "blue";
        } else if (this.state.course_data.time.wed[day] === 2) {
          this.state.wedcl[day] = "red";
        }
      } // thureday
      for (var day in this.state.course_data.time.thu) {
        this.state.thu[day] = this.state.course_data.time.thu[day];
        if (this.state.course_data.time.thu[day] === 0) {
          this.state.thucl[day] = "white";
        } else if (this.state.course_data.time.thu[day] === 1) {
          this.state.thucl[day] = "blue";
        } else if (this.state.course_data.time.thu[day] === 2) {
          this.state.thucl[day] = "red";
        }
      } // friday
      for (var day in this.state.course_data.time.fri) {
        this.state.fri[day] = this.state.course_data.time.fri[day];
        if (this.state.course_data.time.fri[day] === 0) {
          this.state.fricl[day] = "white";
        } else if (this.state.course_data.time.fri[day] === 1) {
          this.state.fricl[day] = "blue";
        } else if (this.state.course_data.time.fri[day] === 1) {
          this.state.fricl[day] = "red";
        }
      } // saturday
      for (var day in this.state.course_data.time.sat) {
        this.state.sat[day] = this.state.course_data.time.sat[day];
        if (this.state.course_data.time.sat[day] === 0) {
          this.state.satcl[day] = "white";
        } else if (this.state.course_data.time.sat[day] === 1) {
          this.state.satcl[day] = "blue";
        } else if (this.state.course_data.time.sat[day] === 1) {
          this.state.satcl[day] = "red";
        }
      } // sunday
      for (var day in this.state.course_data.time.sun) {
        this.state.sun[day] = this.state.course_data.time.sun[day];
        if (this.state.course_data.time.sun[day] === 0) {
          this.state.suncl[day] = "white";
        } else if (this.state.course_data.time.sun[day] === 1) {
          this.state.suncl[day] = "blue";
        } else if (this.state.course_data.time.sun[day] === 1) {
          this.state.suncl[day] = "red";
        }
      }
    });
    this.setState({ suncl: this.state.suncl });
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <NvBarCom props={this.props}></NvBarCom>
        <Grid container component="main" className="root bg2" justify="center">
          <Card className="card-table">
            <div className="th">เลือกเวลาเรียน</div>
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
              {/* row 2 */}
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
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickM1.bind(this, 0)}
                        style={{
                          backgroundColor: this.state.moncl[0]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickM1.bind(this, 1)}
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
                        className="border-table"
                        onClick={this.onClickM1.bind(this, 2)}
                        style={{
                          backgroundColor: this.state.moncl[2]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickM1.bind(this, 3)}
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
                        className="border-table"
                        onClick={this.onClickM1.bind(this, 4)}
                        style={{
                          backgroundColor: this.state.moncl[4]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickM1.bind(this, 5)}
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
                        className="border-table"
                        onClick={this.onClickM1.bind(this, 6)}
                        style={{
                          backgroundColor: this.state.moncl[6]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickM1.bind(this, 7)}
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
                        className="border-table"
                        onClick={this.onClickM1.bind(this, 8)}
                        style={{
                          backgroundColor: this.state.moncl[8]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickM1.bind(this, 9)}
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
                        className="border-table"
                        onClick={this.onClickM1.bind(this, 10)}
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
                      <Box border={1} className="border-table">
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
                        className="border-table"
                        onClick={this.onClickTue.bind(this, 0)}
                        style={{
                          backgroundColor: this.state.tuecl[0]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickTue.bind(this, 1)}
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
                        className="border-table"
                        onClick={this.onClickTue.bind(this, 2)}
                        style={{
                          backgroundColor: this.state.tuecl[2]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickTue.bind(this, 3)}
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
                        className="border-table"
                        onClick={this.onClickTue.bind(this, 4)}
                        style={{
                          backgroundColor: this.state.tuecl[4]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickTue.bind(this, 5)}
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
                        className="border-table"
                        onClick={this.onClickTue.bind(this, 6)}
                        style={{
                          backgroundColor: this.state.tuecl[6]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickTue.bind(this, 7)}
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
                        className="border-table"
                        onClick={this.onClickTue.bind(this, 8)}
                        style={{
                          backgroundColor: this.state.tuecl[8]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickTue.bind(this, 9)}
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
                        className="border-table"
                        onClick={this.onClickTue.bind(this, 10)}
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
                      <Box border={1} className="border-table">
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
                        className="border-table"
                        onClick={this.onClickWed.bind(this, 0)}
                        style={{
                          backgroundColor: this.state.wedcl[0]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickWed.bind(this, 1)}
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
                        className="border-table"
                        onClick={this.onClickWed.bind(this, 2)}
                        style={{
                          backgroundColor: this.state.wedcl[2]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickWed.bind(this, 3)}
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
                        className="border-table"
                        onClick={this.onClickWed.bind(this, 4)}
                        style={{
                          backgroundColor: this.state.wedcl[4]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickWed.bind(this, 5)}
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
                        className="border-table"
                        onClick={this.onClickWed.bind(this, 6)}
                        style={{
                          backgroundColor: this.state.wedcl[6]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickWed.bind(this, 7)}
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
                        className="border-table"
                        onClick={this.onClickWed.bind(this, 8)}
                        style={{
                          backgroundColor: this.state.wedcl[8]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickWed.bind(this, 9)}
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
                        className="border-table"
                        onClick={this.onClickWed.bind(this, 10)}
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
                      <Box border={1} className="border-table">
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
                        className="border-table"
                        onClick={this.onClickThu.bind(this, 0)}
                        style={{
                          backgroundColor: this.state.thucl[0]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickThu.bind(this, 1)}
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
                        className="border-table"
                        onClick={this.onClickThu.bind(this, 2)}
                        style={{
                          backgroundColor: this.state.thucl[2]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickThu.bind(this, 3)}
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
                        className="border-table"
                        onClick={this.onClickThu.bind(this, 4)}
                        style={{
                          backgroundColor: this.state.thucl[4]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickThu.bind(this, 5)}
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
                        className="border-table"
                        onClick={this.onClickThu.bind(this, 6)}
                        style={{
                          backgroundColor: this.state.thucl[6]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickThu.bind(this, 7)}
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
                        className="border-table"
                        onClick={this.onClickThu.bind(this, 8)}
                        style={{
                          backgroundColor: this.state.thucl[8]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickThu.bind(this, 9)}
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
                        className="border-table"
                        onClick={this.onClickThu.bind(this, 10)}
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
                      <Box border={1} className="border-table">
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
                        className="border-table"
                        onClick={this.onClickFri.bind(this, 0)}
                        style={{
                          backgroundColor: this.state.fricl[0]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickFri.bind(this, 1)}
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
                        className="border-table"
                        onClick={this.onClickFri.bind(this, 2)}
                        style={{
                          backgroundColor: this.state.fricl[2]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickFri.bind(this, 3)}
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
                        className="border-table"
                        onClick={this.onClickFri.bind(this, 4)}
                        style={{
                          backgroundColor: this.state.fricl[4]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickFri.bind(this, 5)}
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
                        className="border-table"
                        onClick={this.onClickFri.bind(this, 6)}
                        style={{
                          backgroundColor: this.state.fricl[6]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickFri.bind(this, 7)}
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
                        className="border-table"
                        onClick={this.onClickFri.bind(this, 8)}
                        style={{
                          backgroundColor: this.state.fricl[8]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickFri.bind(this, 9)}
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
                        className="border-table"
                        onClick={this.onClickFri.bind(this, 10)}
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
                      <Box border={1} className="border-table">
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
                        className="border-table"
                        onClick={this.onClickSat.bind(this, 0)}
                        style={{
                          backgroundColor: this.state.satcl[0]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickSat.bind(this, 1)}
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
                        className="border-table"
                        onClick={this.onClickSat.bind(this, 2)}
                        style={{
                          backgroundColor: this.state.satcl[2]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickSat.bind(this, 3)}
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
                        className="border-table"
                        onClick={this.onClickSat.bind(this, 4)}
                        style={{
                          backgroundColor: this.state.satcl[4]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickSat.bind(this, 5)}
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
                        className="border-table"
                        onClick={this.onClickSat.bind(this, 6)}
                        style={{
                          backgroundColor: this.state.satcl[6]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickSat.bind(this, 7)}
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
                        className="border-table"
                        onClick={this.onClickSat.bind(this, 8)}
                        style={{
                          backgroundColor: this.state.satcl[8]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickSat.bind(this, 9)}
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
                        className="border-table"
                        onClick={this.onClickSat.bind(this, 10)}
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
                      <Box border={1} className="border-table">
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
                        className="border-table"
                        onClick={this.onClickSun.bind(this, 0)}
                        style={{
                          backgroundColor: this.state.suncl[0]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickSun.bind(this, 1)}
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
                        className="border-table"
                        onClick={this.onClickSun.bind(this, 2)}
                        style={{
                          backgroundColor: this.state.suncl[2]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickSun.bind(this, 3)}
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
                        className="border-table"
                        onClick={this.onClickSun.bind(this, 4)}
                        style={{
                          backgroundColor: this.state.suncl[4]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickSun.bind(this, 5)}
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
                        className="border-table"
                        onClick={this.onClickSun.bind(this, 6)}
                        style={{
                          backgroundColor: this.state.suncl[6]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickSun.bind(this, 7)}
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
                        className="border-table"
                        onClick={this.onClickSun.bind(this, 8)}
                        style={{
                          backgroundColor: this.state.suncl[8]
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        border={1}
                        className="border-table"
                        onClick={this.onClickSun.bind(this, 9)}
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
                        className="border-table"
                        onClick={this.onClickSun.bind(this, 10)}
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
export default Table;
