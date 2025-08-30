import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [] as { slug: string }[];
}

export async function generateMetadata() {
  return {};
}

export default async function Page() {
  return notFound();
}
