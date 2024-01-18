import dotenv from 'dotenv';

dotenv.config();

const url = `https://mainnet.helius-rpc.com/?api-key=${process.env.HELIUS_API_KEY}`;

const getAssetsWithNativeBalance = async () => {
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
        ownerAddress: 'HexkqtFMmBJXUHco9KoXKocQcLSgfCf2Hdz1Qa3jcSEA',
        displayOptions: {
          showFungible: true,
          showNativeBalance: true,
        },
      },
    }),
  });

  const { result } = await response.json();
  console.log(result.nativeBalance.lamports); // 1479920100
};
getAssetsWithNativeBalance();
