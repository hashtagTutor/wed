import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import CallIcon from "@material-ui/icons/Call";
import "./styles/nvBar.css";

class NvBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textBTN: "เข้าสู่ระบบ", login: false };
    console.log(this.props);
    if (this.props.props.location.state === undefined) {
    } else if (this.props.props.location.state.login) {
      this.state.textBTN = "ออกจากระบบ";
      this.state.login = true;
    }
  }
  onclick() {
    this.props.props.history.push({
      pathname: "/login"
    });
  }
  onclickMain() {
    console.log(this.props);
    if (this.props.props.location.state === undefined) {
      this.props.props.history.push({
        pathname: "/",
        state: { login: this.state.login }
      });
    } else if (!this.props.props.location.state.login) {
      this.props.props.history.push({
        pathname: "/",
        state: { login: this.state.login }
      });
    } else if (this.props.props.location.state.login) {
      if (this.props.props.location.state.status === "tutor") {
        this.props.props.history.push({
          pathname: "/tt_course",
          state: this.props.props.location.state
        });
      } else if (this.props.props.location.state.status === "student") {
        this.props.props.history.push({
          pathname: "/st_course",
          state: this.props.props.location.state
        });
      }
    }
  }
  onclickCourse() {
    this.props.props.history.push({
      pathname: "/courses",
      state: this.props.props.location.state
    });
  }
  onclickContact() {
    this.props.props.history.push({
      pathname: "/contact",
      state: this.props.props.location.state
    });
  }
  onclickStep() {
    this.props.props.history.push({
      pathname: "/steps",
      state: this.props.props.location.state
    });
  }
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar
          color="default"
          // elevation={0}
          className="appBar"
        >
          <Toolbar className="toolbar">
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className="toolbarTitle"
            >
              <img
                src={require("./styles/images/icon_nvBar.png")}
                className="size_icon"
              ></img>
            </Typography>
            <nav className="test">
              <Link
                variant="button"
                color="textPrimary"
                onClick={this.onclickMain.bind(this)}
                className="link"
              >
                <HomeIcon fontSize="default"></HomeIcon>
                <div className="font_size">หน้าหลัก</div>
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                onClick={this.onclickCourse.bind(this)}
                className="link"
              >
                <MenuBookIcon fontSize="default"></MenuBookIcon>
                <div className="font_size">คอร์สเรียน</div>
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                onClick={this.onclickStep.bind(this)}
                className="link"
              >
                <LibraryBooksIcon fontSize="default"></LibraryBooksIcon>
                <div className="font_size">ขั้นตอนการสมัครเรียน</div>
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                onClick={this.onclickContact.bind(this)}
                className="link"
              >
                <CallIcon fontSize="default"></CallIcon>
                <div className="font_size">ติดต่อเรา</div>
              </Link>
            </nav>

            <Button
              variant="outlined"
              size="large"
              color="primary"
              className="link"
              onClick={this.onclick.bind(this)}
            >
              {this.state.textBTN}
            </Button>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}
export default NvBar;
