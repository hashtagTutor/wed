import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import "./styles/aboutWeb.css";
class AboutWeb extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid container component="main" className="root2">
        <CssBaseline />
        <Grid item xs={false} sm={4} md={5} className="img-book" />
        <Grid item xs={12} md={7} className="padding">
          <div className="why">ทำไมต้อง Hashtag Tutor?</div>
          <br></br>
          <span className="HT"> Hashtag Tutor </span>
          <span className="text-detail">
            ให้บรกิารด้านการให้ความรู้ทางการศึกษา
          </span>
          <div className="text-detail">
            {" "}
            ซึ่งเป็นการเรียนพิเศษ ด้วยระบบออนไลน์
          </div>
          <div className="text-detail">
            ไม่ว่าจะอยู่ที่ไหนก็สามารถเรียนรู้ได้เรียนได้ทุกที่ เลือกเวลาได้เอง
          </div>
          <div className="text-detail">
            เหมาะสำหรับนักเรียนที่ต้องการเพิ่มความรู้ เพิ่มเกรด เตรียมสอบ
          </div>
          <br></br>
          <span className="HT"> รับประกัน </span>
          <span className="HT2"> เรีนยเก่งขึ้น 1000% </span>
          <br></br>
          <br></br>
          <br></br>
          <span className="HT"> Hashtag Tutor </span>
          <span className="text-detail">มีติวเตอร์ให้เลือกมากมาย</span>
          <div className="text-detail">
            ผ่านการคัดกรองคุณภาพอย่างเข้มข้น มีเทคนิคการสอนที่แตกต่าง
          </div>
          <div className="text-detail">มากประสบการณ์ ครบจบในที่เดียว</div>
        </Grid>
      </Grid>
    );
  }
}
export default AboutWeb;
