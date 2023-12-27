
import dotenv from 'dotenv';

// Configure dotenv to load the .env file
dotenv.config();

const url = `https://mainnet.helius-rpc.com/?api-key=${process.env.VITE_API_KEY}`;

const getAssetsByOwner = async () => {
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
                page: 1, // Starts at 1
                limit: 2,
                displayOptions: {
                    showFungible: true //return both fungible and non-fungible tokens
                }
            },
        }),
    });
    const { result } = await response.json();
    console.log("Assets by Owner: ", result.items);
};
getAssetsByOwner(); 