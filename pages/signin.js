import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/signin.module.scss";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";
import { Formik, Form } from "formik";
import LoginInput from "../components/inputs/loginInput";

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
              Come join the Zone! <Link href="/">Visit store</Link>
            </span>
          </div>
          <div className={styles.login__form}>
            <h1>Sign in</h1>
            <p>Get access to tons of unique deals.</p>
            <Formik>
              {(form) => (
                <Form method="post" action="/api/auth/signin/email">
                  <LoginInput
                    type="text"
                    icon="email"
                    placeholder="Email Address"
                  />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer country="United States" />
    </>
  );
}
