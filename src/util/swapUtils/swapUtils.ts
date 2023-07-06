import { ethers } from 'ethers';


import { tokenType } from '../types/tokenType';
import { maticTokenAbi, maticTokenContractAddress } from '../const';

export const swapMaticToToken = async (
  maticAmount: string,
  targetSwapToken: tokenType | null
): Promise<void> => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const targetSwapTokenAddress = targetSwapToken?.address;
    const targetSwapTokenABI = targetSwapToken?.abi;

    const maticContract = new ethers.Contract(maticTokenContractAddress, maticTokenAbi, signer);
    new ethers.Contract(
      String(targetSwapTokenAddress),
      targetSwapTokenABI as [],
      signer
    );

    const amount = ethers.utils.parseEther(maticAmount.toString()); // Convert the maticAmount to Wei
    const tx = await maticContract.transfer(targetSwapTokenAddress, amount);
    await tx.wait();
    console.log('Swap successful');
  } catch (error) {
    console.error('Swap error:', error);
    throw error;
  }
};

export const getMaticBalance = async (): Promise<string> => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      const walletAddress = await signer.getAddress();

      const maticContract = new ethers.Contract(maticTokenContractAddress, maticTokenAbi, provider);
      const matic = await maticContract.balanceOf(walletAddress);
      const formattedMatic = ethers.utils.formatEther(matic);

      return formattedMatic.toString(); 
    } catch (error) {
      console.log('Error:', error);
      throw error;
    }
  }

  return ''; 
};


