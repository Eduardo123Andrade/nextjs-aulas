import { Avatar } from "@/components/avatar";
import { Post } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";

interface Author {
  avatar: string;
  name: string;
}

interface PostCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: Author;
}

export const PostCard: React.FC<PostCardProps> = ({
  author,
  date,
  description,
  image,
  slug,
  title,
}) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="
      w-full max-w-2xl rounded-[12px] border-[1px] border-gray-400
      bg-gray-600 overflow-hidden transition-all duration-200
      hover:border-[1px] hover:border-blue-300"
    >
      {/* Post Content */}
      <div className="p-2 rounded-md overflow-hidden">
        {/* Image Container */}
        <div className="relative">
          {/* Date Container */}
          <div
            className="absolute top-0 right-0 px-3 py-1 bg-gray-600 
                    backdrop-blur-sm rounded-bl-[10px]"
          >
            <span className="text-body-xs text-gray-300">{date}</span>
          </div>
          <Image
            src={image}
            alt={title}
            width={288}
            height={144}
            className="w-full h-40 object-cover object-center transition rounded-[8px]"
          />
        </div>

        {/* Post Infos */}
        <div className="px-2 mt-5 spay-">
          <h2 className="text-heading-sm text-gray-100 line-clamp-3">
            {title}
          </h2>
          <p className="text-gray-300 text-body-sm line-clamp-3">
            {description}
          </p>

          {/* Post footer */}
          <div className="flex items-center gap-3 border-t border-gray-400 py-4">
            <Avatar.Container>
              <Avatar.Image size="sm" src={author.avatar} alt={title} />
              <Avatar.Title>{author.name}</Avatar.Title>
            </Avatar.Container>
            {/* <span className="text-body-sm text-gray-300">{author.name}</span> */}
          </div>
        </div>
      </div>
    </Link>
  );
};
