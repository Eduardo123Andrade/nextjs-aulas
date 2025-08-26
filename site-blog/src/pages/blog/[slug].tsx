import { Avatar } from "@/components/avatar";
import { Markdown } from "@/components/markdown";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { useShare } from "@/hooks";
import { allPosts } from "contentlayer/generated";
import { provideTracing } from "contentlayer/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PostPage() {
  const router = useRouter();
  const { slug } = router.query;
  const post = allPosts.find((item) => item.slug.toLocaleLowerCase() === slug);

  const { shareButtons } = useShare({
    url: `http://localhost:3000/blog/${slug}`,
    title: post?.title,
    text: post?.description,
  });

  if (!post) {
    // TODO - colocar caso para nao econtrado
    return <></>;
  }

  return (
    <main className="container flex flex-col gap-4 mt-32 text-gray-100">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/blog">Blog</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <span className="text-blue-200 text-action-sm">{post.title}</span>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12">
        <article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border-[1px]">
          <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </figure>

          <header className="p-4 md:p-6 lg:p-12 pb-0 mt-8 md:mt-12">
            <h1 className="mb-8 text-balance text-heading-lg md:text-heading-xl lg:text-heading-xl">
              {post.title}
            </h1>

            <Avatar.Container>
              <Avatar.Image
                size="sm"
                src={post.author.avatar}
                alt={post.title}
              />
              <Avatar.Content>
                <Avatar.Title>{post.author.name}</Avatar.Title>
                <Avatar.Description>
                  Publicado em{" "}
                  <time dateTime={post.date}>
                    {`${new Date(post.date).toLocaleDateString("pt-BR")}`}
                  </time>
                </Avatar.Description>
              </Avatar.Content>
            </Avatar.Container>
          </header>

          <div
            className="prose prove-invert max-w-none px-4 mt-12 
          md:px-6 lg:px-12"
          >
            <Markdown content={post.body.raw} />
          </div>
        </article>

        <aside className="space-y-6">
          <div className="rounded-lg bg-gray-700 p-4 md:p-6">
            <h2 className="mb-4 text-heading-xs text-gray-100">Compartilhar</h2>

            <div className="space-y-3">
              {shareButtons.map((provider) => (
                <Button
                  key={provider.provider}
                  variant="outline"
                  className="w-full justify-start gap-2"
                  onClick={() => provider.action()}
                >
                  {provider.icon}
                  {provider.name}
                </Button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
