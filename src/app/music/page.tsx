import { ImageDisplay } from "@/components/ImageDisplay";
import Link from "next/link";
import musicGif from "../../../public/music.gif";
import { musicItems } from "@/config";
import musicOne from "../../../public/music-1.jpg";
import musicTwo from "../../../public/music-2.jpg";

export default function Music() {
    return (
        <>
            <ImageDisplay
                imageOneConfig={{ source: musicOne, alt: "technology god" }}
                imageTwoConfig={{ source: musicTwo, alt: "stung by bees" }}
                gifConfig={{ source: musicGif, alt: "music" }}
            />
            <h2 style={{ fontWeight: "normal" }}>
                You can stream{" "}
                <span style={{ fontFamily: "fantasy" }}>elaine elaine</span>
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
