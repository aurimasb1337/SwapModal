import React, { createContext, useState, ReactNode } from 'react';
import { tokenType } from '../util/types/tokenType';

interface SwapContextProps {
  maticAmount: string;
  setMaticAmount: (balance: string) => void;
  maticBalance: string;
  setMaticBalance: (balance: string) => void;
  targetSwapToken: tokenType | null;
  setTargetSwapToken: (token: tokenType | null) => void;
}

const initialSwapContext: SwapContextProps = {
  maticAmount: '',
  setMaticAmount: () => {},
  maticBalance: '',
  setMaticBalance: () => {},
  targetSwapToken: null,
  setTargetSwapToken: () => {},
};

export const SwapContext = createContext<SwapContextProps>(initialSwapContext);

interface SwapProviderProps {
  children: ReactNode;
}

export const SwapProvider: React.FC<SwapProviderProps> = ({ children }) => {
  const [maticAmount, setMaticAmount] = useState<string>('');
  const [maticBalance, setMaticBalance] = useState<string>('');
  const [targetSwapToken, setTargetSwapToken] = useState<tokenType | null>(null);

  return (
    <SwapContext.Provider
      value={{
        maticAmount,
        setMaticAmount,
        maticBalance,
        setMaticBalance,
        targetSwapToken,
        setTargetSwapToken,
      }}
    >
      {children}
    </SwapContext.Provider>
  );
};
