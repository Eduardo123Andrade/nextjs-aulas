import { CardItem } from "./card-item";

interface FeatureCardProps {
  label: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  label,
  title,
  className,
  children,
}) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg p-6 bg-gray-500">
      <CardItem label={label} title={title} />
    </div>
  );
};
