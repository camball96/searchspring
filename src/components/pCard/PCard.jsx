import React from "react";
import styles from "./PCard.module.css";

function PCard({ product }) {
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${product.thumbnailImageUrl})` }}
      id={product.title}
    >
      <div className={styles.cardContent}>
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.price}>
          {product.msrp > product.price ? (
            <span style={{ textDecoration: "line-through" }}>
              ${product.msrp}
            </span>
          ) : (
            ""
          )}{" "}
          ${product.price}
        </p>
        <button className={styles.btn}>add to cart</button>
      </div>
    </div>
  );
}

export default PCard;
