"use client";

import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface IBurgerButton {
  isVisible: boolean;
  clickHandler: () => void;
}

const BurgerButton: FC<IBurgerButton> = ({ isVisible, clickHandler }) => {
  return (
    <div
      className="relative flex flex-col justify-between items-center w-[26px] h-[22px] cursor-pointer"
      onClick={() => clickHandler()}
    >
      <div
        className={cn(
          "line w-full h-[3px] bg-[#2A86E5] rounded ",
          !isVisible
            ? ""
            : "absolute origin-bottom rotate-45 bottom-1/2 right-0"
        )}
      ></div>

      <div
        className={cn(
          "w-full h-[3px] bg-[#2A86E5] rounded",
          !isVisible ? "block" : "hidden"
        )}
      ></div>
      <div
        className={cn(
          "line w-full h-[3px] bg-[#2A86E5]  rounded",
          !isVisible ? "" : "absolute origin-center -rotate-45 bottom-1/2"
        )}
      ></div>
    </div>
  );
};

export default BurgerButton;
