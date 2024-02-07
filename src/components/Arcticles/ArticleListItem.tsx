import { Timer, User } from "lucide-react";
import React from "react";

const ArticleListItem = () => {
  return (
    <div className="similar-article-card flex gap-[18px] p-[20px] justify-start items-center flex-col shadow rounded-[20px] bg-white dark:bg-[#202434]">
      <div className="image w-[310px] lg:w-[347px] h-[171px] bg-green-500 rounded-[20px]">
        {/* <Image src={"d"} alt="alt" /> */}
      </div>

      <div className="description flex flex-col gap-[12px] w-[310px] lg:w-[347px] text-center">
        <h3 className="text-[22px] font-bold leading-[120%] text-[#2A86E5]">
          Lorem Ipsum is simply dummy
        </h3>
        <div className="flex justify-center items-center gap-[22px] text-[#B3B3B1] h-[12px]">
          <div className="user flex gap-[1px]">
            <User fill="#B3B3B1" color="#B3B3B1" /> ALCO
          </div>
          <div className="date flex gap-[1px]">
            <Timer color="#B3B3B1" /> 26 janvier 2023
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleListItem;
