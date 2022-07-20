import { createContext, ReactNode, useContext, useState } from "react";
import { navBtnWIthCtaProps } from "../interfaces/button";
import { aFunctionWithAStringArg } from "../interfaces/functionType";

type appContextType = {
  user: boolean;
  login: () => void;
  logout: () => void;
  isShowBackBtn: boolean;
  showBackBtn: () => void;
  hideBackBtn: () => void;
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

const dummyCta = (tabValue = "Dummy CTA") => {
  console.log(tabValue);
};

export const AppProvider = ({ children }: appProviderProps) => {
  const [user, setUser] = useState<boolean>(false);
  const [isShowBackBtn, setIsShowBackBtn] = useState<boolean>(false);
  const [isShowHanbergerBtn, setIsShowHanbergerBtn] = useState<boolean>(false);
  const [isAsideOpen, setIsAsideOpen] = useState<boolean>(false);
  const [asideMenuList, setAsideMenuList] = useState<navBtnWIthCtaProps[]>([]);
  const [asideMenuCta, setAsideMenuCta] = useState<aFunctionWithAStringArg>(
    () => dummyCta
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
