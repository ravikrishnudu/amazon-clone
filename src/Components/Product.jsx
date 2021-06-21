import React from "react";
import styles from "./Product.module.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className={styles.product}>
      <div className={styles.productInfo}>
        <p>{title}</p>
        <p className={styles.productPrice}>
          <small>$</small>
          <strong>{price} </strong>
        </p>
        <div className={styles.productRating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
