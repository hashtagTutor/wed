import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import "./styles/contact.css";
import NvBarCom from "./NvBar";
class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // return;
    return (
      <div>
        <NvBarCom props={this.props}></NvBarCom>
        <Grid container component="main" className="background_contact">
          <CssBaseline />
          <Grid item xs={false} sm={4} md={5}>
            <Grid container justify="center">
              <img
                src={require("./styles/images/icon_nvBar.png")}
                className="logo_size"
              ></img>
            </Grid>

            <Grid container justify="center">
              <div className="tex_slogan">
                เราให้บริการด้านการให้ความรู้อันเป็นประโยชน์ทางศึกษา
              </div>
            </Grid>
            <Grid container justify="center">
              <div className="tex_slogan">การสอนพิเศษโดยผ่านช่องทางออนไลน์</div>
            </Grid>
            <Grid container justify="center">
              <div className="tex_slogan">
                ซึ่งไม่ว่าจะอยู่ที่ไหนก็สามารถเรียนรู้ได้
              </div>
            </Grid>
          </Grid>
          {/* collumn of promotion */}
          <Grid item xs={12} md={7} className="padTop">
            <Grid container justify="flex-start">
              <Grid item>
                <div className="text_contact">CONTACT</div>
                <br></br>
                <br></br>
                <Grid container justify="flex-start">
                  <Grid item xs={12} md={2}>
                    <img
                      src={require("./styles/images/tel_icon.png")}
                      className="image_size"
                    />
                  </Grid>
                  <Grid item>
                    <div className="text_black">098-7654-321</div>
                  </Grid>
                </Grid>
                <br></br>
                <Grid container justify="flex-start">
                  <Grid item xs={12} md={2}>
                    <img
                      src={require("./styles/images/facebookicon.png")}
                      className="image_size"
                    />
                  </Grid>
                  <Grid item>
                    <div className="text_black">HashtagTutor</div>
                  </Grid>
                </Grid>
                <br></br>
                <Grid container justify="flex-start">
                  <Grid item xs={12} md={2}>
                    <img
                      src={require("./styles/images/lineicon.png")}
                      className="iconLine"
                    />
                  </Grid>
                  <Grid item>
                    <div className="text_black">@HashtagTutor</div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <img
                  src={require("./styles/images/map.png")}
                  className="map_size"
                />
              </Grid>
            </Grid>
            <Grid container justify="flex-start">
              <Grid item>
                <img
                  src={require("./styles/images/browsericon.png")}
                  className="image_size"
                />
              </Grid>
              <Grid item>
                <div className="text_black">www.HashtagTuor.ac.th</div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Contact;
