import React from "react";
import styles from "./Header.module.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  return (
    <div className={styles.header}>
      <Link to="/">
        <img
          className={styles.headerLogo}
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="main-logo"
        />
      </Link>

      <div className={styles.headerSearch}>
        <input className={styles.headerSearchInput} type="text" />
        <SearchIcon className={styles.headerSearchIcon} />
      </div>

      <div className={styles.headerNav}>
        <div className={styles.headerOption}>
          <span className={styles.headerOptionLineOne}>Hello Guest</span>
          <span className={styles.headerOptionLineTwo}>Sign In</span>
        </div>

        <div className={styles.headerOption}>
          <span className={styles.headerOptionLineOne}>Returns</span>
          <span className={styles.headerOptionLineTwo}>& Orders</span>
        </div>

        <div className={styles.headerOption}>
          <span className={styles.headerOptionLineOne}>Your</span>
          <span className={styles.headerOptionLineTwo}>Prime</span>
        </div>
        <Link to="/checkout">
          <div className={styles.headerOptionCart}>
            <ShoppingCartIcon />
            <span className={styles.headerCartCount}>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
