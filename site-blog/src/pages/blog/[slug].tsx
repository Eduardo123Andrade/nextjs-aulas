import PostPage, { PostPageProps } from "@/templates/blog/post-page";
import { allPosts } from "contentlayer/generated";
import { GetStaticPaths, GetStaticProps } from "next";

export default function PostPage1({ post }: PostPageProps) {
  return <PostPage post={post} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const recentPosts = sortedPosts.slice(0, 5);

  const paths = recentPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string };

  const post = allPosts.find((item) => item.slug.toLocaleLowerCase() === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};
