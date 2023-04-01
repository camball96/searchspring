import React from "react";
import styles from "./Footer.module.css";
import SearchyW from "../../../assets/searchyW.png";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerComponents}>
        <img src={SearchyW} style={{ width: "15%" }} alt="" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
          <br />
          inventore accusamus porro delectus corrupti dignissimos doloremque.
        </p>
      </div>
    </div>
  );
}

export default Footer;
