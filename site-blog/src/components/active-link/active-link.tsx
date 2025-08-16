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
  const isCurrentPath =
    router.asPath === href ||
    router.asPath === rest.as ||
    router.asPath.startsWith(String(rest.as));

  return (
    <Link
      href="/"
      className={cn(
        "text-sm font-medium transition-colors hover:text-blue-500",
        isCurrentPath ? "text-blue-50" : "text-muted-foreground"
      )}
    >
      {children}
    </Link>
  );
};
