import React from "react";
import reactDOM from "react-dom";
import { useApp } from "../../context/AppContext";
import NavBtnWIthCta from "../buttons/NavBtnWIthCta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const SideMenu = () => {
  const { isAsideOpen, asideMenuList, closeAside, asideMenuCta } = useApp();

  if (!isAsideOpen) return null;

  const handleCta = (e: any) => {
    const tabValue = e.target?.innerText?.split(" ").join("");

    asideMenuCta(tabValue);
  };

  return reactDOM.createPortal(
    <>
      <div className="aside-overly" onClick={() => closeAside()} />
      <button className="cross-on-modal" onClick={() => closeAside()}>
        <FontAwesomeIcon icon={faXmark} size="2x" fixedWidth />
      </button>
      <div className="aside-modal__main" onClick={() => closeAside()}>
        <>
          <aside>
            <menu>
              <ul className="aside-menu__list" onClick={(e) => handleCta(e)}>
                {asideMenuList.map((item) => (
                  <NavBtnWIthCta
                    key={item.value}
                    name={item.name}
                    value={item.value}
                    rounded={false}
                  />
                ))}
              </ul>
            </menu>
          </aside>
        </>
      </div>
    </>,
    document.getElementById("portal") as HTMLElement
  );
};

export default SideMenu;
