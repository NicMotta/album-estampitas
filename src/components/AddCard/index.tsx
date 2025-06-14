import { useEffect, useState } from "react";
import { $isOpenAddCard } from "../../utils/store";
import Button from "../ui/Button";
import styles from "./styles.module.css";

export default function AddCard() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setShow(true);

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div>
      <div
        className={`overlay ${show ? styles.show : styles.hide}`}
      >
        <div className={styles.modal}>
          <h2 className={styles.title}>Ingresá el código</h2>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur.</p>
          <input type="text" placeholder="Código" className={styles.input} />
        </div>
        <Button type="close" onClick={() => $isOpenAddCard.set(false)} />
      </div>
    </div>
  );
}
