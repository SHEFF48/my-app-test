import React, { FC } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface ISearchBar {
  className?: string;
}

const SearchBar: FC<ISearchBar> = ({ className }) => {
  return (
    <div className={cn("search relative w-[175px] h-[42px]", className)}>
      <Input
        placeholder="Search for..."
        className="h-full w-full rounded-[40px] pl-[21px] text-[#757575] bg-[#EEEEEE] dark:bg-[#183A5D]"
      />
      <Search className="absolute right-[10px] top-[9px] text-[20px] text-[#E1541B] stroke-[2.5px]" />
    </div>
  );
};

export default SearchBar;
