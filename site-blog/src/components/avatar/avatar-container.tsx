interface AvatarContainerProps {
  children: React.ReactNode;
}

export const AvatarContainer: React.FC<AvatarContainerProps> = ({
  children,
}) => {
  return <div className="flex items-center gap-3">{children}</div>;
};
