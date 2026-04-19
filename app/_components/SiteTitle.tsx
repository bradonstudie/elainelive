import Link from "next/link";
import Image from "next/image";

import Logo from "@/public/logo.jpg";

export const SiteTitle = () => (
  <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
    <h1 hidden>Immortal Torment</h1>
    <Image
      src={Logo}
      alt="Immortal Torment Logo"
      style={{ height: "7rem", width: "auto" }}
    />
  </Link>
);
