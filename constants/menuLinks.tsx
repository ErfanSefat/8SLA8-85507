import {
  Bag2,
  LanguageSquare,
  Location,
  MessageQuestion,
  Profile,
} from "iconsax-reactjs";

export const MENU_LINKS = [
  {
    id: 1,
    label: "محصولات",
    parents: [
      {
        label: "فیبر",
        children: [
          { label: "معرفی", href: "" },
          { label: "خرید مودم", href: "" },
          { label: "خرید بسته", href: "" },
          { label: "پوشش", href: "" },
        ],
      },
      {
        label: "سیم‌کارت",
        children: [
          { label: "معرفی", href: "" },
          { label: "خرید مودم", href: "" },
          { label: "خرید بسته", href: "" },
          { label: "پوشش", href: "" },
        ],
      },
      {
        label: "مودم",
        children: [
          { label: "معرفی", href: "" },
          { label: "خرید مودم", href: "" },
          { label: "خرید بسته", href: "" },
          { label: "پوشش", href: "" },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "خدمات",
    parents: [
      {
        label: "فیبر",
        children: [
          { label: "معرفی", href: "" },
          { label: "خرید مودم", href: "" },
          { label: "خرید بسته", href: "" },
          { label: "پوشش", href: "" },
        ],
      },
      {
        label: "سیم‌کارت",
        children: [
          { label: "معرفی", href: "" },
          { label: "خرید مودم", href: "" },
          { label: "خرید بسته", href: "" },
          { label: "پوشش", href: "" },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "پشتیبانی",
    children: [
      { label: "معرفی", href: "" },
      { label: "خرید مودم", href: "" },
      { label: "خرید بسته", href: "" },
      { label: "پوشش", href: "" },
    ],
  },
  { id: 4, label: "فیبرنوری", href: "" },
];

export const MENU_ICONS = [
  {
    icon: <MessageQuestion />,
    href: "",
  },
  {
    icon: <Location />,
    href: "",
  },
  {
    icon: <Profile />,
    href: "",
  },
  {
    icon: <Bag2 />,
    href: "",
  },
  {
    icon: <LanguageSquare />,
    href: "",
  },
];
