import 'dotenv/config';
import { Helius } from 'helius-sdk';

const heliusApiKey = process.env.HELIUS_API_KEY || '';
const helius = new Helius(heliusApiKey);

const getAssetsByOwner = async (ownerAddress: string) => {
  try {
    const response = await helius.rpc.getAssetsByOwner({
      ownerAddress: ownerAddress,
      limit: 10,

      displayOptions: {
        showUnverifiedCollections: false,
        showCollectionMetadata: false,
        showGrandTotal: true,
      },
      page: 1,
    });
    console.log(response.items);
  } catch (error) {
    // Log the error
    console.error('Error occurred:', error);
  }
};

// Example usage
getAssetsByOwner('86xCnPeV69n6t3DnyGvkKobf9FdN2H9oiVDdaMpo2MMY');
