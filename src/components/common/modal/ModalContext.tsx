import { createContext, useContext, useState, type ReactNode } from "react";

interface ModalContextType {
  open: (content: ReactNode) => void;
  close: () => void;
  isOpen: boolean;
  content: ReactNode | null;
}
const MODAL_CLOSE_ANIMATION_DURATION = 300; // ms
const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(null);

  const open = (modalContent: ReactNode) => {
    setContent(modalContent);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    setTimeout(() => {
      setContent(null);
    }, MODAL_CLOSE_ANIMATION_DURATION);
  };

  return (
    <ModalContext.Provider value={{ open, close, isOpen, content }}>
      {children}
    </ModalContext.Provider>
  );
}
