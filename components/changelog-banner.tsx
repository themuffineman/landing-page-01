"use client";
import { LucideArrowUpRight } from "lucide-react";

const ChangelogBanner = () => {
  return (
    <div className="flex justify-center">
      <button
        className="group relative flex items-center gap-2 rounded-full bg-pink-100/80 p-2 font-medium text-gray-900 ring-1 shadow-lg ring-black/10 backdrop-blur-sm transition-colors hover:bg-blue-500/20 focus:outline-hidden sm:text-sm"
        type="button"
      >
        <span className="truncate rounded-full border border-orange-700/20 bg-orange-700 animate-pulse size-2" />
        <span className="text-xs inline-flex items-center">
          View Our Changelog{" "}
          <LucideArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover:rotate-45" />
        </span>
      </button>
    </div>
  );
};

export default ChangelogBanner;
