import 'dotenv/config';
import { Helius } from 'helius-sdk';

const heliusApiKey = process.env.HELIUS_API_KEY || '';
const helius = new Helius(heliusApiKey);

const getAssetsByOwner = async (ownerAddress: string) => {
  try {
    const response = await helius.rpc.getAssetsByOwner({
      ownerAddress: ownerAddress,
      page: 1,
      limit: 10,
    });
    // const fungibleTokens = response.items.filter(
    //   (item) =>
    //     item.interface !== 'ProgrammableNFT' && item.interface !== 'V1_NFT'
    // );
    console.log(response.items);
  } catch (error) {
    // Log the error
    console.error('Error occurred:', error);
  }
};

// Example usage
getAssetsByOwner('4xGXnb561iCe15GcqBUUeUPySxMR1RpNwdotF7vE2qzu');
