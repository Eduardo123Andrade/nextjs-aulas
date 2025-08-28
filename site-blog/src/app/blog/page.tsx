import { BlogList } from "@/templates/blog";
import { METADATA } from "@/utils";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...METADATA,
  title: "Blog",
  description: "Dicas e estratégias para impulsionar seu negócio",
  openGraph: {
    ...METADATA.openGraph,
    title: "Blog",
    description: "Dicas e estratégias para impulsionar seu negócio",
  },
};

export default function BlogPage() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return <BlogList posts={sortedPosts} />;
}
