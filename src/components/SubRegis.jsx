import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NvBarCom from "./NvBar";
import "./styles/register.css";

import { firebaseConfig } from "./configDB/cofig";
import firebase, { app } from "firebase";

class SubRegis extends React.Component {
  constructor(props) {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
    super(props);
    this.state = {
      detail: "test",
      img: "",
      hr: "",
      price: "",
      tel: "",
      bank: "",
      tutor_name: "",
      grad: ""
    };
    this.state2 = { courseNum: 0, subname: "", grad: "", allcourseNum: 0 };
  }
  componentDidMount() {
    // name path
    this.dataBase = firebase
      .database()
      .ref(this.props.location.state.user_path + "/name");
    this.dataBase.on("value", gotdata => {
      var user_data = gotdata.val();
      this.state.tutor_name = user_data;
    });
    // course totur path
    this.dataBase = firebase
      .database()
      .ref(this.props.location.state.user_path + "/mycourse");
    this.dataBase.on("value", gotdata => {
      var user_data = gotdata.val();
      if (user_data == null) {
        this.state2.courseNum = 0;
      } else {
        this.state2.courseNum = Object.keys(user_data).length;
      }
    });
    this.dataBase = firebase
      .database()
      .ref(this.props.location.state.user_path + "/sub");
    this.dataBase.on("value", gotdata => {
      var user_data = gotdata.val();
      this.state2.subname = user_data;
    });
    this.dataBase = firebase
      .database()
      .ref(this.props.location.state.user_path + "/grad");
    this.dataBase.on("value", gotdata => {
      var user_data = gotdata.val();
      this.state.grad = user_data;
    });

    this.dataBase = firebase.database().ref("allcourse/" + this.state2.subname);
    this.dataBase.on("value", gotdata => {
      var user_data = gotdata.val();
      if (user_data == null) {
        this.state2.allcourseNum = 0;
      } else {
        this.state2.allcourseNum = Object.keys(user_data).length;
      }
    });
  }
  onclickOK() {
    this.props.history.push({
      pathname: "/table_teacher",
      state: {
        login: this.props.location.state.login,
        user_path: this.props.location.state.user_path,
        path_mycourse:
          this.props.location.state.user_path +
          "/mycourse/" +
          this.state2.courseNum,
        path2:
          "allcourse/" + this.state2.subname + "/" + this.state2.allcourseNum,
        detail: this.state,
        status: this.props.location.state.status
      }
    });
  }
  handleChange(e) {
    e.preventDefault();
    var files = e.target.files,
      f = files[0];
    var reader = new FileReader();
    reader.onload = e => {
      var data = e.target.result;
      this.setState({ img: data });
    };
    reader.readAsDataURL(f);
  }
  onChangeDetail(e) {
    this.setState({ detail: e.target.value });
  }
  onChangeTime(e) {
    this.setState({ hr: e.target.value });
  }
  onChangePrice(e) {
    this.setState({ price: e.target.value });
  }
  onChangeTel(e) {
    this.setState({ tel: e.target.value });
  }
  onChangeBank(e) {
    this.setState({ bank: e.target.value });
  }
  render() {
    return (
      <div>
        <NvBarCom props={this.props}></NvBarCom>
        <Grid container component="main" className="root paper-pad">
          <CssBaseline />
          <Grid item xs={12} component={Paper} elevation={6} square>
            <Grid container justify="center">
              <div className="head">ลงทะเบียนคอร์ส</div>
              <Grid container justify="center" className="tf-pad">
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="detail"
                  label="รายละเอียดคอร์ส"
                  id="detail"
                  onChange={this.onChangeDetail.bind(this)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="image"
                  label="รูปภาพ"
                  type="file"
                  id="image"
                  onChange={this.handleChange.bind(this)}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="hr"
                  label="จำนวนชั่วโมงที่สอน                  "
                  type="text"
                  id="hr"
                  onChange={this.onChangeTime.bind(this)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="price"
                  label="ราคา"
                  id="price"
                  onChange={this.onChangePrice.bind(this)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="tel"
                  label="เบอรโ์ทร"
                  id="tel"
                  onChange={this.onChangeTel.bind(this)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="bankId"
                  label="ช่องทางการรับเงินเบอรโ์ทร
                  (เลขที่บัญชี/ชื่อบัญชี/ธนาคาร)"
                  id="bankId"
                  onChange={this.onChangeBank.bind(this)}
                />
              </Grid>
              <Grid container justify="center">
                <button className="ok" onClick={this.onclickOK.bind(this)}>
                  ถัดไป
                </button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default SubRegis;
