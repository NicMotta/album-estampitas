import { $isOpenAbout } from "../../utils/store";
import Modal from "../ui/Modal";
import styles from "./styles.module.css";
import { CONTENT } from "./content";

export default function About() {
  return (
    <Modal title="¿Cómo funciona?" onClose={() => $isOpenAbout.set(false)}>
      <div className={styles.content}>
        {CONTENT.map((item, index) => (
          <p className={styles.item} key={index}>{item}</p>
        ))}
      </div>
    </Modal>
  );
}
