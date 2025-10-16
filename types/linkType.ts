export type linkType = {
  id: number;
  label: string;
  href: string;
  buttonVarient?: string;
};

export type MenuChild = {
  label: string;
  href: string;
};

export type MenuParent = {
  label: string;
  children?: MenuChild[];
};

export type MenuItemType = {
  id: number;
  label: string;
  href?: string;
  parents?: MenuParent[];
  children?: MenuChild[];
};
