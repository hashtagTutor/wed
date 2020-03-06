import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/LoginJava";
import Album from "./components/Album";
import NvBarCom from "./components/NvBar";
import Home from "./components/HomeComponent";
import Contact from "./components/Contact";
import Step from "./components/Step";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NvBarCom></NvBarCom>
      </div>
    </Router>
  );
}

export default App;
