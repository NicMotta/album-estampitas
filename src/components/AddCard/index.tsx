import { $isOpenAddCard } from "../../utils/store";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Modal from "../ui/Modal";
import styles from "./styles.module.css";

export default function AddCard() {
  return (
    <Modal title="Canjea tu estampita" onClose={() => $isOpenAddCard.set(false)}>
      <p className={styles.description}>El código lo encontrarás en la parte de atrás de la estampita</p>
      <Input />
      <Button onClick={() => $isOpenAddCard.set(false)} text="Canjear"></Button>
    </Modal>
  );
}
