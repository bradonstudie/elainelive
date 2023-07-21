import { ImageDisplay } from "@/components/ImageDisplay";
import contactOne from "../../../public/contact-1.jpg";
import contactTwo from "../../../public/contact-2.jpg";
import mail from "../../../public/mail.gif";

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
                gifConfig={{ source: mail, alt: "email" }}
            />
            <h2>
                You can <i>E-Mail</i>{" "}
                <span style={{ fontFamily: "fantasy" }}>elaine elaine</span>
                &trade; at{" "}
                <a href="mailto:elaineelainehc@gmail.com">
                    elaineelainehc@gmail.com
                </a>
                .
            </h2>
        </>
    );
}
