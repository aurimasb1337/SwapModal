import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ModalProvider } from './context/ModalProvider';
import CompositeProvider from './context/CompositeProvider';
import { MetaMaskProvider } from "metamask-react";
import { SwapProvider } from './context/SwapProvider';
import Modal from './components/modal/Modal';
import SwapComponent from './components/swap/SwapComponent';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
<CompositeProvider providers={[ModalProvider, MetaMaskProvider, SwapProvider]}>
       <>
       <Modal>
        <SwapComponent />
      </Modal>
            <App />
       </>
</CompositeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
