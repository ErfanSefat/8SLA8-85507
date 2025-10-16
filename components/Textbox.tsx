import { ChangeEventHandler, Dispatch, SetStateAction } from "react";

export default function Textbox({
  label,
  value,
  type,
  name,
  setValue,
  maxDigit,
}: {
  label: string;
  value?: string | number;
  type: string;
  name: string;
  setValue: Dispatch<SetStateAction<any>>;
  maxDigit?: number;
}) {
  return (
    <div className="relative cursor-text">
      <input
        type={type}
        id={name}
        value={value}
        onChange={(e) =>
          setValue(
            maxDigit ? e.target.value.slice(0, maxDigit) : e.target.value
          )
        }
        className="bg-[#efeff4] border rounded-full h-[55px] w-full px-5 pt-4 peer focus:outline focus:outline-1
            [&::-webkit-outer-spin-button]:appearance-none 
            [&::-webkit-inner-spin-button]:appearance-none 
            [&::-webkit-search-cancel-button]:appearance-none 
            [-moz-appearance:textfield]"
      />
      <label
        htmlFor={name}
        className={`absolute top-1/2 -translate-y-1/2 right-5 text-[#999] transition-all cursor-text ${
          value
            ? "top-4 text-[12px]"
            : "peer-focus:top-4 peer-focus:text-[12px] "
        }`}
      >
        {label}
      </label>
    </div>
  );
}
