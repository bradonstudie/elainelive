import Image from "next/image";
import { ImageDisplayConfig } from "@/interfaces";

export const ImageDisplay = ({
    imageOneConfig,
    imageTwoConfig,
    gifConfig,
}: {
    imageOneConfig: ImageDisplayConfig;
    imageTwoConfig: ImageDisplayConfig;
    gifConfig?: ImageDisplayConfig;
}) => {
    const imageStyle = {
        height: "auto",
        width: "45%",
        maxWidth: "15rem",
        margin: "1rem 2.5% 0 2.5%",
    };

    const gifStyle = {
        margin: "1rem 0",
        height: "4rem",
        width: "auto",
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
            {gifConfig && (
                <Image
                    src={gifConfig.source}
                    alt={gifConfig.alt}
                    style={gifStyle}
                />
            )}
        </>
    );
};
