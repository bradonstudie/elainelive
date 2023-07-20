import "./globals.css";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { SiteTitle } from "@/components/SiteTitle";
import styles from "./layout.module.css";

export const metadata: Metadata = {
    title: "elaine elaine live",
    description: "elaine elaine is a band that makes music",
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
