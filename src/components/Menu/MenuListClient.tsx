"use client";
import Link from "next/link";
import React, { FC } from "react";
import * as icons from "lucide-react";

// Define a type for Lucide icons
type LucideIconType = {
  [key: string]: React.FC<any> | any;
};

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
        const iconName =
          listItem?.icon &&
          listItem?.icon[0]?.toUpperCase() + listItem?.icon?.slice(1);

        const Icon = iconName
          ? ((icons as LucideIconType)[iconName] as React.ComponentType<any>)
          : ((icons as LucideIconType)[
              "Component"
            ] as React.ComponentType<any>);

        return (
          <li
            key={index}
            className="flex items-center justify-center gap-[1px] w-auto"
          >
            {listItem?.icon && <Icon className="h-[14px] relative" />}
            <Link
              href={listItem.link}
              onClick={() => {
                typeof clickHandler == "function" && clickHandler();
              }}
            >
              {listItem.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuList;
