import React, { FC } from "react";
import SearchBar from "./SearchBar";
import MenuList from "./Menu/MenuListClient";
import { cn } from "@/lib/utils";
import { useBurgerContext } from "@/hooks/useBurgerContext";

interface IMobileMenu {
  mainMenuList: any[];
  topMenuList: any[];
  className?: string;
}

const MobileMenu: FC<IMobileMenu> = ({
  mainMenuList,
  topMenuList,
  className,
}) => {
  const { isToogle, updateValue } = useBurgerContext();
  return (
    <div
      className={cn(
        "container flex flex-col justify-between items-center gap-[50px] min-h-[calc(100vh-120px)] md:pt-[11px] pb-[30px]",
        className
      )}
    >
      <SearchBar className="w-full lg:hidden" />
      <MenuList
        data={mainMenuList}
        className="flex flex-col text-[18px] font-medium text-left leading-[140%] gap-[28px] md:gap-[58px] text-[#2A86E5] dark:text-[#0DD0BA]"
        clickHandler={updateValue}
      />
      <MenuList
        data={topMenuList}
        className="flex flex-col md:flex-row justify-evenly gap-[23px] md:gap-[40px]"
        clickHandler={updateValue}
      />
    </div>
  );
};

export default MobileMenu;
