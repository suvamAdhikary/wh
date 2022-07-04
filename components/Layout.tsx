import Link from "next/link";
import React from "react";

export interface layoutProps {
  children?: any;
}

const Layout = ({ children }: layoutProps) => {
  return (
    <>
      <div>
        <header className="flex flex-row justify-between px-8 items-center">
          <Link href={"/"}>
            <figure className="cursor-pointer">
              <img src="/whLogo.png" />
            </figure>
          </Link>
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
        <div>
          <aside></aside>
          <main className="flex flex-col gap-4 px-8 py-4">{children}</main>
        </div>
        <footer></footer>
      </div>
    </>
  );
};

export default Layout;
