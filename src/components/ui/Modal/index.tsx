import { useEffect, useState } from "react";
import Button from "../Button";
import styles from "./styles.module.css";

interface Props {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal( { title, children, onClose }: Props ) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setShow(true);

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className={`overlay ${show ? styles.visible : styles.hidden}`}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </div>
      <Button onClick={onClose} type="close" darkMode/>
    </div>
  );
}