import React from "react";
import styles from "./Footer.module.css";
import SearchyW from "../../../assets/searchyW.png";
import { style } from "@mui/system";

function Footer() {
  let date = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <div className={styles.footerComponents}>
        <img src={SearchyW} alt="" className={styles.logo} />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
          <br />
          inventore accusamus porro delectus corrupti dignissimos doloremque.
        </p>
      </div>
      <div className={styles.copyright}>
        <p>© Searchy and contributors {date} </p>
      </div>
    </div>
  );
}

export default Footer;
