import React from "react";
import Searchy from "../../../assets/searchy.png";
import styles from "./Header.module.css";
import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "../menu/Menu";

function Header() {
  return (
    <div className={styles.header}>
      <img src={Searchy} alt="logo" style={{ width: "150px" }} />
      <div className={styles.menu}>
        <Menu />
      </div>
      <button className={styles.cart}>
        <span className={styles.icon}>
          <BsCart3 size="25" color="white" className={styles.BsCart3} />
          <GiHamburgerMenu
            size="25"
            color="white"
            className={styles.GiHamburgerMenu}
          />
        </span>
      </button>
    </div>
  );
}

export default Header;
