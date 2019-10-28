import React from "react";
import { Link } from "react-router-dom";

function Splash() {
  return (
    <div className="container-title">
    <Link className="splash-title" to="/start">
    Start
    </Link>
    </div>
  );
}

export default Splash;
