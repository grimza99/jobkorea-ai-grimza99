import { useNavigate } from "react-router-dom";

//// 상단 필터 요약/선택 바
export default function FilterHeader() {
  const navigate = useNavigate();

  const handleReset = () => {
    // 초기화 로직 구현
  };

  return (
    <div className="flex items-center justify-between px-3 h-[55px]">
      <button
        className="mr-4 h-10 w-10"
        onClick={() => {
          navigate(-1);
        }}
      >
        <img src="icons/arrow-left.svg" className="w-6 h-6" />
      </button>
      <div className="flex items-center justify-between w-full">
        <h2 className="text-lg font-semibold">검색조건설정</h2>
        <button className="" onClick={handleReset}>
          초기화
        </button>
      </div>
    </div>
  );
}
