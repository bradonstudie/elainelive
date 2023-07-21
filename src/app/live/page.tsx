import { ImageDisplay } from "@/components/ImageDisplay";
import liveOne from "../../../public/live-1.jpg";
import liveTwo from "../../../public/live-2.jpg";

export default function Live() {
    return (
        <>
            <ImageDisplay
                imageOneConfig={{ source: liveOne, alt: "wounded lamb" }}
                imageTwoConfig={{ source: liveTwo, alt: "child crucifixion" }}
            />
        </>
    );
}
