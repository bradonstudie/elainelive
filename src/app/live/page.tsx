import { ImageDisplay } from "@/components/ImageDisplay";
import { LiveTable } from "@/components/LiveTable";
import { liveDates } from "@/config";
import liveGif from "../../../public/live.gif";
import liveOne from "../../../public/live-1.jpg";
import liveTwo from "../../../public/live-2.jpg";

export default function Live() {
    return (
        <>
            <ImageDisplay
                imageOneConfig={{ source: liveOne, alt: "wounded lamb" }}
                imageTwoConfig={{ source: liveTwo, alt: "child crucifixion" }}
                gifConfig={{ source: liveGif, alt: "outside tv" }}
            />
            <div style={{ maxWidth: "50rem", width: "100%" }}>
                <LiveTable liveDates={liveDates} />
            </div>
        </>
    );
}
