import { useEffect, useState } from "react";
import { $isOpenIdea } from "../../utils/store";
import Button from "../ui/Button";
import styles from "./styles.module.css";

export default function About() {
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
        className={`overlay ${show ? styles.visible : styles.hidden}`}
      >
        <div className={styles.content}>
          <h2 className={styles.title}>¿Tenés una idea?</h2>
          <p>
            Si se te ocurrió una idea, queres sugerir algo o simplemente querés apoyarnos. ¡Envianosla!
          </p>
        </div>
        <Button onClick={() => $isOpenIdea.set(false)} type="close" />
      </div>
    </div>
  );
}
