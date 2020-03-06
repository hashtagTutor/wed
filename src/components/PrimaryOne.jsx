import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import "./styles/primary_1.css";
import { Card, CardContent } from "@material-ui/core";
class PrimaryOne extends React.Component {
  constructor(props) {
    super(props);
  }
  onClick() {
    this.props.props.history.push({
      pathname: "/student_register"
    });
  }
  render() {
    // return;
    return (
      <Card className="testMargin">
        <Grid container component="main" className="backgroundPrimaryOne">
          <CssBaseline />
          <Grid item xs={false} sm={4} md={6}>
            <div className="title_header">คอร์สเรียนสำหรับน้อง ๆ</div>
            <br></br>
            <div className="primary_text">ประถมศึกษา</div>
            <br></br>
            <div className="padding_normal_text">
              <Grid container justify="flex-start">
                <Grid item>
                  <img src={require("./styles/images/check_icon.png")} />
                </Grid>
                <Grid item>
                  <div className="normal_text_red">เตรียมสอบเข้ามัธยม</div>
                </Grid>
              </Grid>
              <Grid container justify="flex-start">
                <Grid item>
                  <img src={require("./styles/images/check_icon.png")} />
                </Grid>
                <Grid item>
                  <div className="normal_text_red">ปรับพื้นฐาน</div>
                </Grid>
              </Grid>
              <Grid container justify="flex-start">
                <Grid item>
                  <img src={require("./styles/images/check_icon.png")} />
                </Grid>
                <Grid item>
                  <div className="normal_text_red">เรียนเพิ่มเกรด</div>
                </Grid>
              </Grid>
              <Grid container justify="flex-start">
                <Grid item>
                  <img src={require("./styles/images/check_icon.png")} />
                </Grid>
                <Grid item>
                  <div className="normal_text_red">เก่งขึ้น 100%</div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          {/* collumn of promotion */}
          <Grid item xs={12} md={6}>
            <div className="padding_normal_text_black">
              <Grid container justify="flex-end">
                <button className="pro-btn" onClick={this.onClick.bind(this)}>
                  Promotion
                </button>
              </Grid>
              <br></br>
              <br></br>
              <Grid container justify="flex-end">
                <div className="normal_text_black">
                  คอร์สเดี่ยว/ 12 ชม. เพียง 700บาท
                </div>
              </Grid>
              <br></br>
              <br></br>
              <Grid container justify="flex-end">
                <div className="normal_text_black">
                  คอร์ส 2-4 คน/ 12 ชม. เพียง 1400บาท
                </div>
              </Grid>
              <br></br>
              <br></br>
              <Grid container justify="flex-end">
                <button className="subject-btn">วิชาที่เปิดสอน</button>
              </Grid>
              <br></br>
              <Grid container justify="flex-end">
                <div className="subject_text">
                  คณิตศาสตร์, วิทยาศาสตร์, ภาษาอังกฤษ
                </div>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Card>
    );
  }
}
export default PrimaryOne;
