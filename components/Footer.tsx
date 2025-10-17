import { FOOTER, TELS } from "@/constants/footer";
import { Call, Twitch } from "iconsax-reactjs";
import Link from "next/link";
import Accordian from "./Accordian";

export default function Footer() {
  return (
    <div className="w-full bg-[#202020] text-white pt-[80px] pb-3 text-sm rounded-t-3xl">
      <div className="flex flex-wrap justify-center gap-y-14 max-md:hidden">
        {FOOTER.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-4 px-4 w-[190px] max-xl:w-[285px]"
          >
            <div className="text-xs pb-2 border-b border-white/20">
              {item.title}
            </div>
            {item.children.map((itemLink, idx2) => (
              <Link key={idx2} href={itemLink.href}>
                {itemLink.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-col md:hidden gap-4">
        {FOOTER.map((item, idx) => (
          <Accordian
            key={idx}
            title={item.title}
            content={item.children.map((itemLink, idx2) => (
              <Link key={idx2} href={itemLink.href}>
                {itemLink.label}
              </Link>
            ))}
          />
        ))}
      </div>
      <div className="flex max-md:flex-col pr-10 max-md:gap-10 justify-center py-24 max-md:py-10">
        {TELS.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-2 px-4 w-[240px]">
            <div className="flex gap-2">
              <Call size={16} variant="Bold" /> {item.title}
            </div>
            <div>
              <span className="text-primary">{item.tel1} </span>
              از خطوط ایرانسل
            </div>
            <div>
              <span className="text-primary">{item.tel2} </span>
              از سایر خطوط
            </div>
          </div>
        ))}
      </div>
      <hr className="mx-auto w-full max-w-[1140px] border-white/20" />
      <div className="py-10 text-center">
        <div className="flex gap-3 justify-center mb-4">
          <div className="bg-primary rounded-full text-black p-1.5">
            <Twitch size={18} />
          </div>
          <div className="bg-primary rounded-full text-black p-1.5">
            <Twitch size={18} />
          </div>
          <div className="bg-primary rounded-full text-black p-1.5">
            <Twitch size={18} />
          </div>
          <div className="bg-primary rounded-full text-black p-1.5">
            <Twitch size={18} />
          </div>
        </div>
        ایرانسل؛ اولین و بزرگترین اپراتور دیجیتال ایران
      </div>
    </div>
  );
}
