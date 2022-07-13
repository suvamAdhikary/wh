import Link from "next/link";
import React from "react";

export interface accessTagsProps {
  list: {
    name: string;
    link: string;
  }[];
}

const AccessTags = ({ list }: accessTagsProps) => {
  return (
    <>
      <nav className="flex flex-row w-full overflow-x-scroll scroll-smooth">
        <ul className="flex flex-row items-center h-full list-none justify-evenly px-2 gap-1">
          {list.map((item) => (
            <li
              key={`${item.name}-${item.link}`}
              className="flex flex-col items-center justify-center hover:text-white hover:bg-slate-600 p-0 rounded-lg my-0"
            >
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default AccessTags;
