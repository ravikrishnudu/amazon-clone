import React from "react";
import styles from "./Checkout.module.css";
import Subtotal from "./Subtotal";


function Checkout() {
  return (
    <div className={styles.checkout}>
      <div className={styles.checkoutLeft}>
        <img
          className={styles.checkoutAd}
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className={styles.checkoutTitle}>Your shopping Basket</h2>
        </div>

        
        <div className={styles.checkoutRight}>
            <Subtotal />
            </div>
      </div>
    </div>
  );
}

export default Checkout;
