import { Search } from "@/components/search";
import { useRouter } from "next/router";
import { PostCard } from "./components/post-card";
import { PostGridCard } from "./components";
import { allPosts } from "contentlayer/generated";

const PAGE_TITLE = "Dicas e estratégias para impulsionar seu negócio";

export const BlogList = () => {
  const router = useRouter();
  const query = router.query.q;

  const pageTitle = query ? `Resultados de busca para: ${query}` : PAGE_TITLE;

  const posts = allPosts;

  return (
    <div className="container flex flex-col py-24 flex-grow h-full">
      <header className="pb-14">
        <div className="space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4 px-4 md:px-0">
            <span className="text-cyan-100 text-body-tag w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300">
              BLOG
            </span>

            <h1
              className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl
            max-w-2xl text-gray-100"
            >
              {pageTitle}
            </h1>
          </div>
          <Search />
        </div>
      </header>

      <PostGridCard>
        {posts.map((post) => (
          <PostCard
            key={post._id}
            title={post.title}
            description={post.description}
            date={new Date(post.date).toLocaleDateString("pt-BR")}
            image={post.image}
            slug={post.slug}
            author={{
              avatar: post.author.avatar,
              name: post.author.name,
            }}
          />
        ))}
      </PostGridCard>
    </div>
  );
};
