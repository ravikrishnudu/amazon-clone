import React from "react";
import styles from "./Home.module.css";
import Product from "./Product";
function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.homeContainer}>
        <img
          className={styles.homeImage}
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className={styles.homeRow}>
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className={styles.homeRow}>
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className={styles.homeRow}>
          <Product
            id="129956789"
            title="JBL Charge 3 Waterproof Portable Bluetooth Speaker (Black), 1"
            price={109.95}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61TSAn9KKxL._AC_SX425_.jpg"
          />
          <Product
            id="123456999"
            title="Keurig K-Mini Coffee Maker, Single Serve K-Cup Pod Coffee Brewer, 6 to 12 oz. Brew Sizes, Black"
            price={77.68}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71tybZyMkuL._AC_SX679_.jpg"
          />
          <Product
            id="123496789"
            title="Ozeri ZK14-S Pronto Digital Multifunction Kitchen and Food Scale, Black"
            price={11.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71lbJjoQHuL._AC_SX679_.jpg"
          />
        </div>
        <div className={styles.homeRow}>
          <Product
            id="123456989"
            title="Blendtec Total Classic Original Blender - WildSide+ Jar (90 oz) - Professional-Grade Power - 6 Pre-programmed Cycles - 10-speeds - Black (Renewed)"
            price={275.51}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71zrQU%2ByLvL._AC_SX679_.jpg"
          />
          <Product
            id="123456789"
            title="Becoming: A Guided Journal for Discovering Your Voice"
            price={10.97}
            rating={5}
            image="https://m.media-amazon.com/images/I/51w4zG9Dn6L.jpg"
          />
          <Product
            id="123456799"
            title="Asus ROG Strix Hero II Gaming Laptop, 15.6” 144Hz IPS Type, NVIDIA GeForce GTX 1060 6GB GDDR5, Intel Core i7-8750H Processor, 16GB DDR4, 256GB Pcie SSD + 1TB Hdd, RGB, Windows 10 Home - GL504GM-DS74"
            price={1699.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81TKu9gu%2BqL._AC_SX679_.jpg"
          />
        </div>

        <div className={styles.homeRow}>
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
