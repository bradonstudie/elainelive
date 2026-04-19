import Image from "next/image";
import homepageFlyer from "@/public/homepage-flyer.jpg";

export default function Home() {
  return <Image src={homepageFlyer} alt="monstrosity" className="hero-image" />;
}
