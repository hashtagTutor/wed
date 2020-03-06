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

class Mycourse extends React.Component {
  constructor(props) {
    super(props);
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
    this.state = {
      subject: ["thai", "eng", "ddd"],
      teacher: [1, 2, 3],
      user_path: props.location.state.user_path,
      login: props.location.state.login,
      status: props.location.state.status,
      data: []
    };
    this.cn = 0;
  }
  componentDidMount() {
    this.dataBase = firebase.database().ref(this.state.user_path + "/mycourse");
    this.dataBase.on("value", gotdata => {
      var user_data = gotdata.val();
      console.log(user_data);
      if (user_data == null) {
        this.cn = 0;
      } else {
        this.cn = Object.keys(user_data).length;
      }
      if (this.cn === 0) {
        this.setState({ data: [] });
      } else {
        this.setState({ data: user_data });
      }
    });
  }

  onclickcard(teacher) {
    this.props.history.push({
      pathname: "/start",
      state: this.state
    });
    console.log(teacher);
  }
  render() {
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
              <div className="t-my">คอร์สของฉัน</div>
            </Grid>
            {/* teacher list */}
            <Card className="box">
              <CardMedia className="color">
                <Container className="cardGrid">
                  <Grid container spacing={4}>
                    {this.state.data.map(teacher => {
                      return (
                        <Grid item key={teacher} xs={12} md={3}>
                          <div className="sub-name-new">{teacher.subName}</div>
                          <Card
                            className="card"
                            value={teacher}
                            onClick={this.onclickcard.bind(this, teacher)}
                          >
                            <CardMedia
                              value={teacher}
                              className="cardMedia"
                              image={teacher.data.img}
                              title="Image title"
                            />
                            <CardContent className="cardContent">
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                              >
                                {teacher.data.tutor_name}
                              </Typography>
                              <Typography>{teacher.data.detail}</Typography>
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
        </Grid>
      </div>
    );
  }
}
export default Mycourse;
