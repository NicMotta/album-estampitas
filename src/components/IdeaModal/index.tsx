import { $isOpenIdea } from "../../utils/store";
import Modal from "../ui/Modal";

export default function IdeaModal() {
  return (
    <Modal title="¿Tenés una idea?" onClose={() => $isOpenIdea.set(false)}>
      <p>Si se te ocurrió una idea, queres sugerir algo o simplemente querés apoyarnos. ¡Envianosla!</p>
    </Modal>
  );
}
