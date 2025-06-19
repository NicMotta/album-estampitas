import CloseIcon from '../../../assets/icons/close.svg';
import styles from './styles.module.css';

interface Props {
  text?: string
  size?: string
  icon?: string
  type?: 'close'
  darkMode?: boolean
  className?: string
  onClick: () => void
}

export default function ButtonUi({ onClick, text, icon, type, className, darkMode }: Props) {
  return (
    <button
      className={`${styles.button} ${className} ${darkMode && styles.buttonInvert}`}
      onClick={onClick}
      aria-label={text}
    >
      {text ? text : <img className={styles.icon} src={type === 'close' ? CloseIcon : icon} alt="" />}
    </button>
  );
}