import { MENU_LINKS } from "@/constants/menuLinks";
import { linkType } from "@/types/linkType";
import Link from "next/link";

export default function Menubar() {
  return (
    <div className="px-[50px] h-[90px] bg-primary flex items-center">
      <ul className="flex items-center">
        {MENU_LINKS.map((item: linkType) => (
          <li key={item.id}>
            <Link href={item.href ?? "#"}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
