interface CardItemProps {
  label: string;
  title: string;
}

export const CardItem: React.FC<CardItemProps> = ({ label, title }) => {
  return (
    <>
      <span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm uppercase">
        {label}
      </span>
      <h2 className="text-gray-100 text-heading-lg">{title}</h2>
    </>
  );
};
