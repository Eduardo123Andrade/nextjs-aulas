import PostPage from "@/templates/blog/post-page";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = allPosts.find((item) => item.slug.toLocaleLowerCase() === slug);
  if (!post) return notFound();

  return <PostPage post={post} />;
}
