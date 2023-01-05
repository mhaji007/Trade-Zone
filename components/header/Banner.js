import Link from "next/link";
import styles from "./styles.module.scss";

export default function Banner() {
  return (
    <Link href="/browse">
      <div className={styles.banner}>banner</div>
    </Link>
  );
}
