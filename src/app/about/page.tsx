import { AboutDescription } from "@/components/AboutDescription";
import { ImageDisplay } from "@/components/ImageDisplay";
import aboutGif from "../../../public/about.gif";
import aboutOne from "../../../public/about-1.jpg";
import aboutTwo from "../../../public/about-2.jpg";

export default function About() {
    return (
        <>
            <ImageDisplay
                imageOneConfig={{ source: aboutOne, alt: "forgotten god" }}
                imageTwoConfig={{
                    source: aboutTwo,
                    alt: "self immolation in a wheelchair",
                }}
                gifConfig={{ source: aboutGif, alt: "love forever :)" }}
            />
            <div
                style={{
                    maxWidth: "50rem",
                    border: "3px dashed black",
                    padding: "1rem",
                }}
            >
                <AboutDescription />
            </div>
        </>
    );
}
