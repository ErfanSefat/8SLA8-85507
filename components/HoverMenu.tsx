import { MenuItemType } from "@/types/linkType";
import { ArrowLeft2 } from "iconsax-reactjs";
import Link from "next/link";

export default function HoverMenu({ menuItem }: { menuItem: MenuItemType }) {
  return (
    <div className="group relative cursor-pointer z-20">
      <div className="py-2">{menuItem.label}</div>
      {menuItem.children && (
        <div className="absolute min-w-[200px] top-10 bg-black hidden py-2 group-hover:flex flex-col gap-2 text-white text-nowrap rounded-xl divide-y-2 divide-white/30">
          {menuItem.children.map((child, idx) => (
            <Link key={idx} href={child.href} className="py-2 px-4">
              {child.label}
            </Link>
          ))}
        </div>
      )}
      {menuItem.parents && (
        <div className="absolute min-w-[200px] top-10 bg-black hidden py-2 group-hover:flex flex-col gap-2 text-white text-nowrap rounded-xl divide-y-2 divide-white/30">
          {menuItem.parents.map((parent, idx) => (
            <div
              key={idx}
              className="py-2 px-4 relative group/parent flex justify-between items-center"
            >
              {parent.label}
              <ArrowLeft2 size={15} />
              <div className="absolute min-w-[200px] top-0 right-[200px] bg-black hidden py-2 group-hover/parent:flex flex-col gap-2 text-white text-nowrap rounded-xl divide-y-2 divide-white/30">
                {parent.children?.map((child, idx) => (
                  <Link key={idx} href={child.href} className="py-2 px-4">
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
