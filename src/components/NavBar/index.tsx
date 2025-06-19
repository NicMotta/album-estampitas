import styles from './styles.module.css';
import { $isOpenAbout, $isOpenAddCard, $isOpenIdea } from '../../utils/store';
import Button from "../ui/Button";
// import InfoIcon from "../../assets/icons/info.svg";
// import IdeaIcon from "../../assets/icons/idea.svg";
// import AddIcon from "../../assets/icons/add.svg";

export default function NavBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.infoButtonContainer}>
        <Button onClick={() => $isOpenIdea.set(true)} text='[ i ]' />
        <Button onClick={() => $isOpenAddCard.set(true)} text='[[ + ]]' className={styles.centerButton} />
        <Button onClick={() => $isOpenAbout.set(true)} text='[ ? ]' />
      </div>
    </div>
  );
}
