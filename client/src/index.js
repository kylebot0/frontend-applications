import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import App from "./components/app/App.js";
import Navbar from "./components/navbar/navbar.js";
import './style.css'

ReactDOM.render(
  <Router>
      <Navbar />
    <div className="container">
      {/* <Route exact path="/" component={} />, */}
      
    </div>
  </Router>,
  document.getElementById('root')
);
