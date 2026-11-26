import Image from "./opengraph-image";

// Same card as the Open Graph image. Config is declared here, not re-exported,
// because Next.js reads these fields statically.
export const alt = "A case study by Manas Singh";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export { generateStaticParams } from "./opengraph-image";

export default Image;
