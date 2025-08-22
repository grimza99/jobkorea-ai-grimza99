import Modal from "./components/common/modal";
import { ModalProvider } from "./components/common/modal/ModalContext";
import FilterHeader from "./components/filter-header";

export default function App() {
  return (
    <ModalProvider>
      <FilterHeader />
      <div className="flex w-full items-center justify-center bg-background-gray px-6 py-5">
        <p className="text-gray400">모든 채용메뉴에 공통 반영됩니다.</p>
      </div>
      <Modal title="테스트 타이틀" />
    </ModalProvider>
  );
}
