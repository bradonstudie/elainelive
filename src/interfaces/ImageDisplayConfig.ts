import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ImageDisplayConfig {
    source: string | StaticImport;
    alt: string;
}
