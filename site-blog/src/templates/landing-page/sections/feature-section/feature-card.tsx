import { CardItem } from "./card-item";

interface FeatureCardProps {
  label: string;
  title: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ label, title }) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg p-6 bg-gray-500">
      <CardItem label={label} title={title} />
    </div>
  );
};
