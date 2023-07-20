import Image from "next/image";
import Link from "next/link";
import { musicItems } from "@/config";
import musicOne from "../../../public/music-1.jpg";
import musicTwo from "../../../public/music-2.jpg";

export default function Music() {
    const imageStyle = {
        height: "auto",
        width: "50%",
        maxWidth: "15rem",
        margin: "0.5rem",
    };

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}
            >
                <Image src={musicOne} alt="stung by bees" style={imageStyle} />
                <Image src={musicTwo} alt="stung by bees" style={imageStyle} />
            </div>
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
