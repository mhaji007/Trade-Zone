import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/signin.module.scss";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";

export default function signin() {
  const country = {
    name: "United States",
    flag: "https://en.wikipedia.org/wiki/Flag_of_the_United_States#/media/File:Flag_of_the_United_States.svg",
  };

  return (
    <>
      <Header country={country} />
      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              Come join the Zone! <Link href="/">Visit Store</Link>
            </span>
          </div>
        </div>
      </div>
      <Footer country="United States" />
    </>
  );
}
