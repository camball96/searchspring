import React from "react";
import styles from "./Menu.module.css";

function Menu() {
  const menuArr = ["home", "products", "about", "contact"];

  return (
    <>
      <ul className={styles.ul}>
        {menuArr.map((menu) => {
          return (
            <li className={styles.li} key={Math.random()}>
              <a className={styles.a}>{menu}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Menu;
