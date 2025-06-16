import styles from './styles.module.css';
import { TOTAL_CARDS } from '../../../utils/constants';

interface Props {
  progress: number;
}

export default function ProgressBar({ progress }: Props) {
  const percentage = Math.min((progress / TOTAL_CARDS) * 100, 100);

  return (
    <div className={styles.wrapper}>
      <h5 className={styles.text}>
        COLECCIÓN <span className={styles.number}>{progress}</span>/{TOTAL_CARDS}
      </h5>
      <div className={styles.track}>
        <div
        className={styles.fill}
        style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
