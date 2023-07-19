import Image from "next/image";
import logo from "../../public/logo.png";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image src={logo} alt="Elaine Elaine" className={`${styles.logo}`} />
      </div>
    </main>
  );
}
