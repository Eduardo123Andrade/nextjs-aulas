interface AvatarDescriptionProps {
  children: React.ReactNode;
}

export const AvatarDescription: React.FC<AvatarDescriptionProps> = ({
  children,
}) => {
  return <div className="text-gray-300 text-body-xs">{children}</div>;
};
