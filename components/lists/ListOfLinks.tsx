import Link from "next/link";
import React from "react";
import { listOfLinksProps } from "../../interfaces/list";
import Heading5 from "../headings/Heading5";

const ListOfLinks = ({ title, list, id }: listOfLinksProps) => {
  return (
    <>
      <article id={id} className="common-unorderd-list-wrapper">
        {title && <Heading5 title={title} />}
        <ul className="common-unorderd-list">
          {list?.map((el) => (
            <li className="common-unorderd-list__item" key={el.link}>
              <Link href={el.link}>
                <a target={"_blank"} rel="noopener noreferrer">
                  {el.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
};

export default ListOfLinks;
