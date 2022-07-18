export interface headCellProps {
  title: string;
  icon: string;
}

export interface tBodyCellProps {
  title?: string;
  description?: string;
  linkButton?: boolean;
  link?: string;
}

export interface metaTableRowProps {
  key: string;
  data: tBodyCellProps[];
}
