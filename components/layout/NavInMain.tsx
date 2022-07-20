import React from "react";
import { menuListWithCtaProps } from "../../interfaces/layout";
import NavBtnWIthCta from "../buttons/NavBtnWIthCta";

const NavInMain = ({ menuList, cta }: menuListWithCtaProps) => {
  const handleCta = (e: any) => {
    cta(e.target.innerText.split(" ").join(""));
  };

  return (
    <>
      <nav>
        <ul className="nav-on-main" onClick={(e) => handleCta(e)}>
          {menuList.map((item) => (
            <NavBtnWIthCta
              key={item.value}
              value={item.value}
              name={item.name}
              cta={item.cta}
            />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavInMain;
