interface AvatarContentProps {
  children: React.ReactNode;
}

export const AvatarContent: React.FC<AvatarContentProps> = ({ children }) => {
  return <div className="flex flex-col">{children}</div>;
};
