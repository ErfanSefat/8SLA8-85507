import * as Yup from "yup";

export const chargeSchema = Yup.object({
  simType: Yup.mixed<"E" | "D">(),
  amazing: Yup.boolean().default(false),
  phone: Yup.string().required("شماره موبایل الزامی است"),
  price: Yup.number().when("isCustomPrice", {
    is: true,
    then: (schema) => schema.notRequired().nullable(),
    otherwise: (schema) => schema.required("انتخاب مبلغ الزامی است"),
  }),
  isCustomPrice: Yup.boolean().default(false),
  customePrice: Yup.number().when("isCustomPrice", {
    is: true,
    then: (schema) =>
      schema
        .required("مبلغ شارژ الزامی است")
        .min(10000, "حداقل مبلغ ۱۰,۰۰۰ ریال است")
        .max(900000, "حداکثر مبلغ ۹۰۰,۰۰۰ ریال است"),
  }),
  email: Yup.string().email("ایمیل نامعتبر است"),
});
