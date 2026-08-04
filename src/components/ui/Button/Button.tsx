import Link from "next/link";

import { ButtonProps } from "@/types/Button";

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const variants = {
    primary:
      "text-primary",
    secondary:
      "border border-zinc-900 text-zinc-900 hover:bg-background dark:border-white dark:text-foreground dark:hover:bg-zinc-900",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors ${variants[variant]}`}
    >
      {children}

      <span aria-hidden>↗</span>
    </Link>
  );
}