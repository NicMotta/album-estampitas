import styles from './styles.module.css';

interface Props {
  text: string;
  color: 'yellow' | 'blue' | 'red';
  className?: string
}

export default function Mancheta ( { text, color, className }: Props ) {
  return (
    <div className={`${styles.mancheta} ${styles[color]} ${className}`}>
      <h5>{text}</h5>
    </div>
  );
}