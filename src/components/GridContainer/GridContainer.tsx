import React from "react";
import styles from "./GridContainer.module.css";

const GridContainer: React.FC = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default GridContainer;
