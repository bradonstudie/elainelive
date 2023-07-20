import Link from "next/link";

import { musicItems } from "@/config";

export default function Music() {
    return (
        <>
            <h2 style={{ fontWeight: "normal" }}>
                You can stream{" "}
                <span style={{ fontFamily: "cursive" }}>elaine elaine</span>
                &trade; <b>on the web</b> at any of these hyperlinks:
            </h2>
            <ul style={{ fontSize: "1.25rem", margin: "1rem 0rem" }}>
                {musicItems.map((item) => (
                    <li key={item.title}>
                        <Link
                            href={item.link}
                            target="_blank"
                            style={{ color: item.color }}
                            className="music-link"
                        >
                            <h3 style={{ color: item.color }}>{item.title}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
