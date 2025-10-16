"use client";

import { use, useEffect, useState } from "react";
import SimSwitch from "./SimSwitch";
import Switch from "./Switch";
import Textbox from "./Textbox";
import { CHARGE_VALUES } from "@/constants/chargeValue";
import { ConvertEnToFaNumber } from "@/utils/formatNumber";
import { chargeType } from "@/types/chargeType";
import { useFormik } from "formik";
import { chargeSchema } from "@/validation/chargeForm";
import { BANKS } from "@/constants/banks";

export default function BuyChargeModal() {
  const [selectedBank, setSelectedBank] = useState(BANKS[0].name);
  const [formComplete, setFormComplete] = useState(false);
  const formik = useFormik({
    initialValues: {
      simType: "E" as "E" | "D",
      amazing: false,
      phone: undefined,
      price: CHARGE_VALUES[1].value,
      isCustomPrice: false,
      customePrice: undefined,
      email: undefined,
    },
    validationSchema: chargeSchema,
    onSubmit: () => {
      setFormComplete(true);
    },
  });

  useEffect(() => {
    if (formik.values.amazing) {
      formik.setFieldValue("price", CHARGE_VALUES[2].value);
      formik.setFieldValue("isCustomPrice", false);
    }
  }, [formik.values.amazing]);

  useEffect(() => {
    if (formik.values.simType == "D") {
      formik.setFieldValue("amazing", false);
    }
  }, [formik.values.simType]);

  function ChargeItem({ charge }: { charge: chargeType }) {
    return (
      <button
        disabled={!charge.canBeAmazing && formik.values.amazing}
        className={`px-3 py-1 rounded-full flex gap-1 justify-center font-bold items-end ${
          !formik.values.isCustomPrice && formik.values.price === charge.value
            ? "bg-primary"
            : "bg-[#f0eff5]"
        }
        ${
          !charge.canBeAmazing &&
          formik.values.amazing &&
          "cursor-not-allowed text-[#1010104d]"
        }`}
        onClick={() => {
          formik.setFieldValue("price", charge.value);
          formik.setFieldValue("isCustomPrice", false);
        }}
        type="button"
      >
        {ConvertEnToFaNumber(`${charge?.value.toLocaleString()}`)}
        {charge && <div className="font-medium text-sm mb-0.5">ریال</div>}
      </button>
    );
  }

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-white p-[30px] pb-[65px] rounded-[15px] shadow-lg md:grid grid-cols-5 max-md:space-y-[25px] vazir"
    >
      <div className="col-span-3 flex flex-col gap-6 items-center max-w-[315px] mx-auto">
        <div className="text-lg font-bold">خرید آنلاین شارژ ایرانسل</div>
        <div className="flex flex-col items-center gap-2">
          <div className="text-[#8b8b8d] text-sm">نوع سیم‌کارت</div>
          <SimSwitch
            simType={formik.values.simType}
            setSimType={(newSimType) => {
              formik.setFieldValue("simType", newSimType);
            }}
          />
        </div>
        <div className="flex gap-2">
          <Switch
            state={formik.values.amazing}
            setState={() => {
              formik.setFieldValue("amazing", !formik.values.amazing);
            }}
            disabled={formik.values.simType == "D"}
          />
          <label
            htmlFor="charge-amazing"
            onClick={() => {
              if (formik.values.simType == "E")
                formik.setFieldValue("amazing", !formik.values.amazing);
            }}
          >
            شارژ شگفت انگیز
          </label>
        </div>
        <div className="w-full">
          <Textbox
            name="phone"
            type="number"
            value={formik.values.phone}
            label="شماره تلفن همراه"
            setValue={(e: any) => formik.setFieldValue("phone", e)}
            maxDigit={11}
          />
          {formik.errors.phone && formik.touched.phone && (
            <div className="text-red-600 text-xs mt-1">
              {formik.errors.phone}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-[#8b8b8d] text-sm mb-2">مبلغ شارژ</div>
          <div className="w-full grid grid-cols-3 gap-3">
            {CHARGE_VALUES.map((item: chargeType, idx) => (
              <ChargeItem key={idx} charge={item} />
            ))}
            <button
              className={`px-3 py-1 rounded-full ${
                formik.values.isCustomPrice ? "bg-primary" : "bg-[#f0eff5]"
              } ${
                formik.values.amazing && "cursor-not-allowed text-[#1010104d]"
              }`}
              onClick={() => {
                formik.setFieldValue("isCustomPrice", true);
                formik.setFieldValue("price", undefined);
              }}
              disabled={formik.values.amazing}
              type="button"
            >
              سایر مبالغ
            </button>
            {formik.values.isCustomPrice && (
              <div className="col-span-full">
                <Textbox
                  name="customePrice"
                  type="number"
                  value={formik.values.customePrice}
                  label="مبلغ شارژ به ریال"
                  setValue={(e: any) => formik.setFieldValue("customePrice", e)}
                />
                {formik.touched.customePrice && formik.errors.customePrice && (
                  <div className="text-red-600 text-xs mt-1">
                    {formik.errors.customePrice}
                  </div>
                )}
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
            value={formik.values.email}
            label="ایمیل (اختیاری)"
            setValue={(val: any) => formik.setFieldValue("email", val)}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-600 text-xs mt-1">
              {formik.errors.email}
            </div>
          )}
        </div>
        {formComplete && (
          <div className="bg-[#EFEFF4] w-full p-3 rounded-md space-y-3 max-md:hidden">
            <div>انتخاب درگاه پرداخت</div>
            <div className="flex gap-3">
              {BANKS.map((bank, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`min-w-20 p-2 flex flex-col justify-center items-center rounded-md ${
                    bank.name == selectedBank ? " bg-black/20" : "bg-black/5"
                  }`}
                  onClick={() => setSelectedBank(bank.name)}
                >
                  {bank.icon}
                  {bank.name}
                </button>
              ))}
            </div>
          </div>
        )}
        {formComplete ? (
          <button
            type="button"
            onClick={() => alert("شارژ با موفقیت خریداری شد.")}
            className="w-full py-3 rounded-full bg-primary font-bold max-md:hidden"
          >
            پرداخت و شارژ
          </button>
        ) : (
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-primary font-bold max-md:hidden"
          >
            انتخاب بانک و پرداخت
          </button>
        )}
      </div>
      <div
        className="col-span-2 flex flex-col items-center bg-[#F0EFF5] rounded-[8px] gap-[25px] h-fit
                   max-md:py-6 md:p-[10px] md:pb-[25px] max-md:bg-[#fff5cc] max-md:border max-md:border-[#ffd733] max-md:max-w-[315px] max-md:mx-auto"
      >
        <h5 className="bg-white w-full text-center rounded-[8px] py-[15px] font-bold max-md:hidden">
          فاکتور نهایی
        </h5>
        <div className="w-full px-[25px] flex flex-col gap-[10px] md:gap-[25px]">
          <Item
            title="نوع سیم‌کارت"
            value={formik.values.simType == "E" ? "اعتباری" : "دائمی"}
          />
          <Item title="مستقیم به شماره" value={formik.values.phone} />
          <div className="lg:hidden">
            <Item
              title="مبلغ شارژ (+مالیات)"
              value={ConvertEnToFaNumber(
                `${
                  formik.values.isCustomPrice
                    ? (
                        ((formik.values.customePrice ?? 0) * 1.1) as number
                      )?.toLocaleString()
                    : (
                        ((formik.values.price ?? 0) * 1.1) as number
                      )?.toLocaleString()
                } ریال`
              )}
            />
          </div>
          <div className="max-lg:hidden">
            <Item
              title="مبلغ شارژ (با احتساب مالیات بر ارزش افزوده)"
              value={ConvertEnToFaNumber(
                `${
                  formik.values.isCustomPrice
                    ? (
                        (formik.values.customePrice ?? 0) * 1.1
                      )?.toLocaleString()
                    : ((formik.values.price ?? 0) * 1.1)?.toLocaleString()
                } ریال`
              )}
            />
          </div>
          <Item
            title="نوع شارژ"
            value={formik.values.amazing ? "شگفت انگیز" : "معمولی"}
          />
          <Item title="ایمیل" value={formik.values.email} />
          <Item
            title="نام درگاه پرداخت"
            value={formComplete ? selectedBank : undefined}
          />
        </div>
      </div>
      {formComplete && (
        <div className="bg-[#EFEFF4] p-3 rounded-md space-y-3 mx-auto w-full max-w-[315px] md:hidden">
          <div>انتخاب درگاه پرداخت</div>
          <div className="flex gap-3">
            {BANKS.map((bank, idx) => (
              <button
                key={idx}
                type="button"
                className={`min-w-20 p-2 flex flex-col justify-center items-center rounded-md ${
                  bank.name == selectedBank ? " bg-black/20" : "bg-black/5"
                }`}
                onClick={() => setSelectedBank(bank.name)}
              >
                {bank.icon}
                {bank.name}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="mx-auto w-full max-w-[315px] md:hidden">
        {formComplete ? (
          <button
            type="button"
            onClick={() => alert("شارژ با موفقیت خریداری شد.")}
            className="w-full py-3 rounded-full bg-primary font-bold md:hidden"
          >
            پرداخت و شارژ
          </button>
        ) : (
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-primary font-bold md:hidden"
          >
            انتخاب بانک و پرداخت
          </button>
        )}
      </div>
    </form>
  );
}

function Item({ title, value }: { title: string; value?: string }) {
  return (
    <div className="flex md:flex-col max-md:justify-between md:gap-[10px]">
      <div className="text-sm text-[#939298]">{title}</div>
      <div className="text-sm md:text-[16px] font-bold ">{value ?? "---"}</div>
    </div>
  );
}
