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
            <div style={{ maxWidth: "50rem" }}>
                <b style={{ fontSize: "2rem", fontFamily: "sans-serif" }}>
                    <span style={{ fontSize: "3rem" }}>O</span>n the evening of
                    the last day of October, 1501
                </b>
                <p>
                    Cesare Borgia arranged a banquet in his chambers in the
                    Vatican with &quot;fifty honest prostitutes&quot;,[2] called
                    courtesans, who danced after dinner with the attendants and
                    others who were present, at first in their garments, then
                    naked.[3] After dinner the candelabra with the burning
                    candles were taken from the tables and placed on the floor,
                    and chestnuts were strewn around, which the naked courtesans
                    picked up, creeping on hands and knees between the
                    chandeliers, while the Pope, Cesare, and his sister Lucretia
                    looked on. Finally, prizes were announced for those who
                    could perform the act most often with the courtesans, such
                    as tunics of silk, shoes, barrets, and other things.
                </p>
            </div>
        </>
    );
}
