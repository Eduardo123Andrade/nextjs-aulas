import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface FeatureButtonProps {
  className: string;
}

export const FeatureButton: React.FC<FeatureButtonProps> = ({ className }) => {
  return (
    <Button asChild className={`rounded-full mt-4 md:mt-auto ${className}`}>
      <Link href="/criar-loja">
        Criar loja grátis
        <ArrowRight />
      </Link>
    </Button>
  );
};
