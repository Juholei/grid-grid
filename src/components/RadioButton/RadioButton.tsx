import React from "react";

import styles from "./RadioButton.module.css";

interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  onClick: any;
  defaultChecked?: boolean;
}
const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  onClick,
  defaultChecked
}) => {
  return (
    <label className={styles.label}>
      {label}
      <input type="radio" name={name} value={value} onClick={onClick} defaultChecked={defaultChecked} />
    </label>
  );
};

export default RadioButton;
