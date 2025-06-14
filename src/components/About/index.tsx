import { useEffect, useState } from "react";
import { $isOpenAbout } from "../../utils/store";
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
          <h2 className={styles.title}>¿Cómo funciona?</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            nobis possimus cupiditate impedit, excepturi delectus, perferendis
            facilis velit molestias porro, animi adipisci quod quae repellendus
            voluptatem accusamus nesciunt vero. Ipsam.
          </p>
        </div>
        <Button className="fixedClose" type="close" onClick={() => $isOpenAbout.set(false)} />
      </div>
    </div>
  );
}
