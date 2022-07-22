export interface linkProps {
  title: string;
  link: string;
  description?: string;
}

export interface listOfLinksProps {
  id?: string;
  title?: string;
  list: linkProps[];
}
