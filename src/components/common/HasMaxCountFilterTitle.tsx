import MaxCount from "./MaxCount";

interface HasMaxCountFilterTitleProps {
  maxCount: number;
  count: number;
  name: string;
}
export default function HasMaxCountFilterTitle({
  maxCount,
  count,
  name,
}: HasMaxCountFilterTitleProps) {
  return (
    <div className="flex justify-between">
      <h3 className="font-bold text-lg mb-2">{name}</h3>
      <MaxCount count={count} maxCount={maxCount} />
    </div>
  );
}
