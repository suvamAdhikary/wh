export interface linkProps {
  title: string;
  link: string;
}

export interface listOfLinksProps {
  id?: string;
  title?: string;
  list: linkProps[];
}
