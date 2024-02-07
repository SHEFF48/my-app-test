import { cn } from "@/lib/utils";
import React, { FC } from "react";
import CircularProgressBar from "./CircularProgressBar/CirularProgressBar";

interface IRate {
  votes?: number;
  rate?: number;
  userRate?: number;
  className?: string;
}

const RaitingCircle: FC<IRate> = ({ votes = 0, rate = 0, className }) => {
  return (
    <div
      className={cn(
        "widget flex justify-between items-center gap-[12px]",
        className
      )}
    >
      <CircularProgressBar rate={Number(rate.toFixed(1))} />

      <div className="description text-white">
        <h3 className="text-[24px] font-extrabold">Players</h3>
        <p className="text-[16px] font-medium">{votes.toFixed(0)} votes</p>
        <p className="text-[16px] font-bold">
          Your raiting <span className="text-[#F9B936]">{rate.toFixed(1)}</span>
        </p>
      </div>
    </div>
  );
};

export default RaitingCircle;
