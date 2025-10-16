import { HEADER_LINKS } from "@/constants/headerLinks";
import { linkType } from "@/types/linkType";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full px-[50px] flex justify-between text-white h-14 bg-black max-lg:hidden">
      <ul className="flex items-center gap-3">
        {HEADER_LINKS.right.map((item: linkType) => (
          <Button key={item.id} href={item.href} varient={item.buttonVarient}>
            {item.label}
          </Button>
        ))}
      </ul>
      <ul className="flex items-center gap-3">
        {HEADER_LINKS.left.map((item: linkType) => (
          <Button key={item.id} href={item.href} varient={item.buttonVarient}>
            {item.label}
          </Button>
        ))}
      </ul>
    </div>
  );
}

function Button({
  children,
  href,
  varient,
}: {
  children: React.ReactNode;
  href?: string;
  varient?: string;
}) {
  return (
    <Link href={href ?? "#"}>
      <div
        className={`px-2 py-[2px] text-xs ${
          varient == "primary" && "bg-primary text-black rounded-[4px]"
        }`}
      >
        {children}
      </div>
    </Link>
  );
}
