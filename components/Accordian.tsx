"use client";

import { ArrowUp, ArrowUp2 } from "iconsax-reactjs";
import { useState } from "react";

export default function Accordian({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen((prev) => !prev)}
      className="flex flex-col px-10"
    >
      <div className="pb-3 border-b border-white/40 flex items-center justify-between">
        {title}
        <ArrowUp2
          className={`${open ? "" : "rotate-180"} transition-all`}
          size={18}
        />
      </div>
      <div
        className={`overflow-hidden flex flex-col gap-4 transition-all ${open ? "max-h-[100px] mt-4 " : "max-h-0"}`}
      >
        {content}
      </div>
    </div>
  );
}
