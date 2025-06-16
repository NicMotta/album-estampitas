import styles from "./styles.module.css";

export default function Input() {
  return <input type="text" placeholder="Ingresa el código" className={styles.input} maxLength={8}/>;
}