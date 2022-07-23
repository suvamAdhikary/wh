import Image from "next/image";
import Link from "next/link";
import React from "react";
import { headerProps } from "../../interfaces/layout";
import AccessTags from "./AccessTags";

const Header = ({ accessTagsList }: headerProps) => {
  return (
    <>
      <header className="main-header">
        <Link href={"/"}>
          <figure className="logo-wrapper">
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
        {accessTagsList?.length && (
          <div className="dynamic-nav-wrapper">
            {accessTagsList?.length && <AccessTags list={accessTagsList} />}
          </div>
        )}
        <nav>
          <ul className="main-nav-list">
            <li className="nav-buttons">
              <Link href={"/meta"}>META</Link>
            </li>
            <li className="nav-buttons">
              <Link href={"/ibm"}>IBM</Link>
            </li>
            <li className="nav-buttons">
              <Link href={"/python"}>PYTHON</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
