import { Apple, Bot, Filter, Smartphone } from "lucide-react";
import Link from "next/link";
import React from "react";

import { ModeToggle } from "./ModeToogle";

import SocialLinks from "./SocialLinks";

const TopBar = () => {
  return (
    <div className="top-bar bg-gradient-to-r from-[#0DD0BA] to-[#2A86E5]">
      <div className="flex justify-between container  md:px-0 lg:px-[10px] mx-auto h-[58px] text-white">
        <nav className="hidden md:flex justify-center items-center md:gap-[23px] lg:gap-[31px] text-[14px] font-medium text-left tracking-[.5px]">
          <Link
            href={"/"}
            className="flex gap-[1px] justify-center items-center"
          >
            <Smartphone className="h-[14px]" /> Menu item 1
          </Link>
          <Link
            href={"/"}
            className="flex gap-[1px] justify-center items-center"
          >
            <Filter className="h-[14px]" /> Menu item 2
          </Link>
          <Link
            href={"/"}
            className="flex gap-[1px] justify-center items-center"
          >
            <Bot className="h-[14px]" />
            Menu item 3
          </Link>
          <Link
            href={"/"}
            className="hidden lg:flex gap-[1px] justify-center items-center"
          >
            <Apple className="h-[14px]" />
            Menu item 4
          </Link>
        </nav>
        <div className="right flex items-center gap-[20px] w-full md:w-auto justify-between md:justify-end">
          <div className="social-icons flex justify-center items-center gap-[10px] lg:gap-[19px]">
            <SocialLinks />
          </div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
