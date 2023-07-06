import { render, fireEvent } from '@testing-library/react';
import { ModalContext } from '../../context/ModalProvider';
import ModalHeader from '../../components/modal/ModalHeader';
import { modalType } from '../../util/types/modalType';

test('calls closeModal when the "x" button is clicked', () => {
  const closeModalMock = jest.fn();
  const modalContextValue = {
    openModal: jest.fn(),
    closeModal: closeModalMock,
    modalType: 'swapModal' as modalType,
  };

  const { getByTestId } = render(
    <ModalContext.Provider value={modalContextValue}>
      <ModalHeader title="Modal Title" />
    </ModalContext.Provider>
  );

  const closeButton = getByTestId('modal-close-button');
  fireEvent.click(closeButton);

  expect(closeModalMock).toHaveBeenCalledTimes(1);
});
