"use client";

import { useState } from "react";

export default function BuyChargeModal() {
  const [simType, setSimType] = useState("");
  const [number, setNumber] = useState("");
  const [price, setPrice] = useState("");
  const [chargeType, setChargeType] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="w-full bg-white p-[30px] pb-[65px] rounded-[15px] shadow-lg grid grid-cols-5">
      <div className="col-span-3 flex flex-col items-center">
        <h1>خرید آنلاین شارژ ایرانسل</h1>
        <div>نوع سیم‌کارت</div>
        <div>شماره تلفن</div>
        <div>مبلغ شارژ</div>
        <div>ایمیل</div>
      </div>
      <div className="col-span-2 flex flex-col items-center bg-[#F0EFF5] p-[10px] pb-[25px] rounded-[8px] gap-[25px]">
        <h5 className="bg-white w-full text-center rounded-[8px] py-[15px]">
          فاکتور نهایی
        </h5>
        <div className="w-full pr-[25px] flex flex-col gap-[25px]">
          <Item title="نوع سیم‌کارت" value={simType} />
          <Item title="مستقیم به شماره" value={number} />
          <Item
            title="مبلغ شارژ (با احتساب مالیات بر ارزش افزوده)"
            value={price}
          />
          <Item title="نوع شارژ" value={chargeType} />
          <Item title="ایمیل" value={email} />
          <Item title="نام درگاه پرداخت" value="---" />
        </div>
      </div>
    </div>
  );
}

function Item({ title, value }: { title: string; value: string }) {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="text-[14px] text-[#939298]">{title}</div>
      <div className="text-[16px] font-bold ">{value ?? "---"}</div>
    </div>
  );
}
