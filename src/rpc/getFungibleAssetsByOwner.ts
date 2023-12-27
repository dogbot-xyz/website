import dotenv from 'dotenv';

// Configure dotenv to load the .env file
dotenv.config();

const url = `https://mainnet.helius-rpc.com/?api-key=${process.env.VITE_API_KEY}`;

const searchAssets = async () => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            jsonrpc: '2.0',
            id: 'my-id',
            method: 'searchAssets',
            params: {
                ownerAddress: 'HexkqtFMmBJXUHco9KoXKocQcLSgfCf2Hdz1Qa3jcSEA',
                tokenType: "fungible"
            },
        }),
    });
    const { result } = await response.json();
    console.log("Search Assets: ", result);
};
searchAssets();