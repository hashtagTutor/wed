import React from "react";
import Grid from "@material-ui/core/Grid";
import NvBarCom from "./NvBar";
import "./styles/courses.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { firebaseConfig } from "./configDB/cofig";
import firebase, { app } from "firebase";

class Tutorcourse extends React.Component {
  constructor(props) {
    super(props);
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
    this.state = {
      login: props.location.state.login,
      user_path: props.location.state.user_path,
      mycourse: [],
      subName: "",
      status: props.location.state.status
    };
  }
  componentDidMount() {
    // name path
    this.dataBase = firebase
      .database()
      .ref(this.props.location.state.user_path + "/mycourse");
    this.dataBase.on("value", gotdata => {
      var course_data = gotdata.val();
      if (course_data === null) {
        this.setState({ mycourse: [] });
      } else {
        this.setState({ mycourse: course_data });
      }
    });
    this.dataBase = firebase
      .database()
      .ref(this.props.location.state.user_path + "/sub");
    this.dataBase.on("value", gotdata => {
      var subname_data = gotdata.val();
      this.setState({ subName: subname_data });
    });
  }
  // add course
  onclickOK() {
    this.props.history.push({
      pathname: "/subject_register",
      state: this.state
    });
  }
  onclickcard(index) {
    this.props.history.push({
      pathname: "/start_teach",
      state: {
        login: this.state.login,
        course_path: this.state.user_path + "/mycourse/" + index,
        subname_path: this.props.location.state.user_path + "/sub",
        status: this.props.location.state.status,
        user_path: this.props.location.state.user_path
      }
    });
  }
  render() {
    var index = 0;
    return (
      <div>
        <NvBarCom props={this.props}></NvBarCom>
        <Grid
          container
          component="main"
          className="root bg-my"
          justify="center"
        >
          <CssBaseline />
          <div>
            <Grid item md={12}>
              <div className="t-my">คอร์สที่สอน</div>
            </Grid>
            {/* teacher list */}
            <Card className="box">
              <CardMedia className="color">
                <Container className="cardGrid">
                  <Grid container spacing={4}>
                    {this.state.mycourse.map(teacher => {
                      index++;
                      return (
                        <Grid item key={index - 1} xs={12} md={3}>
                          <div className="sub-name-new">
                            {this.state.subName}
                          </div>
                          <Card
                            className="card"
                            value={teacher}
                            onClick={this.onclickcard.bind(this, index - 1)}
                          >
                            <CardMedia
                              value={teacher}
                              className="cardMedia"
                              image={teacher.img}
                              title="Image title"
                            />
                            <CardContent className="cardContent">
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                              >
                                {teacher.tutor_name}
                              </Typography>
                              <Typography>{teacher.detail}</Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Container>
                <Grid container justify="center">
                  <button className="add" onClick={this.onclickOK.bind(this)}>
                    เพิ่มคอร์ส
                  </button>
                </Grid>
              </CardMedia>
            </Card>
          </div>
        </Grid>
      </div>
    );
  }
}
export default Tutorcourse;
