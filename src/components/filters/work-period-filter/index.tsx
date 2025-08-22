// 근무기간 선택 컴포넌트
import conditionData from "../../../mock/condition.json";
import HasMaxCountFilterTitle from "../../common/HasMaxCountFilterTitle";
import LabelCheckInput from "../../common/LabelCheckInput";

const workPeriod = conditionData.workPeriod;

export default function WorkPeriodFilter() {
  return (
    <div>
      <HasMaxCountFilterTitle
        count={1}
        name={workPeriod.name}
        maxCount={workPeriod.collection.length}
      />
      <div className="flex flex-wrap">
        {workPeriod.collection.map((option: string) => (
          <LabelCheckInput key={option} text={option} />
        ))}
      </div>
    </div>
  );
}
