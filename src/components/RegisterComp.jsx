import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "./styles/register.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: "test" };
  }
  onclickT() {
    this.props.history.push({
      pathname: "/teacher_register"
    });
  }
  onclickS() {
    this.props.history.push({
      pathname: "/student_register"
    });
  }
  render() {
    return (
      <Grid container component="main" className="root paper-pad-new">
        <CssBaseline />
        <Grid item xs={12} component={Paper} elevation={6} square>
          <Grid container justify="center">
            <div className="head">สมัครสมาชิก</div>
            <Grid container justify="center">
              <button className="btn-regis" onClick={this.onclickS.bind(this)}>
                นักเรียน
              </button>
            </Grid>
            <Grid container justify="center">
              <button className="btn-regis" onClick={this.onclickT.bind(this)}>
                ติวเตอร์
              </button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
export default Register;
