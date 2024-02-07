import Link from "next/link";
import React from "react";

import {
  Facebook,
  Instagram,
  Newspaper,
  Rss,
  Twitter,
  Youtube,
} from "lucide-react";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="p-[15px] md:p-[30px] lg:p-[28px] ">
      <div className="pt-[20px] pb-[20px] rounded-[40px] bg-gradient-to-r from-[#0DD0BA] to-[#2A86E5]">
        <div className="container flex justify-center lg:justify-between gap-[30px] lg:gap-[70px] flex-wrap">
          <div className="about flex flex-col justify-between items-center gap-[30] w-[350px] md:w-[668px] lg:w-[351px] p-[30px] bg-white dark:bg-[#202434] rounded-[20px]">
            <div className="flex justify-center items-center h-[72px] lg:h-[134px]">
              <Logo className={"dark:text-white"} />
            </div>
            <div className="flex flex-col justify-between gap-[45px]">
              <div className="description flex flex-col gap-[12px] w-auto md:w-[524px] lg:w-[291px] text-[#0DD0BA] dark:text-white text-[16px] text-center lg:text-left leading-[23px] tracking-[.5px]">
                <p>Lorem Ipsum is simply dummy</p>
                <p>
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                </p>
              </div>
              <div className="social-icons flex justify-center items-center gap-[24px] text-[#0DD0BA]">
                <SocialLinks />
              </div>
            </div>
          </div>
          <div className="right-block flex flex-col justify-between items-center lg:items-start flex-wrap gap-[30px] lg:pt-[90px] box-border">
            <div className="flex gap-[50px] md:gap-[130px] justify-center md:justify-between items-start flex-wrap">
              <div className="flex flex-col items-center w-full md:w-auto gap-[14px] text-white">
                <h2 className="text-[24px] font-bold leading-[31px] tracking-[.5px] ">
                  Categhory
                </h2>
                <ul className="flex flex-col gap-[3px] text-[15px] tracking-[.5px] lg:list-disc list-inside">
                  <li>
                    <Link href={"/"}>Item 1</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Item 2</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Item 3</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Item 4</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Item 5</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Item 6</Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center gap-[14px] text-white">
                <h2 className="text-[24px] font-bold leading-[31px] tracking-[.5px] ">
                  Play better
                </h2>
                <ul className="flex flex-col gap-[3px] text-[15px] tracking-[.5px] lg:list-disc list-inside">
                  <li>
                    <Link href={"/"}>Item 1</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Item 2</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Item 3</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Item 4</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Item 5</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Item 6</Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center gap-[14px] text-white">
                <h2 className="text-[24px] font-bold leading-[31px] tracking-[.5px] ">
                  Play better
                </h2>
                <ul className="flex flex-col gap-[3px] text-[15px] tracking-[.5px] lg:list-disc list-inside">
                  <li>
                    <Link href={"/"}>Link</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Link</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Link</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Link</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Link</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="copyright text-[13px] text-center lg:text-left italic text-white md:mb-[20px] lg:mb-[60px]">
              Copyright © 2024. Tous droits réservés.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
