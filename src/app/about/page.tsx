import { ImageDisplay } from "@/components/ImageDisplay";
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
            />
        </>
    );
}
