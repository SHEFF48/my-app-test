import {
  Facebook,
  Instagram,
  Newspaper,
  Rss,
  Search,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Switch } from "./ui/switch";
import { Input } from "./ui/input";
import { ModeToggle } from "./ModeToogle";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="w-full bg-white dark:bg-[#0E1219]">
      <div className="top-bar bg-gradient-to-r from-[#0DD0BA] to-[#2A86E5]">
        <div className="flex justify-between container mx-auto h-[58px] text-white">
          <nav className="hidden lg:flex justify-center items-center gap-[31px] text-[14px] font-medium text-left tracking-[.5px]">
            <Link href={"/"}>Menu item 1</Link>
            <Link href={"/"}>Menu item 2</Link>
            <Link href={"/"}>Menu item 3</Link>
            <Link href={"/"}>Menu item 4</Link>
          </nav>
          <div className="right flex items-center gap-[20px] w-full md:w-auto justify-between md:justify-end">
            <div className="social-icons flex justify-center items-center gap-[19px]">
              <Facebook />
              <Twitter />
              <Instagram />
              <Youtube />
              <Newspaper />
              <Rss />
            </div>
            <ModeToggle />
          </div>
        </div>
      </div>

      <div className="main-bar flex justify-between items-center container mx-auto h-[60px] lg:h-[110px]">
        <nav className="flex items-center gap-[61px] ">
          <Logo className="dark:text-white" />
          <ul className="hidden lg:flex text-[18px] font-medium text-left leading-[140%] gap-[28px]">
            <li>
              <Link href={""} className="text-[#2A86E5] dark:text-[#0DD0BA]">
                Item
              </Link>
            </li>
            <li>
              <Link href={""} className="text-[#2A86E5] dark:text-[#0DD0BA]">
                Item
              </Link>
            </li>
            <li>
              <Link href={""} className="text-[#2A86E5] dark:text-[#0DD0BA]">
                Item
              </Link>
            </li>
            <li>
              <Link href={""} className="text-[#2A86E5] dark:text-[#0DD0BA]">
                Item
              </Link>
            </li>
            <li>
              <Link href={""} className="text-[#2A86E5] dark:text-[#0DD0BA]">
                Item
              </Link>
            </li>
            <li>
              <Link href={""} className="text-[#2A86E5] dark:text-[#0DD0BA]">
                Item
              </Link>
            </li>
            <li>
              <Link href={""} className="text-[#2A86E5] dark:text-[#0DD0BA]">
                Item
              </Link>
            </li>
            <li>
              <Link href={""} className="text-[#2A86E5] dark:text-[#0DD0BA]">
                Item
              </Link>
            </li>
          </ul>
        </nav>
        <div className="search relative w-[175px] h-[42px] hidden lg:block">
          <Input
            placeholder="Search for..."
            className="h-full w-full rounded-[40px] pl-[21px] text-[#757575] bg-[#EEEEEE] dark:bg-[#183A5D]"
          />
          <Search className="absolute right-[10px] top-[9px] text-[20px] text-[#E1541B] stroke-[2.5px]" />
        </div>
      </div>
    </header>
  );
};

export default Header;
