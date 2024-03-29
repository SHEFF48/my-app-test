import { cn } from "@/lib/utils";
import { Bot, Facebook, Heart, Instagram, Twitter } from "lucide-react";
import React, { FC } from "react";

interface IShareSocial {
  className?: string;
}

const ShareSocial: FC<IShareSocial> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <div className="flex justify-center items-center h-[40px] w-[40px] bg-[#3A579A] cursor-pointer ">
        <Facebook className="text-white h-[20px] w-[20px]" />
      </div>
      <div className="flex justify-center items-center h-[40px] w-[40px] bg-[#00ABF0] cursor-pointer">
        <Twitter className="text-white h-[20px] w-[20px]" />
      </div>
      <div className="flex justify-center items-center h-[40px] w-[40px] bg-[#24A2E0] cursor-pointer">
        <Instagram className="text-white h-[20px] w-[20px]" />
      </div>
      <div className="flex justify-center items-center h-[40px] w-[40px] bg-[#FC461E] cursor-pointer">
        <Bot className="text-white h-[20px] w-[20px]" />
      </div>
      <div className="flex justify-center items-center h-[40px] w-[40px] bg-[#F95149] cursor-pointer">
        <Heart className="text-white h-[20px] w-[20px]" />
      </div>
    </div>
  );
};

export default ShareSocial;
