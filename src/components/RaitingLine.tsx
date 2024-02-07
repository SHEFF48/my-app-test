import { cn } from "@/lib/utils";
import * as React from "react";

interface IRate {
  countSections?: number;
  rate?: number;
}

const RaitingLine: React.FC<IRate> = ({ rate = 0, countSections = 10 }) => {
  const currentRateValue = Math.round(Number(rate));
  return (
    <ul className="flex justify-center items-center pl-[10px] h-[35px] rounded-[40px] overflow-hidden text-white bg-gradient-to-r from-[#FCC539] to-[#DC4A19]">
      <li className="px-[12px] font-bold">Note</li>

      {[...Array(10)].map((item, index) => {
        return (
          <li
            key={index}
            className={cn(
              "flex items-center justify-center h-full border-l border-white border-opacity-[.2] font-bold",
              index >= currentRateValue
                ? "text-black bg-gray-300"
                : "bg-transparent",
              index + 1 === countSections ? "w-[32px] pr-[10px]" : "w-[20px]"
            )}
          >
            {index + 1}
          </li>
        );
      })}
    </ul>
  );
};

export default RaitingLine;
