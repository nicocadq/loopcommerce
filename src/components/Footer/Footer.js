import React from "react";

import Column from "./Column";

import styles from "./Footer.module.scss";

const brands = ["Adidas", "Puma", "Reebok", "Nike"];

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.columns}>
        <Column title="Brands" links={brands} />
        <Column title="Brands" links={brands} />
        <Column title="Brands" links={brands} />
        <Column title="Brands" links={brands} />
      </div>
      <div className={styles.information}>
        <p className={styles.copyright}>
          © 2019 Pixsellz. All rights reserved.
        </p>
        <p className={styles.email}>info@pixsellz.io</p>
        <p className={styles.phone}>879-332-9375</p>
        <p className={styles.address}>456 Hagenes Gardens Suite 808</p>
      </div>
    </footer>
  );
};

export default Footer;
