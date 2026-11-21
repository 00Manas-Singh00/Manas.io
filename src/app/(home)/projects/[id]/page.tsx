import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyPage } from "@/features/home/components/case-study";
import { CASE_STUDIES, PROJECTS } from "@/features/home/data";

type Props = { params: Promise<{ id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.filter((p) => CASE_STUDIES[p.id]).map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  const study = CASE_STUDIES[id];
  if (!project || !study) return {};
  return {
    title: `${project.title}, a case study`,
    description: study.lede,
    alternates: { canonical: `/projects/${id}` },
    openGraph: {
      title: `${project.title}, a case study`,
      description: study.lede,
      url: `/projects/${id}`,
      type: "article",
    },
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const index = PROJECTS.findIndex((p) => p.id === id);
  const study = CASE_STUDIES[id];
  if (index < 0 || !study) notFound();

  const next = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <CaseStudyPage
      project={PROJECTS[index]}
      study={study}
      index={index}
      next={next}
    />
  );
}
