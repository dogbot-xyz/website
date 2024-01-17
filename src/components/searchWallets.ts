export interface Assets {
  assets: TokenInfo[];
  total_price_usd: number;
}

interface GenericObject {
  [key: string]: unknown; // Represents a generic object with string keys and unknown value types
}

export interface TokenInfo {
  symbol: string;
  balance: number;
  supply: number;
  decimals: number;
  token_program: string;
  associated_token_address: string;
  price_info: PriceInfo; // Replace 'unknown' with a more specific type if known
}

export interface PriceInfo {
  price_per_token: number;
  total_price: number;
  currency: string;
}

// Define a TypeScript interface for the asset items
export interface AssetItem {
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
  token_info?: TokenInfo; // Optional generic object
  uses?: GenericObject; // Optional generic object
}

// Function to search for wallet information using the ownerAddress

export async function searchWallets(ownerAddress: string): Promise<Assets> {
  if (ownerAddress.trim() === '') {
    return { assets: [], total_price_usd: 0 };
  }

  const apiKey = import.meta.env.VITE_HELIOUS_API_KEY;
  const url = `https://mainnet.helius-rpc.com/?api-key=${apiKey}`;

  try {
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

    const data = await response.json();

    if (!data.result || !data.result.items) {
      throw new Error('Invalid response structure');
    }

    const assets = data.result.items
      .filter(
        (item: AssetItem) =>
          item.interface === 'FungibleToken' ||
          item.interface === 'FungibleAsset'
      )
      .map((item: AssetItem) => item.token_info)
      .filter(
        (tokenInfo: TokenInfo | undefined): tokenInfo is TokenInfo =>
          !!tokenInfo
      );

    const total_price_usd = assets.reduce(
      (sum: number, asset: TokenInfo) =>
        sum + (asset.price_info ? asset.price_info.total_price : 0),
      0
    );

    // console.log('assets', assets);
    // console.log('total_price_usd', total_price_usd);

    return { assets, total_price_usd };
  } catch (error) {
    console.error('Error fetching wallet data:', error);
    throw error;
  }
}
