import React, { useContext, useRef, useEffect } from 'react';
import { ModalContext } from '../../context/ModalProvider';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';
import SwapFooter from '../swap/SwapFooter';


const Modal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { modalType, closeModal } = useContext(ModalContext);

  const modalRef = useRef<HTMLDivElement>(null);


  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
      // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [closeModal]);



  return (
    <div className={`fixed inset-0 z-10 flex items-center justify-center  animate-blur ${modalType ? 'animate-blurIn bg-black bg-opacity-40 opacity-1 backdrop-filter backdrop-blur-sm ' :
     'animate-blurOut opacity-0 pointer-events-none  transition-all'}`}>
   
        <div ref={modalRef} className={`modal bg-gray-900 rounded-lg max-w-sm md:max-w-sm  w-full ${modalType ? 'animate-fadeIn opacity-1 transition-all' : 'animate-fadeOut opacity-0 transition-all pointer-events-none'}`}>
          <ModalHeader title="Let's swap some crypto 🟡" />

          <div className="mx-3 p-3 border-b border-t border-gray-300 border-opacity-10">{children}</div>

          <ModalFooter >
           <SwapFooter/>
          </ModalFooter>
        </div>
    
    </div>
  );
};

export default Modal;
