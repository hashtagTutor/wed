import React from "react";
import Grid from "@material-ui/core/Grid";
import NvBarCom from "./NvBar";
import "./styles/courses.css";
import { Link, Divider } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { firebaseConfig } from "./configDB/cofig";
import firebase, { app } from "firebase";
class Courses extends React.Component {
  constructor(props) {
    super(props);
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
    if (props.location.state === undefined) {
      this.state = { login: false, subject: [], class: [], data: "" };
    } else {
      this.state = {
        login: props.location.state.login,
        user_path: props.location.state.user_path,
        subject: [],
        class: [],
        status: props.location.state.status,
        data: ""
      };
    }
  }
  componentDidMount() {
    // name path
    this.dataBase = firebase.database().ref("allcourse");
    this.dataBase.on("value", gotdata => {
      var course_data = gotdata.val();
      var i = 0;
      for (var j in course_data) {
        this.state.subject[i] = j;
        this.state.class[i] = course_data[j];
        i++;
      }
      this.setState({ subject: this.state.subject });
    });
  }
  onclickcard(teacher, index) {
    this.state.data = teacher;
    if (index === 0) {
      this.props.history.push({
        pathname: "/tutor_detail",
        state: this.state,
        subName: this.state.subject[index],
        subpath: this.state.subject[index] + "/" + index
      });
    } else {
      this.props.history.push({
        pathname: "/tutor_detail",
        state: this.state,
        subName: this.state.subject[index],
        subpath: this.state.subject[index] + "/" + 0
      });
    }
  }
  render() {
    var cn = 0,
      sn = 0;
    return (
      <div>
        <NvBarCom props={this.props}></NvBarCom>
        <Grid container component="main" className="root bg" justify="center">
          <CssBaseline />
          {this.state.subject.map(sub => {
            cn++;
            return (
              <div key={sub}>
                <Grid item md={12}>
                  <div className="sub-name">{sub}</div>
                </Grid>
                {/* teacher list */}
                <Card className="box">
                  <CardMedia className="color">
                    <Container className="cardGrid">
                      <Grid container spacing={4}>
                        {this.state.class[cn - 1].map(teacher => {
                          return (
                            <Grid item key={teacher} xs={12} md={3}>
                              <Card
                                className="card"
                                value={teacher}
                                onClick={this.onclickcard.bind(
                                  this,
                                  teacher,
                                  cn - 1
                                )}
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
                  </CardMedia>
                </Card>
              </div>
            );
          })}
        </Grid>
      </div>
    );
  }
}
export default Courses;
