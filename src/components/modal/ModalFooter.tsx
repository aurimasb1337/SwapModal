// ModalFooter.tsx
import React, { ReactNode } from 'react';

type ModalFooterProps = {
  children?: ReactNode;
};

const ModalFooter: React.FC<ModalFooterProps> = ({children}) => {
  return (
    <div className="modal-footer m-5">
    {children}
    </div>
  );
};

export default ModalFooter;
