import { cn } from "@/lib/utils";
import * as icons from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

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

const MenuList: FC<IMenuList> = ({ data = testData, className = "" }) => {
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
          <li key={index} className="flex gap-[1px] w-auto">
            {listItem?.icon && (
              <div className="h-[14px]">
                <Icon />
              </div>
            )}
            <Link href={listItem.link}>{listItem.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuList;
