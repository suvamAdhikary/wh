import React from "react";
import { menuListProps } from "../../interfaces/layout";
import NavBtnLrg from "../buttons/NavBtnLrg";

const NavOnMain = ({ menuList }: menuListProps) => {
  return (
    <>
      <nav>
        <ul className="nav-on-main">
          {menuList.map((item) => (
            <NavBtnLrg
              key={`${item.link}-${item.name}`}
              link={item.link}
              text={item.name}
            />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavOnMain;
