import { ReactElement } from "react";

export interface headingProps {
  title?: string;
  isChildren?: boolean;
  children?: ReactElement | string | number;
}
