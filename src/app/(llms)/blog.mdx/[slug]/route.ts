import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [];
}

export async function GET() {
  notFound();
}
