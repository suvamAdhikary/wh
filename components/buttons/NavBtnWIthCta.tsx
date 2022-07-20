import React from "react";
import { navBtnWIthCtaProps } from "../../interfaces/button";

const NavBtnWIthCta = ({ rounded, name, cta, value }: navBtnWIthCtaProps) => {
  const conditionalClassName =
    rounded === false ? "nav-on-main__btn not-rounded" : "nav-on-main__btn";

  return (
    <>
      <li
        className={conditionalClassName}
        value={value}
        onClick={cta ? cta : () => {}}
      >
        {name}
      </li>
    </>
  );
};

export default NavBtnWIthCta;
