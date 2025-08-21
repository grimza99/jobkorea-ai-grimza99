// 근무형태 선택 컴포넌트
import conditionData from "../../mock/condition.json";
import HasMaxCountFilterTitle from "../common/HasMaxCountFilterTitle";
import LabelCheckInput from "../common/LabelCheckInput";

const employmentType = conditionData.employmentType;

export default function EmploymentTypeFilter() {
  return (
    <div>
      <HasMaxCountFilterTitle
        count={1}
        name={employmentType.name}
        maxCount={employmentType.maxCount}
      />
      <div className="flex flex-wrap">
        {employmentType.collection.map((option: string) => (
          <LabelCheckInput key={option} text={option} />
        ))}
      </div>
    </div>
  );
}
