import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

type AvatarSize = "xs" | "sm";

interface AvatarImageProps extends Omit<ImageProps, "hight" | "width"> {
  size?: AvatarSize;
}

const avatarSize = {
  xs: "h-5 w-5",
  sm: "h-9 w-9",
};

export const AvatarImage: React.FC<AvatarImageProps> = ({
  size = "xs",
  ...rest
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full border-blue-200 border-[1px]",
        avatarSize[size]
      )}
    >
      <Image
        // {...{ width, height }}
        {...rest}
        fill
        className="flex items-center gap-3"
      />
    </div>
  );
};
