import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import "./styles/home1.css";
import AboutWeb from "./AboutWeb";
import PrimaryOne from "./PrimaryOne";
import HighSchool from "./HighSchool";
import NvBarCom from "./NvBar";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: false };
  }
  render() {
    return (
      <div>
        <NvBarCom props={this.props} state={this.state}></NvBarCom>
        <Grid container component="main" className="background">
          <CssBaseline />
          <Grid item xs={12} md={6}>
            <div className="set_text_Htutor">#TUTOR</div>
            <div className="set_text">เรียนออนไลน์กับติวเตอร์ที่ใช่</div>
            <div align="right" valign="top"></div>
            <Grid container justify="flex-end">
              <Grid item>
                <img src={require("./styles/images/play.png")} />
              </Grid>
              <Grid item>
                <div className="set_text">ได้ทุกที่ทุกเวลา</div>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={1}>
            <img
              src={require("./styles/images/home2.png")}
              className="set_imageH2"
            />
          </Grid>
          <Grid item xs={12} md={5} className="set_imageH1">
            <img
              src={require("./styles/images/home.png")}
              className="test_imageH1"
            />
          </Grid>
          {/* button connection */}
          <Grid container className="container-btn">
            <Grid item xs={12} md={4} className="set_imageH1">
              <Grid container justify="center">
                <Grid item>
                  <img
                    src={require("./styles/images/facebookicon.png")}
                    className="facebookicon"
                  />
                </Grid>
                <Grid item className="set_button">
                  <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    href="https://www.facebook.com/"
                  >
                    HashtagTutor
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4} className="set_imageH1">
              <Grid container justify="center">
                <Grid item>
                  <img
                    src={require("./styles/images/lineicon.png")}
                    className="lineicon"
                  />
                </Grid>
                <Grid item valign="center" className="set_button">
                  <Button variant="contained" size="large" color="primary">
                    @HashtagTutor
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4} className="set_imageH1">
              <Grid container justify="center">
                <Grid item>
                  <img
                    src={require("./styles/images/browsericon.png")}
                    className="browsericon"
                  />
                </Grid>
                <Grid item className="set_button">
                  <Button variant="contained" size="large" color="primary">
                    www.HashtagTutor.ac.th
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <AboutWeb props={this.props}></AboutWeb>
        <PrimaryOne props={this.props}></PrimaryOne>
        <HighSchool props={this.props}></HighSchool>
      </div>
    );
  }
}
export default Home;
