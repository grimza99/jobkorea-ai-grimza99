import FilterHeader from "./components/filter-header";

export default function App() {
  return (
    <>
      <FilterHeader />
      <div className="flex w-full items-center justify-center bg-background-gray px-6 py-5">
        <p className="text-gray400">모든 채용메뉴에 공통 반영됩니다.</p>
      </div>
    </>
  );
}
