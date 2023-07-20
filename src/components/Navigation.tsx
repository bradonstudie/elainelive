"use client";

import Link from "next/link";
import { menuItems } from "@/config";
import { usePathname } from "next/navigation";

export const Navigation = () => {
    const currentRoute = usePathname();

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                maxWidth: "35rem",
                gap: "1rem",
                margin: "1rem 0rem",
            }}
        >
            {menuItems.map((item) => (
                <Link
                    key={item.title}
                    href={item.link}
                    className={currentRoute === `${item.link}` ? "active" : ""}
                >
                    <h2 style={{ fontWeight: "lighter" }}>{item.title}</h2>
                </Link>
            ))}
        </div>
    );
};
