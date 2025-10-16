import { Dispatch, SetStateAction } from "react";

export default function SimSwitch({
  simType,
  setSimType,
}: {
  simType: "E" | "D";
  setSimType: Dispatch<SetStateAction<"E" | "D">>;
}) {
  return (
    <div className="rounded-full w-[220px] relative flex h-[37px] items-center text-sm border">
      <button
        onClick={() => setSimType("E")}
        className="w-1/2 text-center z-10 font-bold"
      >
        اعتباری
      </button>
      <button
        onClick={() => setSimType("D")}
        className="w-1/2 text-center z-10 font-bold"
      >
        دائمی
      </button>
      <div
        className={`absolute bg-primary rounded-full w-1/2 h-full z-0 ${
          simType == "D" ? "left-0" : "right-0"
        }`}
      ></div>
    </div>
  );
}
