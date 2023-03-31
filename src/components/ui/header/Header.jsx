import React from "react";
import Logo from "../../../assets/Logo.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <img src={Logo} alt="logo" style={{ width: "150px" }} />
    </div>
  );
}

export default Header;
