"use client";

import { MENU_LINKS, MOBILE_MENU_ICONS } from "@/constants/menuLinks";
import { MenuChild, MenuParent } from "@/types/linkType";
import {
  ArrowLeft2,
  ArrowRight2,
  CloseSquare,
  HamburgerMenu,
} from "iconsax-reactjs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MobileNavbar() {
  const [tab, setTab] = useState(0);
  const [tab1Content, setTab1Content] = useState<MenuParent[]>();
  const [tab2Content, setTab2Content] = useState<MenuChild[]>();
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="w-full bg-primary h-14 lg:hidden flex justify-between items-center px-6">
        <Link href={""}>
          <Image src="./mtn.svg" height={20} width={80} alt="mtn icon" />
        </Link>
        <ul className="flex items-center gap-5">
          {MOBILE_MENU_ICONS.map((item) => (
            <li>
              <Link href={item.href}>{item.icon}</Link>
            </li>
          ))}
          <button onClick={() => setOpen((prev) => !prev)}>
            {open ? <CloseSquare size={30} /> : <HamburgerMenu size={30} />}
          </button>
        </ul>
      </div>
      <div
        className={`w-full bg-white overflow-hidden transition-all duration-500 ${
          open ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="flex p-5 gap-3">
          <button className="px-3 py-2 text-xs bg-primary text-black rounded-[4px]">
            مشترکین شخصی
          </button>
          <button className="px-3 py-2 text-xs border border-black text-black rounded-[4px]">
            مشترکین سازمانی
          </button>
        </div>
        <div className="flex flex-col divide-y px-6">
          {tab == 0 &&
            MENU_LINKS.map((item) => (
              <div
                onClick={() => {
                  if (item.parents) {
                    setTab(1);
                    setTab1Content(item.parents);
                  }
                  if (item.children) {
                    setTab(1);
                    setTab1Content(item.children);
                  }
                }}
                className="flex items-center justify-between py-3"
              >
                {item.label}
                {(item.parents || item.children) && <ArrowLeft2 size={15} />}
              </div>
            ))}
          {tab == 1 && (
            <>
              <div
                className="flex items-center justify-between py-3 bg-black/10 px-4 rounded-md"
                onClick={() => setTab((prev) => prev - 1)}
              >
                <ArrowRight2 size={15} />
                بازگشت
              </div>
              {tab1Content?.map((item) => (
                <div
                  className="flex items-center justify-between py-3"
                  onClick={() => {
                    if (item.children) {
                      setTab(2);
                      setTab2Content(item.children);
                    }
                  }}
                >
                  {item.label}
                  {item.children && <ArrowLeft2 size={15} />}{" "}
                </div>
              ))}
            </>
          )}
          {tab == 2 && (
            <>
              <div
                className="flex items-center justify-between py-3 bg-black/10 px-4 rounded-md"
                onClick={() => setTab((prev) => prev - 1)}
              >
                <ArrowRight2 size={15} />
                بازگشت
              </div>
              {tab2Content?.map((item) => (
                <div className="py-3">{item.label}</div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
