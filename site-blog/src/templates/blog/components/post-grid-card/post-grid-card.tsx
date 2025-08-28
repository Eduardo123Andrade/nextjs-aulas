interface PostGridCardProps {
  children: React.ReactNode;
}

export const PostGridCard: React.FC<PostGridCardProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  );
};
