import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useApp } from "../../context/AppContext";

const HamburgerBtn = () => {
  const { handleAside } = useApp();

  return (
    <>
      <button className="ham-btn" onClick={() => handleAside()}>
        <FontAwesomeIcon icon={faBars} size="sm" fixedWidth />
      </button>
    </>
  );
};

export default HamburgerBtn;
