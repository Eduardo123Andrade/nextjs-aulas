import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface CrateStoreButtonProps {
  className?: string;
}

export const CreateStoreButton: React.FC<CrateStoreButtonProps> = ({
  className = "",
}) => {
  return (
    <Button variant="primary" asChild className={`mt-4 ${className}`}>
      <Link href="/criar-loja">
        Criar loja grátis
        <ArrowRight />
      </Link>
    </Button>
  );
};
