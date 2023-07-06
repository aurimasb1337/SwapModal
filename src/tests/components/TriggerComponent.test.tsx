import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ModalContext } from '../../context/ModalProvider';
import TriggerComponent from '../../components/trigger/TriggerComponent';
import { modalType } from '../../util/types/modalType';


test('renders the TriggerComponent', () => {
  const { getByTestId } = render(<TriggerComponent type="swapModal" />);
  const button = getByTestId('modal-trigger-button');

  expect(button).toBeInTheDocument();
});



test('calls openModal when the button is clicked', () => {
  const openModalMock = jest.fn();
  const modalContextValue = {
    openModal: openModalMock,
    closeModal: jest.fn(),
    modalType: 'swapModal' as modalType,
  };
  const { getByTestId } = render(<TriggerComponent type="swapModal" />, {
    // Provide a mock ModalContext value with the openModal function
    wrapper: ({ children }) => (
      <ModalContext.Provider value={modalContextValue}>
        {children}
      </ModalContext.Provider>
    ),
  });

  const button = getByTestId('modal-trigger-button');
  fireEvent.click(button);

  expect(openModalMock).toHaveBeenCalledWith('swapModal');
});
