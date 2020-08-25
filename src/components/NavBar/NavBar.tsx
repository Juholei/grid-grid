import React from "react";
import styles from "./NavBar.module.css";

interface NavBarProps {
  title: string;
  logo: string;
}

const NavBar: React.FC<NavBarProps> = ({ title, logo, children }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logocontainer}>
        <img className={styles.logo} src={logo} aria-hidden alt="" />
        <h1 className={styles.title}>{title}</h1>
      </div>
      {children}
      <div></div>
    </nav>
  );
};

export default NavBar;
