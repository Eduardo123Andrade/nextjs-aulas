import { LucideProps } from "lucide-react";
import React from "react";

type IIllustration = React.ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
>;

interface SupportCardProps {
  title: string;
  description: string;
  Illustration: IIllustration;

  iconBackgroundColor?: string;
  backgroundColor?: string;
}

export const SupportCard: React.FC<SupportCardProps> = ({
  Illustration,
  description,
  title,
  backgroundColor = "bg-blue-400",
  iconBackgroundColor = "bg-blue-300",
}) => {
  return (
    <div
      className={`flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 ${backgroundColor}`}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-l mb-4 ${iconBackgroundColor}`}
      >
        <Illustration className="h-6 w-6 text-white" />
      </div>

      <strong className="text-heading-sm text-gray-100">{title}</strong>
      <p className="text-body-sm text-gray-200">{description}</p>
    </div>
  );
};
