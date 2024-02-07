import { cn } from "@/lib/utils";
import React from "react";

interface CircularProgressProps {
  rate: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ rate }) => {
  // Рассчитываем угол для дуги в соответствии с процентами
  const progressAngle = (rate / 10) * 360;

  return (
    <div className="circle flex justify-center items-center relative h-[86px] w-[86px]">
      {/* Внешний круговой фон */}
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="progressGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" style={{ stopColor: "rgb(220, 74, 25)" }} />
            <stop offset="50%" style={{ stopColor: "rgb(252, 197, 57)" }} />
            <stop offset="100%" style={{ stopColor: "rgb(220, 74, 25)" }} />
          </linearGradient>
        </defs>
        <circle
          cx="50%"
          cy="50%"
          r="50%"
          fill="rgba(0, 0, 0, 0.44)"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>

      {/* Черный круг в центре с цифрами */}
      <div className="absolute w-[70px] h-[70px] flex justify-center items-center bg-black text-white text-[30px] rounded-full font-extrabold overflow-hidden">
        {rate.toFixed(1)}
      </div>

      {/* Круговой прогресс */}
      <svg
        className="absolute w-full h-full transform -rotate-90"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50%"
          cy="50%"
          r="45%"
          fill="none"
          stroke={`url(#progressGradient)`}
          strokeWidth="10"
          strokeDasharray={`${progressAngle} 360`}
          strokeDashoffset="0"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default CircularProgress;
