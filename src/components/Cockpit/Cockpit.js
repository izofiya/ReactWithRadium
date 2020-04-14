import React from "react";
import classes from "./Cockpit.module.css";

const cockpit = (props) => {
  return (
    <div>
      <h1>Hi, I'm a React App</h1>
      <p
        className={
          props.persons.length <= 1
            ? `${classes.burlywood} ${classes.red}`
            : classes.red
        }
      >
        This is really working
      </p>
      <button className={classes.button} onClick={props.clicked}>
        Switch Name
      </button>
    </div>
  );
};

export default cockpit;
