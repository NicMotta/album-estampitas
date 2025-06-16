import styles from './styles.module.css';

export default function FullScreenLoader() {
  return (
    <div className={styles.overlay}>
      <div className={styles.loader}></div>
    </div>
  );
}
