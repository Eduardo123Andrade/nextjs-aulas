interface AvatarTitleProps {
  children: React.ReactNode;
}

export const AvatarTitle: React.FC<AvatarTitleProps> = ({ children }) => {
  return <strong className="text-body-sm text-gray-200">{children}</strong>;
};
