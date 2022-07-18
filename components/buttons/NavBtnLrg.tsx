import Link from "next/link";
import React from "react";
import { linkBtnProps } from "../../interfaces/button";

const NavBtnLrg = ({ text, link }: linkBtnProps) => {
  return (
    <>
      <li className="nav-on-main__btn">
        <Link href={link}>{text}</Link>
      </li>
    </>
  );
};

export default NavBtnLrg;
