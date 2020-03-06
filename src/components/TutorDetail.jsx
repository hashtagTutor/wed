import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import "./styles/tutordetail.css";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Card, CardContent } from "@material-ui/core";
import NvBarCom from "./NvBar";
class TutorDetail extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    if (props.location.state === undefined) {
    } else {
      this.state = {
        login: props.location.state.login,
        user_path: props.location.state.user_path,
        subject: [],
        class: [1, 2],
        status: props.location.state.status,
        data: props.location.state.data,
        subName: props.location.subName,
        subpath: props.location.subpath
      };
    }
  }
  onClick() {
    if (this.state.user_path === undefined) {
      this.props.history.push({
        pathname: "/student_register"
      });
    } else {
      this.props.history.push({
        pathname: "/table",
        state: this.state
      });
    }
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
                <div className="sn">{this.state.subName}</div>
              </Grid>
              <br></br>
              <div>
                <Card className="card">
                  <CardMedia
                    className="cardMedia"
                    image={this.state.data.img}
                    title="Image title"
                  />
                  <CardContent className="cardContent">
                    <Typography gutterBottom variant="h5" component="h2">
                      {this.state.data.tutor_name}
                    </Typography>
                    <Typography>{this.state.data.grad}</Typography>
                  </CardContent>
                </Card>
              </div>
            </Grid>
            <Grid item xs={12} md={2}></Grid>
            {/* collumn of promotion */}
            <Grid item xs={12} md={6}>
              <Grid container justify="flex-start">
                <Grid item xs={12}>
                  <div className="sn">รายละเอียด</div>
                </Grid>
                <Grid item xs={12}>
                  <div className="dt">{this.state.data.detail}</div>
                  <br></br>
                  <br></br>
                </Grid>
                <Grid item xs={12}>
                  <div className="cl">จำนวน : {this.state.data.hr} ชั่วโมง</div>
                  <br></br>
                </Grid>
                <Grid item xs={12}>
                  <div className="cl">ราคา : {this.state.data.price} บาท</div>
                  <br></br>
                </Grid>
                <Grid item xs={12}>
                  <button className="buy" onClick={this.onClick.bind(this)}>
                    ซื้อคอร์สนี้
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
export default TutorDetail;
