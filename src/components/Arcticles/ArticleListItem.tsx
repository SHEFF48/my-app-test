import { Timer, User } from "lucide-react";
import Image from "next/image";
import React from "react";

interface IArticleItem {
  title: string;
  user: string;
  date: string;
  imageURL: string;
}

const ArticleListItem: React.FC<IArticleItem> = ({
  title,
  user,
  date,
  imageURL,
}) => {
  return (
    <div className="similar-article-card flex gap-[18px] p-[20px] justify-start items-center flex-col shadow rounded-[20px] bg-white dark:bg-[#202434]">
      <div className="image relative w-[310px] lg:w-[347px] h-[171px] bg-green-500 rounded-[20px] overflow-hidden       ">
        {imageURL && (
          <Image
            src={imageURL}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
          />
        )}
      </div>

      <div className="description flex flex-col gap-[12px] w-[310px] lg:w-[347px] text-center">
        <h3 className="text-[22px] font-bold leading-[120%] text-[#2A86E5]">
          {title}
        </h3>
        <div className="flex justify-center items-center gap-[22px] text-[#B3B3B1] h-[12px]">
          <div className="user flex gap-[1px]">
            <User fill="#B3B3B1" color="#B3B3B1" />
            {user}
          </div>
          <div className="date flex gap-[1px]">
            <Timer color="#B3B3B1" />
            {date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleListItem;
