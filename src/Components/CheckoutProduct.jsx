import React from "react";
import styles from "./CheckoutProduct.module.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{basket}, dispatch] = useStateValue();
  
const removefromCart =()=>{
  dispatch({
type : 'REMOVE_FROM_BASKET',
id:id,
  })
}

  return (
    <div className={styles.checkoutProduct}>
      <img className={styles.image} src={image} alt="" />
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={styles.rating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button onClick={removefromCart} >Remove from cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
