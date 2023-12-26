
import dotenv from 'dotenv';

// Configure dotenv to load the .env file
dotenv.config();

const url = `https://mainnet.helius-rpc.com/?api-key=${process.env.VITE_API_KEY}`;

const getAsset = async () => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            jsonrpc: '2.0',
            id: 'my-id',
            method: 'getAsset',
            params: {
                id: '7iT1GRYYhEop2nV1dyCwK2MGyLmPHq47WhPGSwiqcUg5',
                displayOptions: {
                    showFungible: true // Return details about a fungible token
                }
            },
        }),
    });
    const { result } = await response.json();
    console.log("Asset: ", result);
};

getAsset();
