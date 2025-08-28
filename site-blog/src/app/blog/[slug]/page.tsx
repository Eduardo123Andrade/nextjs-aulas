import PostPage from "@/templates/blog/post-page";
import { METADATA } from "@/utils";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({
  params,
}: BlogPostPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const post = allPosts.find((item) => item.slug.toLocaleLowerCase() === slug);
  if (!post) return {};

  return {
    ...METADATA,
    title: post.title,
    description: post.description,
    authors: [{ name: post.author.name }],
    openGraph: {
      ...METADATA.openGraph,
      images: [post.image],
    },
  };
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = allPosts.find((item) => item.slug.toLocaleLowerCase() === slug);
  if (!post) return notFound();

  return <PostPage post={post} />;
}
