import { CreateStoreButton } from "@/templates/landing-page/create-store-button";

interface FeatureButtonProps {
  className: string;
}

export const FeatureButton: React.FC<FeatureButtonProps> = ({ className }) => {
  return (
    <CreateStoreButton
      className={`rounded-full mt-4 md:mt-auto ${className}`}
    />
  );
};
