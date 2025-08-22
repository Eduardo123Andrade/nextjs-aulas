import { Search } from "@/components/search";
import { allPosts } from "contentlayer/generated";
import { Inbox } from "lucide-react";
import { useRouter } from "next/router";
import { PostGridCard } from "./components";
import { PostCard } from "./components/post-card";

const PAGE_TITLE = "Dicas e estratégias para impulsionar seu negócio";

export const BlogList = () => {
  const router = useRouter();
  const query = router.query.q as string;

  const pageTitle = query ? `Resultados de busca para: ${query}` : PAGE_TITLE;

  const posts = query
    ? allPosts.filter((post) =>
        post.title.toLocaleLowerCase().includes(query.toLowerCase())
      )
    : allPosts;

  const hasPosts = !!posts.length;

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

      {hasPosts ? (
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
      ) : (
        <div
          className="flex flex-col items-center justify-center gap-2
          border-dashed border-2 border-gray-300 p-8 md:p-12 rounded-lg"
        >
          <Inbox className="text-cyan-100 h-12 w-12" />
          <p className="text-gray-100 text-center">Nenhum post encontrado</p>
        </div>
      )}
    </div>
  );
};
