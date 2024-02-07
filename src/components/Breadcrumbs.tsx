import Link from "next/link";
import React from "react";

const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs text-center md:text-left text-[14px] text-[#707070]">
      {/* <ul className="hidden md:flex gap-[3px] flex-wrap text-[14px] text-[#707070]">
        <li>
          <Link href={"/"}>{"Home"}</Link>
        </li>
        <li>{">"}</li>
        <li>
          <Link href={"/"}>{"Lorem Ipsum is"}</Link>
        </li>
        <li>{">"}</li>
        <li>
          <Link href={"/"}>{"Lorem Ipsum is simply dummy"}</Link>
        </li>
      </ul> */}
      <Link href={"/"}>{"Home"}</Link> {">"}{" "}
      <Link href={"/"}>{"Lorem Ipsum is"}</Link> {">"}{" "}
      <Link href={"/"} className="font-bold">
        {"Lorem Ipsum is simply dummy"}
      </Link>
    </div>
  );
};

export default Breadcrumbs;
