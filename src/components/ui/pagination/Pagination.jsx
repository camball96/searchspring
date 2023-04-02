import React from "react";
import Btn from "../btn/Btn";
import styles from "./Pagination.module.css";

function Pagination({ increaseCount, decreaseCount, products, page }) {
  return (
    <div className={styles.pagSection}>
      <div className={styles.pagContainer}>
        {page > 1 && (
          <button className={styles.pagBtn} onClick={decreaseCount}>
            &lt;
          </button>
        )}
        <span className={styles.pageNo}> {page} </span>
        {page < products.length && (
          <button className={styles.pagBtn} onClick={increaseCount}>
            &gt;
          </button>
        )}
      </div>
    </div>
  );
}

export default Pagination;
