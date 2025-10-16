export type linkType = {
  id: number;
  label: string;
  href: string;
  buttonVarient?: string;
};

type MenuChild = {
  label: string;
  href: string;
};

type MenuParent = {
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
