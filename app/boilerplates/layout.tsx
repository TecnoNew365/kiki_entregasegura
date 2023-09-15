import TabProducts from "@/components/TabProducts";

export default function BoilerplateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col  ">
      <div className="w-full   mx-auto">
        <div className=" "> {children}</div>
      </div>
    </div>
  );
}
