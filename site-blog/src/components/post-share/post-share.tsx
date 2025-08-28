"use client";

import { useShare } from "@/hooks";
import { Post } from "contentlayer/generated";
import { Button } from "../ui/button";

interface PostShareProps {
  post: Post;
}

export const PostShare: React.FC<PostShareProps> = ({ post }) => {
  const { shareButtons } = useShare({
    url: `http://localhost:3000/blog/${post.slug}`,
    title: post?.title,
    text: post?.description,
  });

  return (
    <aside className="space-y-6">
      <div className="rounded-lg bg-gray-700">
        <h2 className="hidden md:block mb-4 text-heading-xs text-gray-100">
          Compartilhar
        </h2>

        <div className="flex justify-between md:flex-col gap-2">
          {shareButtons.map((provider) => (
            <Button
              key={provider.provider}
              variant="outline"
              className="w-fit md:w-full justify-start gap-2"
              onClick={() => provider.action()}
            >
              {provider.icon}
              <span className="hidden md:block">{provider.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </aside>
  );
};
