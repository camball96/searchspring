import React from "react";
import styles from "./Hero.module.css";
import Btn from "../ui/btn/Btn";

function Hero() {
  return (
    <div>
      <div
        className={styles.heroContainer}
        // style={{ backgroundImage: `url(${Product1})` }}
      >
        <h1 className={styles.h1}>what's our mission..</h1>
        <h2 className={styles.h2}>
          brightening life with <br />
          beautiful, stylish design
        </h2>
        <Btn>Shop Now</Btn>
      </div>
    </div>
  );
}

export default Hero;
