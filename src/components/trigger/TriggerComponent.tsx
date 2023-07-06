import  { useContext } from 'react';
import { ModalContext } from '../../context/ModalProvider';
import { modalType } from '../../util/types/modalType';
import Button from '../button/Button';

type ModalTriggerProps = {
  type: modalType;
};

const TriggerComponent = ({ type }: ModalTriggerProps) => {
  const { openModal } = useContext(ModalContext);

  const handleClick = () => {
    openModal(type);
  };

  return (
   <Button data-testid="modal-trigger-button" onClick={handleClick} >
      Swap crypto
   </Button>
  );
};

export default TriggerComponent;
