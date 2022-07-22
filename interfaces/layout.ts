import { ReactElement } from "react";
import { navBtnWIthCtaProps } from "./button";

export interface menuListItemProps {
  name: string;
  link: string;
}

export interface headerProps {
  accessTagsList?: menuListItemProps[];
}

export interface menuListProps {
  menuList: menuListItemProps[];
}

export interface menuListWithCtaProps {
  menuList: navBtnWIthCtaProps[];
  cta?: any;
}

export interface layoutProps {
  title: string;
  children?: ReactElement | string | number;
  accessTagsList?: menuListItemProps[];
}

export interface modalProps {
  isVisble: boolean;
  children: ReactElement | string | number;
  onClose: any;
}

export interface sideMenuProps {
  isVisble: boolean;
  menuItems: navBtnWIthCtaProps[];
  onClose: any;
  cta?: any;
}

export interface magicBackProps {
  backToParent?: any;
}
