export default function Switch({
  state,
  setState,
  disabled,
}: {
  state: boolean;
  setState: () => void;
  disabled?: boolean;
}) {
  return (
    <div
      className={`relative h-[22px] w-[38px] rounded-full ${
        state ? "bg-[#080]" : "bg-[#888]"
      } ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
      onClick={() => {
        if (!disabled) setState();
      }}
    >
      <div
        className={`absolute w-[16px] aspect-square rounded-full bg-white top-1/2 -translate-y-1/2 transition-all ${
          state ? "right-[3px]" : "right-[19px]"
        }`}
      ></div>
    </div>
  );
}
