import React from "react";
import styles from "./form.modules.css";
const Form = () => {
  return (
    <form className={styles.form}>
      <label className={styles.label}>
        Name
        <input className={styles.input} type="text" name="email" />
      </label>
      <label className={styles.label}>
        Email
        <input className={styles.input} type="email" name="email" />
      </label>
      <label className={styles.label}>
        Subject
        <input className={styles.input} type="text" name="subject" />
      </label>
      <label className={styles.label}>
        Body
        <textarea className={styles.input} name="subject" />
        <button className={styles.buttons}>Send</button>
      </label>
    </form>
  );
};

export default Form;
