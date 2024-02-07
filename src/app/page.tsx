import SimilarArticles from "@/components/Arcticles/SimilarArticles";
import Banner from "@/components/Banner/Banner";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Timer, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Lorem Ipsum is simply dummy",
  openGraph: {
    title: "Lorem Ipsum is simply dummy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting   industry.",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "Lorem Ipsum is simply dummy",
    "@type": "Article",
    name: "Lorem Ipsum is simply dummy",
    image: "/article-icon.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting   industry.",
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-[40px] bg-[#FCFCFC] dark:bg-[#0E1219] pt-0 lg:pt-[40px] pb-[130px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container md:p-0 ">
        <Banner />
      </div>
      <div className="container md:p-0 mx-auto flex justify-between items-start gap-[60]">
        <div className="content max-w-[810px]">
          <Breadcrumbs />
          <div className="arcticle-block flex flex-col gap-[60px]">
            <div className="article flex flex-col gap-[20px]">
              <h1 className="text-[35px] md:text-[42px] font-[900] bg-gradient-to-r from-[#0DD0BA]  to-[#2A86E5] inline-block text-center md:text-left text-transparent bg-clip-text tracking-[.5px] leading-[130%] md:leading-[54px]">
                Lorem Ipsum is simply dummy
              </h1>
              <div className="aricle-text text-[20px] text-[#707070] tracking-[.5px] leading-[32px]">
                <p>
                  {`  Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.`}
                </p>
              </div>
            </div>

            <div className="similar-articles-block">
              <SimilarArticles />
            </div>
          </div>
        </div>
        <div className="sidebar w-[300px] hidden lg:block">
          <div className="vertical-banner w-[300px] h-[600px] rounded-[20px] bg-orange-500 overflow-hidden"></div>
        </div>
      </div>
    </main>
  );
}
