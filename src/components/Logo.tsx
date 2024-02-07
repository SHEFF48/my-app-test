import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface ILogo {
  title?: string;
  children?: ReactNode;
  className?: string;
}

const Logo: FC<ILogo> = ({ title = "logotype", className, children }) => {
  return (
    <Link
      href={"/"}
      className={cn(
        "text-[30px] text-black font-normal leading-[23px] tracking-[.5px] uppercase",
        className
      )}
    >
      {title}
      {children && children}
    </Link>
  );
};

export default Logo;
