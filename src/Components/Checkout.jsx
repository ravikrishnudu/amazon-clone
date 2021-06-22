import React from "react";
import styles from "./Checkout.module.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket ,user}] = useStateValue();

  return (
    <div className={styles.checkout}>
      <div className={styles.checkoutLeft}>
        <img
          className={styles.checkoutAd}
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user?.email} </h3>
          <h2 className={styles.checkoutTitle}>Your shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className={styles.checkoutRight}>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
