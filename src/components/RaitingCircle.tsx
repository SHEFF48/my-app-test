import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface IRate {
  votes?: number;
  rate?: number;
  userRate?: number;
  className?: string;
}

const RaitingCircle: FC<IRate> = ({
  votes = 0,
  rate = 0,
  userRate = 0,
  className,
}) => {
  return (
    <div
      className={cn(
        "widget flex justify-between items-center gap-[12px]",
        className
      )}
    >
      <div className="circle flex justify-center items-center h-[86px] w-[86px] rounded-full overflow-hidden bg-orange-500">
        <div className="w-[70px] h-[70px] flex justify-center items-center bg-black text-white text-[30px] rounded-full font-extrabold overflow-hidden">
          {rate.toFixed(1)}
        </div>
      </div>
      <div className="description text-white">
        <h3 className="text-[24px] font-extrabold">Players</h3>
        <p className="text-[16px] font-medium">{votes.toFixed(0)} votes</p>
        <p className="text-[16px] font-bold">
          Your raiting{" "}
          <span className="text-[#F9B936]">{userRate.toFixed(1)}</span>
        </p>
      </div>
    </div>
  );
};

export default RaitingCircle;
