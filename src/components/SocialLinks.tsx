import * as icons from "lucide-react";
import Link from "next/link";
import React from "react";

const SocialLinks = () => {
  const socialIcons = [
    {
      name: "Facebook",
      link: "https://facebook",
    },
    {
      name: "Twitter",
      link: "https://facebook",
    },
    {
      name: "Instagram",
      link: "https://facebook",
    },
    {
      name: "Youtube",
      link: "https://facebook",
    },
    {
      name: "Newspaper",
      link: "https://facebook",
    },
    {
      name: "Rss",
      link: "https://facebook",
    },
  ];
  return (
    <>
      {socialIcons.map((socialIcon, index) => {
        const iconName =
          socialIcon.name[0].toUpperCase() + socialIcon.name.slice(1);
        const Icon = icons[iconName];

        return (
          <Link href={socialIcon.link} key={index}>
            <Icon />
          </Link>
        );
      })}
    </>
  );
};

export default SocialLinks;
