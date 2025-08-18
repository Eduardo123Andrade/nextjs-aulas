import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface ActiveLinkProps extends LinkProps {
  children: React.ReactNode;
}

export const ActiveLink: React.FC<ActiveLinkProps> = ({
  children,
  href,
  ...rest
}) => {
  const router = useRouter();
  const isCurrentPath = router.asPath === href || router.asPath === rest.as;

  return (
    <Link
      href="/"
      className={cn(
        "text-action-sm font-medium transition-colors hover:text-blue-500",
        isCurrentPath ? "text-blue-200" : "text-gray-100"
      )}
    >
      {children}
    </Link>
  );
};
