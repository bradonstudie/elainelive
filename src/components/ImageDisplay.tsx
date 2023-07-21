import Image from "next/image";
import { ImageDisplayConfig } from "@/interfaces";

export const ImageDisplay = ({
    imageOneConfig,
    imageTwoConfig,
}: {
    imageOneConfig: ImageDisplayConfig;
    imageTwoConfig: ImageDisplayConfig;
}) => {
    const imageStyle = {
        height: "auto",
        width: "50%",
        maxWidth: "15rem",
        margin: "0.5rem",
    };

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-around",
            }}
        >
            <Image
                src={imageOneConfig.source}
                alt={imageOneConfig.alt}
                style={imageStyle}
            />
            <Image
                src={imageTwoConfig.source}
                alt={imageTwoConfig.alt}
                style={imageStyle}
            />
        </div>
    );
};
