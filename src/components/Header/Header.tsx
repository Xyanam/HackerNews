import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.navigation}>
        <div className={classes.logo}>
          <Link to="/" className={classes.logo}>
            HACKer: news
          </Link>
        </div>
        <div className={classes.nav}>
          <Link to="/" className={classes.navItem}>
            <span className={classes.main}>main</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
