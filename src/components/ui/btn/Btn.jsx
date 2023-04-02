import React from "react";
import styles from "./Btn.module.css";

function Btn(props) {
  return (
    <>
      <button className={styles.btn} onClick={props.onClick}>
        {props.children}
      </button>
    </>
  );
}

export default Btn;
