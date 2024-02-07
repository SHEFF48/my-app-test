import { cn } from "@/lib/utils";
import { link } from "fs/promises";
import Link from "next/link";
import { title } from "process";
import React from "react";

interface ILinksList {
  title: string;
  link: string;
}

const data: ILinksList[] = [
  { title: "Home", link: "/" },
  { title: "Lorem Ipsum is", link: "/" },
  { title: "Lorem Ipsum is simply dummy", link: "/" },
];
const Breadcrumbs = () => {
  const separator = ">";
  return (
    <div className="breadcrumbs text-center md:text-left text-[14px] text-[#707070]">
      {data.map((item, index) => {
        return (
          <Link
            className={cn(data.length - 1 == index ? "font-bold" : "")}
            key={index}
            href={item?.link}
          >
            {item?.title}{" "}
            {data.length != index + 1 ? (
              <span>&#32;{separator}&#32; </span>
            ) : (
              ""
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
