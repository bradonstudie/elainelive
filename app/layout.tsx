import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.css";

import { Footer } from "@/app/_components/Footer";
import { Navigation } from "@/app/_components/Navigation";
import { SiteTitle } from "@/app/_components/SiteTitle";

export const metadata: Metadata = {
  title: "immortal torment live",
  description: "immortal torment is a band",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "100vh",
            width: "100vw",
          }}
        >
          <main className={styles.main}>
            <div className={styles.center}>
              <SiteTitle />
              <Navigation />
            </div>
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
