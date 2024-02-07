"use client";
import Link from "next/link";
import React, { FC } from "react";

interface IMenuItem {
  link: string;
  title: string;
  icon?: any;
}

interface IMenuList {
  data?: IMenuItem[];
  className?: string;
  clickHandler?: () => void;
}

const testData: IMenuItem[] = [
  {
    title: "Item 1",
    link: "/",
  },
  {
    title: "Item 2",
    link: "/",
  },
  {
    title: "Item 3",
    link: "/",
  },
  {
    title: "Item 4",
    link: "/",
  },
  {
    title: "Item 5",
    link: "/",
  },
  {
    title: "Item 6",
    link: "/",
  },
];

const MenuList: FC<IMenuList> = ({
  data = testData,
  className = "",
  clickHandler,
}) => {
  return (
    <ul className={className}>
      {data.map((listItem, index) => {
        return (
          <li key={index}>
            <Link href={listItem.link} onClick={() => clickHandler()}>
              {listItem.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuList;
