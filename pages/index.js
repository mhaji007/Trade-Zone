import axios from "axios";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.scss";
import Header from "../components/header";
import Footer from "../components/footer";
import { useSession, signIn, signOut } from "next-auth/react";
import Main from "../components/home/main";

const inter = Inter({ subsets: ["latin"] });
export default function Home({ country }) {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      <Header country={country} />
      <div className={styles.home}>
        <div className={styles.container}>
          <Main />
        </div>
      </div>
      <Footer country={country} />
    </>
  );
}

export async function getServerSideProps() {
  let data = await axios
    .get(`https://api.ipregistry.co/?key=${process.env.IP_REGISTERY_API_KEY}`)
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    props: {
      // Dynamic data from the endpoint - for production use
      // country: { name: data.name, flag: data.flag.emojitwo },
      // Static data
      country: {
        name: "United States",
        flag: "https://en.wikipedia.org/wiki/Flag_of_the_United_States#/media/File:Flag_of_the_United_States.svg",
      },
    },
  };
}
