import React from "react";
import DesctopNavigation from "./Navigation/DesctopNavigation";
import MobileNavigation from "./Navigation/MobileNavigation";
import TopBar from "./TopBar";
import { BurgerContextProvider } from "@/context/BurgerCotext";

const Header = () => {
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
    },
    {
      title: "Item 2",
      link: "/",
    },
    {
      title: "Item 3",
      link: "/",
    },
    {
      title: "Item 4",
      link: "/",
    },
  ];
  return (
    <header className="flex flex-col w-full bg-white dark:bg-[#0E1219]">
      <TopBar />
      <DesctopNavigation />
      <BurgerContextProvider>
        <MobileNavigation />
      </BurgerContextProvider>
    </header>
  );
};

export default Header;
