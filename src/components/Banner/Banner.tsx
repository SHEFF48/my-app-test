import { Apple, Download } from "lucide-react";
import Link from "next/link";
import React from "react";
import RaitingLine from "../RaitingLine";

import RaitingCircle from "../RaitingCircle";

const Banner = () => {
  return (
    <div className="w-full bg-white dark:bg-[#0E1219] rounded-[40px] overflow-hidden shadow-sm dark:shadow-[0px_22px_59px_0px_rgba(42,134,229,0.07)]">
      <div className="top-block flex justify-between items-center h-[184px] w-full px-[20px] md:px-[30px] lg:px-[56px] rounded-[40px]  bg-cyan-600">
        <div className="left-block flex items-center gap-[15px] md:gap-[24px]">
          <div className="img shrink-0 h-[89px] w-[89px] md:h-[120px] md:w-[120px] rounded-[10px] bg-amber-500"></div>
          <div className="descripripion flex flex-col gap-[10px] shrink-1">
            <h2 className="text-[24px] md:text-[35px] lg:text-[30px] text-white font-bold tracking-[.5px]">
              Lorem Ipsum is simply dummy
            </h2>
            <div className="buttons gap-[8px] hidden lg:flex">
              <Link
                href={"/"}
                className="flex justify-between items-center text-[18px] gap-[3px] px-[13px] h-[28px] border rounded-[17px] text-white tracking-[.5px]"
              >
                <Apple className="h-[13px] w-fit" />
                Android
              </Link>
              <Link
                href={"/"}
                className="flex justify-between items-center text-[18px] gap-[3px] px-[13px] h-[28px] border rounded-[17px] text-white tracking-[.5px]"
              >
                <Apple className="h-[13px] w-fit" />
                iOS
              </Link>
              <Link
                href={"/"}
                className="flex justify-between items-center text-[18px] gap-[3px] px-[13px] h-[28px] rounded-[17px] text-white tracking-[.5px] bg-gradient-to-r from-[#0DD0BA] to-[#2A86E5]"
              >
                <Download className="h-[15px] " fill="#fff" />
                Download on PC
              </Link>
            </div>
          </div>
        </div>
        <RaitingCircle
          rate={6}
          userRate={3}
          votes={12}
          className="hidden lg:flex"
        />
      </div>
      <div className="bottom-block hidden lg:flex justify-between items-center pl-[56px] pr-[33px] h-[50px]">
        <ul className="flex">
          <li className="border-r border-[#707070]">
            <Link href={"/"} className="px-[19px] text-[16px] text-[#707070]">
              Lorem Ipsum is simply dummy
            </Link>
          </li>
          <li className="border-r border-[#707070]">
            <Link href={"/"} className="px-[19px] text-[16px] text-[#707070]">
              Item
            </Link>
          </li>
          <li className="border-r border-[#707070]">
            <Link href={"/"} className="px-[19px] text-[16px] text-[#707070]">
              Item
            </Link>
          </li>
          <li className="border-r border-[#707070]">
            <Link href={"/"} className="px-[19px] text-[16px] text-[#707070]">
              Item
            </Link>
          </li>
          <li>
            <Link href={"/"} className="px-[19px] text-[16px] text-[#707070]">
              Item
            </Link>
          </li>
        </ul>

        <RaitingLine rate={9} />
      </div>
    </div>
  );
};

export default Banner;
