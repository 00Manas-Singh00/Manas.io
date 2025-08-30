import { notFound } from "next/navigation";

export const metadata = {
  title: "Not Found",
  description: "",
};

export default function Page() {
  return notFound();
}
