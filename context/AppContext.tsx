import { createContext, ReactNode, useContext, useState } from "react";
import { navBtnWIthCtaProps } from "../interfaces/button";
import {
  aFunctionWithAStringArg,
  aFunctionWithoutArg,
} from "../interfaces/functionType";

type appContextType = {
  user: boolean;
  login: () => void;
  logout: () => void;
  isShowBackBtn: boolean;
  showBackBtn: () => void;
  hideBackBtn: () => void;
  isShowMagicBackBtn: boolean;
  showMagicBackBtn: () => void;
  hideMagicBackBtn: () => void;
  magicBackCta: () => void;
  handleMagicBackCta: (cta: aFunctionWithoutArg) => void;
  isShowHanbergerBtn: boolean;
  showHambergerBtn: () => void;
  hideHambergerBtn: () => void;
  isAsideOpen: boolean;
  openAside: () => void;
  closeAside: () => void;
  handleAside: () => void;
  asideMenuList: navBtnWIthCtaProps[];
  asideMenuCta: (tabValue: string) => void;
  handleAsineMenuCta: (cta: aFunctionWithAStringArg) => void;
  handleAsideMenuItems: (menuList: navBtnWIthCtaProps[]) => void;
};

const appContextDefaultValues: appContextType = {
  user: false,
  login: () => {},
  logout: () => {},
  isShowBackBtn: false,
  showBackBtn: () => {},
  hideBackBtn: () => {},
  isShowMagicBackBtn: false,
  showMagicBackBtn: () => {},
  hideMagicBackBtn: () => {},
  magicBackCta: () => {},
  handleMagicBackCta: () => {},
  isShowHanbergerBtn: false,
  showHambergerBtn: () => {},
  hideHambergerBtn: () => {},
  isAsideOpen: false,
  openAside: () => {},
  closeAside: () => {},
  handleAside: () => {},
  asideMenuList: [],
  asideMenuCta: () => {},
  handleAsineMenuCta: () => {},
  handleAsideMenuItems: () => {},
};

const AppContext = createContext<appContextType>(appContextDefaultValues);

export const useApp = () => {
  return useContext(AppContext);
};

type appProviderProps = {
  children: ReactNode;
};

const dummyCta = (tabValue = "DummyCta CTA") => {
  console.log(tabValue);
};

const dCta = () => {};

export const AppProvider = ({ children }: appProviderProps) => {
  const [user, setUser] = useState<boolean>(false);
  const [isShowBackBtn, setIsShowBackBtn] = useState<boolean>(false);
  const [isShowMagicBackBtn, setIsShowMagicBackBtn] = useState<boolean>(false);
  const [isShowHanbergerBtn, setIsShowHanbergerBtn] = useState<boolean>(false);
  const [isAsideOpen, setIsAsideOpen] = useState<boolean>(false);
  const [asideMenuList, setAsideMenuList] = useState<navBtnWIthCtaProps[]>([]);
  const [asideMenuCta, setAsideMenuCta] = useState<aFunctionWithAStringArg>(
    () => dummyCta
  );
  const [magicBackCta, setMagicBackCta] = useState<aFunctionWithoutArg>(
    () => dCta
  );

  const login = () => {
    setUser(true);
  };

  const logout = () => {
    setUser(false);
  };

  const showBackBtn = () => {
    setIsShowBackBtn(true);
  };

  const hideBackBtn = () => {
    setIsShowBackBtn(false);
  };

  const showMagicBackBtn = () => {
    setIsShowMagicBackBtn(true);
  };

  const hideMagicBackBtn = () => {
    setIsShowMagicBackBtn(false);
  };

  const handleMagicBackCta = (cta: aFunctionWithoutArg) => {
    setMagicBackCta(() => cta);
  };

  const showHambergerBtn = () => {
    setIsShowHanbergerBtn(true);
  };

  const hideHambergerBtn = () => {
    setIsShowHanbergerBtn(false);
  };

  const openAside = () => {
    setIsAsideOpen(true);
  };

  const closeAside = () => {
    setIsAsideOpen(false);
  };

  const handleAside = () => {
    setIsAsideOpen(!isAsideOpen);
  };

  const handleAsideMenuItems = (menuList: navBtnWIthCtaProps[]) => {
    setAsideMenuList(menuList);
  };

  const handleAsineMenuCta = (cta: aFunctionWithAStringArg) => {
    setAsideMenuCta(() => cta);
  };

  const value = {
    user,
    login,
    logout,
    isShowBackBtn,
    showBackBtn,
    hideBackBtn,
    isShowMagicBackBtn,
    showMagicBackBtn,
    hideMagicBackBtn,
    magicBackCta,
    handleMagicBackCta,
    isShowHanbergerBtn,
    showHambergerBtn,
    hideHambergerBtn,
    isAsideOpen,
    openAside,
    closeAside,
    handleAside,
    asideMenuList,
    handleAsideMenuItems,
    asideMenuCta,
    handleAsineMenuCta,
  };

  return (
    <>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </>
  );
};

export default AppProvider;
