import Link from "next/link";
import styles from "./page.module.css";

interface MenuItem {
  title: string;
  link: string;
}

const menuItems: MenuItem[] = [
  {
    title: "Music",
    link: "/music",
  },
  {
    title: "Store",
    link: "/store",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "About",
    link: "/about",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1 style={{ marginBottom: "1rem" }}>elaine elaine</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            maxWidth: "35rem",
          }}
        >
          {menuItems.map((item) => (
            <Link key={item.title} href={item.link}>
              <h2 style={{ fontWeight: "lighter" }}>{item.title}</h2>
            </Link>
          ))}
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <p style={{ marginBottom: "0.25rem;" }}>
          If you study the material on this website, you will understand the
          secrets of the universe.
        </p>
        <b>
          <p>&copy;2023 Elaine Elaine</p>
        </b>
      </div>
    </main>
  );
}
