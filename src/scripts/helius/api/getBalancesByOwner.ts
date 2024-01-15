import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

// Function to get balances
const getBalances = async (ownerAddress: string, isMainnet: boolean) => {
  const apiUrl = isMainnet
    ? 'https://mainnet.helius-rpc.com'
    : 'https://testnet.helius-rpc.com';
  const url = `${apiUrl}/v0/addresses/${ownerAddress}/balances?api-key=${process.env.HELIUS_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('Balances: ', data);
  } catch (error) {
    console.error('Error occurred:', error);
  }
};

// Example usage
getBalances('HexkqtFMmBJXUHco9KoXKocQcLSgfCf2Hdz1Qa3jcSEA', true);
