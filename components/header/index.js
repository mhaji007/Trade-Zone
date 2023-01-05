import Banner from "./Banner";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Banner />
    </header>
  );
}
