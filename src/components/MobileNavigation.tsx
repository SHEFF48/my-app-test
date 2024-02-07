"use client";

import React, { FC, useContext, useState } from "react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";
import BurgerButton from "./BurgerButton";
import { useBurgerContext } from "@/hooks/useBurgerContext";

interface IMobileMenu {
  className?: string;
}

const mainMenuList = [
  {
    title: "Item",
    link: "/",
  },
  {
    title: "Item",
    link: "/",
  },
  {
    title: "Item",
    link: "/",
  },
  {
    title: "Item",
    link: "/",
  },
  {
    title: "Item",
    link: "/",
  },
  {
    title: "Item",
    link: "/",
  },
  {
    title: "Item",
    link: "/",
  },
  {
    title: "Item",
    link: "/",
  },
];

const topMenuList = [
  {
    title: "Item 1",
    link: "/",
    icon: "Smartphone",
  },
  {
    title: "Item 2",
    link: "/",
    icon: "Filter",
  },
  {
    title: "Item 3",
    link: "/",
    icon: "Bot",
  },
  {
    title: "Item 4",
    link: "/",
    icon: "Apple",
  },
];

const MobileNavigation: FC<IMobileMenu> = ({ className }) => {
  const { isToogle, updateValue } = useBurgerContext();

  return (
    <>
      <div
        className={cn(
          "main-bar lg:hidden flex justify-between items-center container mx-auto h-[60px] lg:h-[110px]",
          className
        )}
      >
        <nav className="flex items-center gap-[61px] ">
          <Logo className="dark:text-white" />
        </nav>
        <BurgerButton isVisible={!!isToogle} clickHandler={updateValue} />
      </div>
      {isToogle && (
        <MobileMenu mainMenuList={mainMenuList} topMenuList={topMenuList} />
      )}
    </>
  );
};
export default MobileNavigation;
