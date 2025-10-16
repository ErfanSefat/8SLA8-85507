"use client";

import { useEffect, useState } from "react";
import SimSwitch from "./SimSwitch";
import Switch from "./Switch";
import Textbox from "./Textbox";
import { CHARGE_VALUES } from "@/constants/chargeValue";
import { ConvertEnToFaNumber } from "@/utils/formatNumber";
import { chargeType } from "@/types/chargeType";

export default function BuyChargeModal() {
  const [simType, setSimType] = useState<"E" | "D">("E");
  const [amazing, setAmazing] = useState(false);
  const [number, setNumber] = useState();
  const [price, setPrice] = useState<chargeType | undefined>(CHARGE_VALUES[1]);
  const [isCustomPrice, setIsCustomePrice] = useState(false);
  const [customPrice, setCustomePrice] = useState<number>();
  const [email, setEmail] = useState<string>();

  useEffect(() => {
    if (amazing) {
      setPrice(CHARGE_VALUES[2]);
      setIsCustomePrice(false);
    }
  }, [amazing]);

  function ChargeItem({ charge }: { charge: chargeType }) {
    return (
      <button
        disabled={!charge.canBeAmazing && amazing}
        className={`px-3 py-1 rounded-full flex gap-1 font-bold items-end ${
          charge == price ? "bg-primary" : "bg-[#f0eff5]"
        }
        ${
          !charge.canBeAmazing &&
          amazing &&
          "cursor-not-allowed text-[#1010104d]"
        }`}
        onClick={() => {
          setPrice(charge);
          setIsCustomePrice(false);
        }}
      >
        {ConvertEnToFaNumber(`${charge?.value.toLocaleString()}`)}
        {charge && <div className="font-medium text-sm mb-0.5">ریال</div>}
      </button>
    );
  }

  return (
    <div className="bg-white p-[30px] pb-[65px] rounded-[15px] shadow-lg md:grid grid-cols-5 max-md:space-y-[25px]">
      <div className="col-span-3 flex flex-col gap-6 items-center max-w-[315px] mx-auto">
        <div className="text-lg font-bold">خرید آنلاین شارژ ایرانسل</div>
        <div className="flex flex-col items-center gap-2">
          <div className="text-[#8b8b8d] text-sm">نوع سیم‌کارت</div>
          <SimSwitch simType={simType} setSimType={setSimType} />
        </div>
        <div className="flex gap-2">
          <Switch state={amazing} setState={setAmazing} />
          <label
            htmlFor="charge-amazing"
            onClick={() => setAmazing((prev) => !prev)}
          >
            شارژ شگفت انگیز
          </label>
        </div>
        <div className="w-full">
          <Textbox
            name="phone"
            type="number"
            value={number}
            label="شماره تلفن همراه"
            setValue={setNumber}
            maxDigit={11}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-[#8b8b8d] text-sm mb-2">مبلغ شارژ</div>
          <div className="w-full grid grid-cols-3 gap-3">
            {CHARGE_VALUES.map((item: chargeType, idx) => (
              <ChargeItem key={idx} charge={item} />
            ))}
            <button
              className={`px-3 py-1 rounded-full ${
                isCustomPrice ? "bg-primary" : "bg-[#f0eff5]"
              } ${amazing && "cursor-not-allowed text-[#1010104d]"}`}
              onClick={() => {
                setIsCustomePrice(true);
                setPrice(undefined);
              }}
              disabled={amazing}
            >
              سایر مبالغ
            </button>
            {isCustomPrice && (
              <div className="col-span-full">
                <Textbox
                  name="زع"
                  type="number"
                  value={customPrice}
                  label="مبلغ شارژ به ریال"
                  setValue={setCustomePrice}
                />
                <div className="text-[#8b8b8d] text-sm text-center mt-2">
                  حداقل ۱۰,۰۰۰ و حداکثر ۹۰۰,۰۰۰ ریال
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-full">
          <Textbox
            name="email"
            type="email"
            value={email}
            label="ایمیل (اختیاری)"
            setValue={setEmail}
          />
        </div>
        <button className="w-full py-3 rounded-full bg-primary font-bold max-md:hidden">
          انتخاب بانک و پرداخت
        </button>
      </div>
      <div
        className="col-span-2 flex flex-col items-center bg-[#F0EFF5] rounded-[8px] gap-[25px] 
                   max-md:py-6 md:p-[10px] md:pb-[25px] max-md:bg-[#fff5cc] max-md:border max-md:border-[#ffd733] max-md:max-w-[315px] max-md:mx-auto"
      >
        <h5 className="bg-white w-full text-center rounded-[8px] py-[15px] font-bold max-md:hidden">
          فاکتور نهایی
        </h5>
        <div className="w-full px-[25px] flex flex-col gap-[10px] md:gap-[25px]">
          <Item
            title="نوع سیم‌کارت"
            value={simType == "E" ? "اعتباری" : "دائمی"}
          />
          <Item title="مستقیم به شماره" value={number} />
          <div className="lg:hidden">
            <Item
              title="مبلغ شارژ (+مالیات)"
              value={ConvertEnToFaNumber(
                `${
                  isCustomPrice
                    ? ((customPrice ?? 0) * 1.1)?.toLocaleString()
                    : ((price?.value ?? 0) * 1.1)?.toLocaleString()
                } ریال`
              )}
            />
          </div>
          <div className="max-lg:hidden">
            <Item
              title="مبلغ شارژ (با احتساب مالیات بر ارزش افزوده)"
              value={ConvertEnToFaNumber(
                `${
                  isCustomPrice
                    ? ((customPrice ?? 0) * 1.1)?.toLocaleString()
                    : ((price?.value ?? 0) * 1.1)?.toLocaleString()
                } ریال`
              )}
            />
          </div>
          <Item title="نوع شارژ" value={amazing ? "شگفت انگیز" : "معمولی"} />
          <Item title="ایمیل" value={email} />
          <Item title="نام درگاه پرداخت" value="---" />
        </div>
      </div>
      <div className="mx-auto w-full max-w-[315px] md:hidden">
        <button className="w-full py-3 rounded-full bg-primary font-bold">
          انتخاب بانک و پرداخت
        </button>
      </div>
    </div>
  );
}

function Item({ title, value }: { title: string; value?: string }) {
  return (
    <div className="flex md:flex-col max-md:justify-between gap-[10px]">
      <div className="text-sm text-[#939298]">{title}</div>
      <div className="text-sm md:text-[16px] font-bold ">{value ?? "---"}</div>
    </div>
  );
}
