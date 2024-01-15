import dotenv from 'dotenv';

dotenv.config();

interface GenericObject {
  [key: string]: unknown; // Represents a generic object with string keys and unknown value types
}

// Define a TypeScript interface for the asset items
interface AssetItem {
  interface: 'V1_NFT' | 'FungibleToken' | 'FungibleAsset';
  id: string;
  content: GenericObject; // Replace GenericObject with a more specific type if known
  authorities: GenericObject[]; // Array of generic objects
  compression: GenericObject; // Generic object
  grouping: GenericObject[]; // Array of generic objects
  royalty: GenericObject; // Generic object
  creators: GenericObject[]; // Array of generic objects
  ownership: GenericObject; // Generic object
  supply: GenericObject | null; // Generic object or null
  mutable: boolean;
  burnt: boolean;
  token_info?: GenericObject; // Optional generic object
  uses?: GenericObject; // Optional generic object
}

// Function to search for wallet information using the ownerAddress
export async function searchWallets(ownerAddress: string) {
  if (ownerAddress.trim() === '') return [];

  const url = `https://mainnet.helius-rpc.com/?api-key=${process.env.HELIUS_API_KEY}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 'my-id',
      method: 'getAssetsByOwner',
      params: {
        ownerAddress: ownerAddress,
        displayOptions: {
          showFungible: true,
          showNativeBalance: true,
        },
      },
    }),
  });

  const { result } = await response.json();
  const assets = result.items
    .filter(
      (item: AssetItem) =>
        item.interface === 'FungibleToken' || item.interface === 'FungibleAsset'
    )
    .map((item: AssetItem) => ({
      id: item.id,
      interface: item.interface,
    }));

  console.log(assets);
  return assets;
}

// Example usage
searchWallets('4xGXnb561iCe15GcqBUUeUPySxMR1RpNwdotF7vE2qzu');
