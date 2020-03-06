import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import "./styles/step.css";
import NvBarCom from "./NvBar";
class Step extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // return;
    return (
      <div>
        <NvBarCom props={this.props}></NvBarCom>
        <Grid container component="main" className="background_Step">
          <CssBaseline />
          <Grid item xs={false} md={12}>
            <div className="text_step">ขั้นตอนการสมัครเรียน</div>
            <br></br>
          </Grid>

          <Grid item xs={12} md={12}>
            <Grid container justify="center">
              <Grid item xs={12} md={4}>
                <Grid container justify="center">
                  <Grid item>
                    <button className="set_btn" disabled>
                      1
                    </button>
                  </Grid>
                  <Grid item>
                    <div className="set_text_step mar_step_1">เลือกวิชา</div>
                  </Grid>
                </Grid>
                <img
                  src={require("./styles/images/step1.png")}
                  className="set_img_size"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Grid container justify="center">
                  <Grid item>
                    <button className="set_btn" disabled>
                      2
                    </button>
                  </Grid>
                  <Grid item>
                    <div className="set_text_step mar_step_2">
                      เลือกติวเตอร์
                    </div>
                  </Grid>
                </Grid>
                <img
                  src={require("./styles/images/step2.png")}
                  className="set_img_size"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Grid container justify="center">
                  <Grid item>
                    <button className="set_btn" disabled>
                      3
                    </button>
                  </Grid>
                  <Grid item>
                    <div className="set_text_step mar_step_3">ซื้อคอร์ส</div>
                  </Grid>
                </Grid>
                <img
                  src={require("./styles/images/step3.png")}
                  className="set_img_size"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Step;
