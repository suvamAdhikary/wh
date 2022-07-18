import Link from "next/link";
import React from "react";
import { linkBtnProps } from "../../interfaces/button";

const TransparentLinkBtn = ({ text, link }: linkBtnProps) => {
  return (
    <>
      <div className="transparent-link-btn__wrapper">
        <button className="transparent-link-btn">
          <Link href={link}>{text}</Link>
        </button>
      </div>
    </>
  );
};

export default TransparentLinkBtn;
