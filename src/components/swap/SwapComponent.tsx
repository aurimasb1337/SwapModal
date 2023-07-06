import React, { useContext, useEffect } from 'react';
import MetamaskHandler from '../metamask/MetamaskHandler';
import { useMetaMask } from 'metamask-react';
import SwapForm from './SwapForm';
import { SwapContext } from '../../context/SwapProvider';
import { getMaticBalance } from '../../util/swapUtils/swapUtils';
declare global {
  interface Window {
    ethereum: any;
  }
}

const SwapComponent: React.FC = () => {
  const { status } = useMetaMask();
  const {maticBalance, setMaticBalance} = useContext(SwapContext)
  
  useEffect(() => {
    const fetchMaticBalance = async () => {
        try {
          const maticBalance = await getMaticBalance();
          setMaticBalance(maticBalance);
        } catch (error) {
          console.log('Error:', error);
        }
    };
    
    if (status === 'connected') 
    fetchMaticBalance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);
  

  if(status!=='connected'){
    return (
       <MetamaskHandler/>
    )
  }

  return (
    <div className='m-3'>
      <div className="text-white text-center pb-6 ">MATIC Balance: {maticBalance}</div>
      <SwapForm/>
    </div>
  );
};

export default SwapComponent;
