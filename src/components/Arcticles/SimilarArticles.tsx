import { Timer, User } from "lucide-react";
import React from "react";
import ArticleListItem from "./ArticleListItem";

const articlesList = [
  {
    title: "Lorem Ipsum is simply dummy",
    user: "ALCO",
    date: "26 janvier 2023",
    imageURL: "/article.png",
  },
  {
    title: "Lorem Ipsum is simply dummy",
    user: "ALCO",
    date: "26 janvier 2023",
    imageURL: "/article.png",
  },
  {
    title: "Lorem Ipsum is simply dummy",
    user: "ALCO",
    date: "26 janvier 2023",
    imageURL: "/article.png",
  },
  {
    title: "Lorem Ipsum is simply dummy",
    user: "ALCO",
    date: "26 janvier 2023",
    imageURL: "/article.png",
  },
];

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
        {articlesList.map((item, index) => (
          <ArticleListItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SimilarArticles;
