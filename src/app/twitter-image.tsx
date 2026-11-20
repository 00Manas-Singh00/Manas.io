import OpenGraphImage from "./opengraph-image";

// Same card as the Open Graph image. Config is declared here, not re-exported,
// because Next.js reads these fields statically.
export const alt =
  "Manas Singh, full-stack and forward-deployed engineer. Hand me the messy problem. I'll ship it.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default OpenGraphImage;
