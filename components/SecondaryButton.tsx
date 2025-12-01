import { cn } from "@/lib/utils";
import React from "react";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const SecondaryButton = ({ className = "", children, ...props }: Props) => {
  return (
    <button
      className={cn(
        "inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-xs font-medium text-white tracking-tight bg-white/10 hover:bg-white/20",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
