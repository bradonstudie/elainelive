import Image from "next/image";
import homepageFlyer from "@/public/homepage-flyer.png";

export default function Home() {
  return <Image src={homepageFlyer} alt="monstrosity" className="hero-image" />;
}
