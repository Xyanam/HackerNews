import React from "react";
import { Link } from "react-router-dom";
import classes from "./ArrowBack.module.css";
const ArrowBack = () => {
  return (
    <Link to="/">
      <div className={classes.arrow}></div>
    </Link>
  );
};

export default ArrowBack;
