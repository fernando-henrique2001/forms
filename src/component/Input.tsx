import React from "react";
import logo from "./logo.svg";
import styles from "./Input.module.css";

type InputType = {
  title: string;
  value: string;
  type?: string;
  width?: number;
  name: string;
  minLength?: number;
  handleSetPeople: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({
  name,
  title,
  value,
  type,
  width,
  minLength,
  handleSetPeople,
}: InputType) {
  return (
    <div className={styles.container}>
      <span>{title}:</span>
      <input
        minLength={minLength}
        name={name}
        style={{ width: width }}
        type={type}
        className={styles.input}
        onChange={(e) => handleSetPeople(e)}
      />
    </div>
  );
}

export default Input;
