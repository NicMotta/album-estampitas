import styles from './styles.module.css';
import { $isOpenAbout, $isOpenAddCard, $isOpenIdea } from '../../utils/store';
import Button from "../ui/Button";
import InfoIcon from "../../assets/icons/info.svg";
import IdeaIcon from "../../assets/icons/idea.svg";
import AddIcon from "../../assets/icons/add.svg";

export default function FooterButton() {
  return (
    <div className={styles.infoButtonContainer}>
      <Button onClick={() => $isOpenIdea.set(true)} icon={IdeaIcon} />
      <Button onClick={() => $isOpenAddCard.set(true)} icon={AddIcon} />
      <Button onClick={() => $isOpenAbout.set(true)} icon={InfoIcon} />
    </div>
  );
}
