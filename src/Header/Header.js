import React from "react";
import styles from "./Header.module.css";
import BHeader from "../assets/blackbird-header.png";

function Header() {
  return (
    <div className={styles.header}>
      <a href="/">
        <img src={BHeader} alt="Blackbird logo" />
      </a>
    </div>
  );
}

export default Header;
