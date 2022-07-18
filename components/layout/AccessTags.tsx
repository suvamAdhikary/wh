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
      <nav className="access-nav">
        <ul className="main-nav-list">
          {list.map((item) => (
            <li key={`${item.name}-${item.link}`} className="nav-buttons">
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default AccessTags;
