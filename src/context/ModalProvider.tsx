// ModalContext.tsx
import { createContext, useState, ReactNode } from 'react';
import { modalType } from '../util/types/modalType';



type ModalContextType = {
  modalType: modalType | null;
  openModal: (type: modalType) => void;
  closeModal: () => void;
};

const initialContextValue: ModalContextType = {
  modalType: null,
  openModal: () => {},
  closeModal: () => {},
};

export const ModalContext = createContext<ModalContextType>(initialContextValue);

type ModalProviderProps = {
  children: ReactNode;
};

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalType, setModalType] = useState<modalType | null>(null);

  const openModal = (type: modalType) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  const contextValue: ModalContextType = {
    modalType,
    openModal,
    closeModal,
  };

  return <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>;
};
