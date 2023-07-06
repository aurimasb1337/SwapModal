import React, { useContext, useState } from 'react';
import Button from '../button/Button';
import { SwapContext } from '../../context/SwapProvider';
import { useMetaMask } from 'metamask-react';
import { getMaticBalance, swapMaticToToken } from '../../util/swapUtils/swapUtils';
import Alert from '../alerts/Alert';



const SwapFooter: React.FC = () => {
    const [fetching, setFetching] = useState<boolean>(false)
    const {maticAmount, targetSwapToken, setMaticBalance} = useContext(SwapContext)
    const [error, setError] = useState<any | null>(null);
    const [success, setSuccess] = useState<boolean>(false)
    const {status} = useMetaMask()
    const handleSwapMaticToToken = async () => {
      setFetching(true);
      try {
        await swapMaticToToken(maticAmount, targetSwapToken); 
        setFetching(false);
        setError(null)
        setSuccess(true)

        const maticBalance = await getMaticBalance();
        setMaticBalance(maticBalance);
        
      } catch (error) {
        setFetching(false);
        setError(error);
        setSuccess(false)
      }
    };

    if(status!=='connected'){
      return <div/>
    }
  
  return (
    <div className='flex flex-col gap-3 justify-between'>
      <Button onClick={handleSwapMaticToToken} disabled={!maticAmount || !targetSwapToken || fetching}>
        🚀 Swap
      </Button>
   {
   ( error || success) && 
    <Alert variant={error? 'error' : 'success'} message={error ? error.code : ''}/>
   }
    </div>
  );
};

export default SwapFooter;
