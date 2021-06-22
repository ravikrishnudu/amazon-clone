import React from "react";
import styles from "./Product.module.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{basket}, dispatch] = useStateValue();
   console.log("this is the basket >>>", basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
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
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
