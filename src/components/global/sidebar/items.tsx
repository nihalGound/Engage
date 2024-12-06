import { SIDEBAR_MENU } from "@/constants/menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {
  slug: string;
  page: string;
};

const Items = ({ slug, page }: Props) => {
  return SIDEBAR_MENU.map((item) => (
    <a href={`/dashboard/${slug}/${item.label === 'home' ? '/' : item.label}`}>
      <span
        className={cn(
          "capitalize flex gap-x-2 rounded-full p-3 transition-colors duration-200",
          page === item.label && "bg-white/20 text-white",
          page === slug && item.label === "home"
            ? "bg-white/20 text-white"
            : "text-gray-300 hover:bg-white/10 hover:text-white"
        )}
      >
        {item.icon}
        {item.label}
      </span>
    </a>
  ));
};

export default Items;
