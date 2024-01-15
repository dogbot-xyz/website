import dotenv from 'dotenv';

dotenv.config();

const url = `https://mainnet.helius-rpc.com/?api-key=${process.env.VITE_API_KEY}`;

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
        ownerAddress: '86xCnPeV69n6t3DnyGvkKobf9FdN2H9oiVDdaMpo2MMY',
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
