import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeadingProps = {
  children: ReactNode;
  className?: string;
};

export function Heading({ children, className }: HeadingProps) {
  return (
    <h2
      className={cn(
        "font-bold tracking-tight text-[min(8dvw,_3rem)] pb-6 md:pb-8 capitalize",
        className,
      )}
    >
      {children}
    </h2>
  );
}
