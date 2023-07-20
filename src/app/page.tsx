import Image from "next/image";
import homepageFlyer from "../../public/homepage-flyer.png";

export default function Home() {
    return (
        <Image
            src={homepageFlyer}
            alt="elaine elaine monstrosity"
            style={{ width: "100%", maxWidth: "50rem", height: "auto" }}
        />
    );
}
