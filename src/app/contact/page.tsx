import { ImageDisplay } from "@/components/ImageDisplay";
import contactOne from "../../../public/contact-1.jpg";
import contactTwo from "../../../public/contact-2.jpg";

export default function Contact() {
    return (
        <>
            <ImageDisplay
                imageOneConfig={{
                    source: contactOne,
                    alt: "the long and winding road",
                }}
                imageTwoConfig={{
                    source: contactTwo,
                    alt: "explosions in the sky",
                }}
            />
        </>
    );
}
