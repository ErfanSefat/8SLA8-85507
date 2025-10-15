export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full mx-auto max-w-[960px] max-lg:max-w-[720px] max-md:max-w-[540px]">
      {children}
    </div>
  );
}
