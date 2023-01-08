import Link from "next/link";
import styles from "./styles.module.scss";
import { RiSearch2Line } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Main() {
  const { cart } = useSelector((state) => ({ ...state }));
  const handleSearch = (e) => {};
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Link className={styles.logo} href="/">
            <img  src="../../images/logo.png" alt="" />
        </Link>
        <form onSubmit={(e) => handleSearch(e)} className={styles.search}>
          <input
            type="text"
            placeholder="Search..."
          />
          <button type="submit" className={styles.search__icon}>
            <RiSearch2Line />
          </button>
        </form>
        <Link className={styles.cart} href="/cart">
            <FaOpencart  />
            <span>0</span>
        </Link>
      </div>
    </div>
  );
}
