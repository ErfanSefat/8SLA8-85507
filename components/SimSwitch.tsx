export default function SimSwitch({
  simType,
  setSimType,
}: {
  simType: "E" | "D";
  setSimType: (e: any) => void;
}) {
  return (
    <div className="rounded-full w-[220px] relative flex h-[37px] items-center text-sm border">
      <button
        type="button"
        onClick={() => setSimType("E")}
        className="w-1/2 text-center z-10 font-bold"
      >
        اعتباری
      </button>
      <button
        type="button"
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
