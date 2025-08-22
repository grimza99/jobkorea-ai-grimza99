import { createPortal } from "react-dom";
import { useModal } from "./ModalContext";

export default function Modal({ title }: { title?: string }) {
  const { isOpen, content, close } = useModal();

  if (!isOpen) return null;

  const handleClickApply = () => {
    // 모달 적용 로직 구현
    close();
  };

  return createPortal(
    <section className="bg-white w-full h-full fixed top-0">
      <header className="flex justify-between items-center px-[17px] h-17">
        <h1 className="text-lg font-bold">{title}</h1>
        <button onClick={close}>
          <img src="icons/x.svg" className="w-6 h-6" />
        </button>
      </header>
      <main className="h-[calc(100%-133px)] w-full">{content}</main>
      <footer className="flex p-2 w-full h-[65px] justify-between items-center border-t border-border-primary gap-2">
        <button
          className="flex justify-center items-center border border-border-primary rounded h-12 w-full "
          onClick={close}
        >
          취소
        </button>
        <button
          className="bg-primary flex justify-center items-center text-white rounded h-12 w-full "
          onClick={handleClickApply}
        >
          확인
        </button>
      </footer>
    </section>,
    document.body
  );
}
