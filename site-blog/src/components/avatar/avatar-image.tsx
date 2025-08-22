import Image, { ImageProps } from "next/image";

interface AvatarImageProps extends ImageProps {}

export const AvatarImage: React.FC<AvatarImageProps> = ({
  width = 40,
  height = 40,
  ...rest
}) => {
  return (
    <Image
      {...{ width, height }}
      {...rest}
      className="flex items-center gap-3"
    />
  );
};
