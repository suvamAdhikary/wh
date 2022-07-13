import { ReactElement } from "react";

export interface accessTagsList {
  name: string;
  link: string;
}

export interface headerProps {
  accessTagsList?: accessTagsList[];
}

export interface layoutProps {
  title: string;
  children?: ReactElement | string | number;
  accessTagsList?: accessTagsList[];
}
