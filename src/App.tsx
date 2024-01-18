import './App.css';
import { createSignal, Show, For } from 'solid-js';
import { AddWallet } from './components/AddWallet';
import { DogBot } from './components/DogBot';
import { WalletList } from './components/WalletList';
import { Assets, searchWallets, TokenInfo } from './components/searchWallets';

const initialWallets: Wallet[] = [
  {
    title: 'trader-joe',
    address: 'HexkqtFMmBJXUHco9KoXKocQcLSgfCf2Hdz1Qa3jcSEA',
  },
  {
    title: 'toly.sol',
    address: '86xCnPeV69n6t3DnyGvkKobf9FdN2H9oiVDdaMpo2MMY',
  },
  { title: 'karolek', address: '4xGXnb561iCe15GcqBUUeUPySxMR1RpNwdotF7vE2qzu' },
];

const [wallets, setWallets] = createSignal(initialWallets);
const [showForm, setShowForm] = createSignal(false);

const toggleForm = () => setShowForm(!showForm());

const [assets, setAssets] = createSignal<Assets | null>(null);

export type Wallet = {
  title: string;
  address: string;
};

interface WalletShelfProps {
  name: string;
}

function WalletShelf(props: WalletShelfProps) {
  const handleSearchButtonClick = async (address: string) => {
    console.log('Searching for address:', address);
    try {
      const results = await searchWallets(address);
      // Filter out assets with a total price below 10 and sort in descending order
      const filteredAndSortedAssets = {
        ...results,
        assets: results.assets
          .filter((asset) => asset.price_info?.total_price >= 10)
          .sort((a, b) => b.price_info.total_price - a.price_info.total_price),
      };
      console.log('Search results:', filteredAndSortedAssets);
      setAssets(filteredAndSortedAssets); // Store the filtered and sorted results
    } catch (error) {
      console.error('Error fetching assets', error);
      setAssets(null);
    }
  };

  return (
    <div>
      <DogBot />
      <h1>{props.name}</h1>
      <WalletList
        wallets={wallets()}
        onSearchButtonClick={handleSearchButtonClick}
      />
      <Show
        when={showForm()}
        fallback={<button onClick={toggleForm}>Add Wallet</button>}
      >
        <AddWallet setWallets={setWallets} />
        <button onClick={toggleForm}>Close</button>
      </Show>
      <Show when={assets()}>
        <div>
          <p>Total Price USD: {assets()?.total_price_usd.toFixed(2)}</p>
          <table>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Balance</th>
                <th>Price per Token</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              <For
                each={assets()?.assets}
                fallback={
                  <tr>
                    <td>Loading...</td>
                  </tr>
                }
              >
                {(asset: TokenInfo) =>
                  asset.symbol && asset.price_info?.price_per_token ? (
                    <tr>
                      <td>{asset.symbol}</td>
                      <td>{asset.balance}</td>
                      <td>{asset.price_info.price_per_token}</td>
                      <td>{asset.price_info.total_price.toFixed(2)}</td>
                    </tr>
                  ) : null
                }
              </For>
            </tbody>
          </table>
        </div>
      </Show>
    </div>
  );
}

function App() {
  return <WalletShelf name="DOGBOT" />;
}

export default App;
