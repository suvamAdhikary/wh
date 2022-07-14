import Image from "next/image";
import Link from "next/link";
import React from "react";
import { headerProps } from "../interfaces/layout";
import AccessTags from "./AccessTags";

const Header = ({ accessTagsList }: headerProps) => {
  return (
    <>
      <header className="flex gap-8 z-50 fixed top-0 h-16 w-full flex-row justify-between px-8 py-1 items-center my-0 mx-auto bg-cyan-100">
        <Link href={"/"}>
          <figure className="cursor-pointer w-36 h-auto m-0 p-0">
            <Image
              layout="responsive"
              width={32}
              height={15}
              src="/logoTrans.png"
              alt="logo"
              priority
            />
          </figure>
        </Link>
        <div className="w-2/3 px-2 py-0 m-0 bg-gray-400 rounded-md">
          {/* <nav></nav> */}
          {accessTagsList?.length && <AccessTags list={accessTagsList} />}
        </div>
        <nav className="flex flex-row gap-2">
          <Link href={"/ai"}>
            <span className="cursor-pointer bg-blue-900 rounded-3xl text-teal-400 px-2">
              AI
            </span>
          </Link>
          <Link href={"/python"}>
            <span className="cursor-pointer bg-blue-900 text-teal-400 rounded-3xl px-2">
              PYTHON
            </span>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
