"use client";

import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface ActiveLinkProps extends LinkProps {
  children: React.ReactNode;
}

export const ActiveLink: React.FC<ActiveLinkProps> = ({
  children,
  href,
  ...rest
}) => {
  const linkPath = (typeof href === "string" ? href : href.pathname) ?? "";
  const pathname = usePathname();
  // const router = useRouter();
  const isCurrentPath =
    pathname === linkPath || pathname?.startsWith(`${linkPath}/`); //router.asPath === href || router.asPath === rest.as;

  return (
    <Link
      {...rest}
      href={href}
      className={cn(
        "text-action-sm font-medium transition-colors hover:text-blue-500",
        isCurrentPath ? "text-blue-200" : "text-gray-100"
      )}
    >
      {children}
    </Link>
  );
};
