import { cn } from "@/lib/utils";
import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const MainButton = ({ className = "", children, ...props }: Props) => {
  return (
    <button
      className={cn(
        "inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-xs font-medium text-white tracking-tight bg-linear-to-r from-emerald-500 to-green-500 hover:from-emerald-500 hover:to-green-600 transition-all duration-200 ",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default MainButton;
