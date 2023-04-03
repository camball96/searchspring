import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import Btn from "../ui/btn/Btn";

function Hero() {
  const [bgColor, setBgColor] = useState("#e9cfca");

  useEffect(() => {
    setInterval(() => {
      setBgColor(() => {
        const colors = ["#e9cfca", "#F5E5FC", "#B28B84", "#9CB380"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return randomColor;
      });
    }, 5000); // Updates color every 5 seconds
  }, []);

  return (
    <div>
      <div
        className={styles.heroContainer}
        style={{ backgroundColor: bgColor }}
      >
        <h2 className={styles.h2}>what's our mission..</h2>
        <h1 className={styles.h1}>
          brightening life with beautiful, stylish design
        </h1>
        <Btn>shop now</Btn>
      </div>
    </div>
  );
}

export default Hero;
