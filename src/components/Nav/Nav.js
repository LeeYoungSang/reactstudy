
import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Navigation = (props, context) => (
  <div className="navigation">
    <div className="inner">
      <Link to="/">Shopping Mallss</Link>
      <Link to="/cart">Cartzz</Link>
    </div>
  </div>
);

export default Navigation;