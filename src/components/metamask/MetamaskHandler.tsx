import { useMetaMask } from 'metamask-react';
import React, { useState } from 'react';
import Button from '../button/Button';
import Alert from '../alerts/Alert';





const MetamaskHandler: React.FC = () => {
  const { status, connect } = useMetaMask();
  const [error, setError] = useState<any | null>(null);
  const [fetching, setFetching] = useState<boolean>(false);
  
  let buttonContent : JSX.Element | String = '';
 


  switch (status) {
    case 'initializing':
      buttonContent = 'Metamask initializing 🦊';
      break;
    case 'unavailable':
      buttonContent = <span><a
      href="https://metamask.io/"
      target="_blank"
      rel="noreferrer noopener"
      className="bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
    >
      Get Metamask
    </a></span>
      break;
    case 'notConnected':
      buttonContent = 'Sign in with Metamask 🦊'
      break;
    case 'connecting':
      buttonContent = '🦊 connecting';
      break;
    case 'connected':
      buttonContent = '🦊';
      break;
    default:
      break;
  }

  const handleClick = async () => {
    try {
      setFetching(true);
      await connect();
    } catch (error: any) {
      console.error(error);
      setError({ message: error.message });
    } finally {
      setFetching(false);
    }
  };

  return (
    <div className='flex flex-col gap-5'>
      <Button onClick={handleClick} fetching={fetching}>
        {buttonContent}
      </Button>
      {error && (
      <Alert variant='error' message={error.code}/>
     
      )}
    </div>
  );
};

export default MetamaskHandler;
