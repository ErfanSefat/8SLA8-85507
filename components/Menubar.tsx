import { MENU_ICONS, MENU_LINKS } from "@/constants/menuLinks";
import { MenuItemType } from "@/types/linkType";
import Link from "next/link";
import HoverMenu from "./HoverMenu";
import Image from "next/image";

export default function Menubar() {
  return (
    <div className="px-[50px] h-[90px] rounded-t-md bg-primary flex items-center justify-between -mt-2 max-lg:hidden">
      <ul className="flex items-center gap-7">
        <Link href={""}>
          <Image src="./mtn.svg" height={20} width={80} alt="mtn icon" />
        </Link>
        {MENU_LINKS.map((item: MenuItemType, idx) => (
          <li key={idx}>
            <HoverMenu menuItem={item} />
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-6">
        {MENU_ICONS.map((item, idx) => (
          <li key={idx}>
            <Link href={item.href}>{item.icon}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
