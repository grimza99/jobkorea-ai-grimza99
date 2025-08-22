interface MaxCountProps {
  count: number;
  maxCount: number;
}
export default function MaxCount({ count, maxCount }: MaxCountProps) {
  return (
    <div className="title-form__counter">
      <span>{count}</span>
      <span>/</span>
      <span>{maxCount}</span>
    </div>
  );
}
