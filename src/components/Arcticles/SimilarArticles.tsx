import { Timer, User } from "lucide-react";
import React from "react";
import ArticleListItem from "./ArticleListItem";

const SimilarArticles = () => {
  return (
    <div className="similar-articles-block flex flex-col gap-[30px]">
      <div className="title flex flex-col gap-[9px]">
        <h2 className="text-[20px] text-[#707070] font-bold tracking-[.5px] leading-[26px]">
          Similar aricles
        </h2>
        <div className="w-[44px] h-[8px] rounded-[20px] bg-gradient-to-r from-[#0DD0BA] to-[#2A86E5] "></div>
      </div>
      <div className="similar-articles flex flex-wrap justify-around  gap-[20px] ">
        {[...Array(4)].map((item, index) => (
          <ArticleListItem key={index} />
        ))}
      </div>
    </div>
  );
};

export default SimilarArticles;
