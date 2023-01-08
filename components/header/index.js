import Banner from "./Banner";
import Main from "./Main";
import styles from "./styles.module.scss";
import Top from "./Top";

export default function Header() {
  return (
    <header className={styles.header}>
      <Banner />
      <Top />
      <Main />
    </header>
  );
}
