import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import MenuList from "./Menu/MenuList";

const DesctopNavigation = () => {
  return (
    <>
      <div className="main-bar hidden lg:flex justify-between items-center container mx-auto h-[60px] lg:h-[110px]">
        <nav className="flex items-center gap-[61px] ">
          <Logo className="dark:text-white" />
          <MenuList className="hidden lg:flex text-[18px] font-medium text-left leading-[140%] gap-[28px] text-[#2A86E5] dark:text-[#0DD0BA]" />
        </nav>
        <div className="search relative w-[175px] h-[42px] hidden lg:block">
          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default DesctopNavigation;
