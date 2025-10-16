import { Dispatch, SetStateAction } from "react";

export default function Switch({
  state,
  setState,
}: {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`relative h-[22px] w-[38px] rounded-full cursor-pointer ${
        state ? "bg-[#080]" : "bg-[#888]"
      }`}
      onClick={() => setState((prev) => !prev)}
    >
      <div
        className={`absolute w-[16px] aspect-square rounded-full bg-white top-1/2 -translate-y-1/2 transition-all ${
          state ? "right-[3px]" : "right-[19px]"
        }`}
      ></div>
    </div>
  );
}
