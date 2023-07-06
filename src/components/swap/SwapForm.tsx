import React, { useContext} from 'react';
import CustomDropdown from '../dropdown/CustomDropdown';
import { SwapContext } from '../../context/SwapProvider';


const SwapForm: React.FC = () => {
  const {maticAmount, setMaticAmount, maticBalance} = useContext(SwapContext);
  const handleMaticInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    const floatValue = parseFloat(value);
    const balance = parseFloat(maticBalance)

    if(floatValue>balance || balance===0){
      return
    }
    
    if (value !== "") {
      if (!isNaN(floatValue)) {
        setMaticAmount(String(floatValue));
      }
    }
    else if(value===''){
      setMaticAmount('')
    }
  };


  return (
    <div className="flex relative flex-col items-center gap-[-2px]">
      <div className="flex flex-col w-full">
        <div className="relative rounded-md shadow-sm">
          <input
            id="matic-input"
            type="number"
            value={maticAmount}
            onChange={handleMaticInputChange}
            placeholder="Enter MATIC token amount"
            className="block w-full h-16 px-3 py-2 border bg-gray-800 text-white border-gray-700 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 pointer-events-none">
            MATIC
          </div>
        </div>
      </div>

      <div className="bg-gray-500 absolute rounded-full top-1/2 z-10 transform -translate-y-1/2">
        <svg
          className="h-6 w-6 text-gray-200 rotate-90"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </div>

      <div className="flex flex-col w-full">
      
        <CustomDropdown/>
      </div>
    </div>
  );
};

export default SwapForm;
