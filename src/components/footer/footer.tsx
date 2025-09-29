import { FC } from "react";
import styles from "./footer.module.css";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.logo}>Tennis store</p>
      <p className={styles.copyright}>© 2025. Tennis Store. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
