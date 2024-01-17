import './App.css';
import { createSignal, Show } from 'solid-js';
import { AddWallet } from './components/AddWallet';
import { DogBot } from './components/DogBot';
import { WalletList } from './components/WalletList';
import { Assets, searchWallets } from './components/searchWallets';

export type Wallet = {
  title: string;
  address: string;
};

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

interface WalletShelfProps {
  name: string;
}

function WalletShelf(props: WalletShelfProps) {
  const [wallets, setWallets] = createSignal(initialWallets);
  const [showForm, setShowForm] = createSignal(false);

  const toggleForm = () => setShowForm(!showForm());

  const [assets, setAssets] = createSignal<Assets | null>(null);

  const handleSearchButtonClick = async (address: string) => {
    try {
      const results = await searchWallets(address);
      setAssets(results); // Store the results in the 'assets' signal
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
          {(() => {
            const currentAssets = assets();
            if (!currentAssets) return null; // Guard clause

            // Now it's safe to use currentAssets
            return (
              <div>
                <p>Total Price USD: {currentAssets.total_price_usd}</p>
                {/* More rendering based on the structure of your Assets */}
              </div>
            );
          })()}
        </div>
      </Show>
    </div>
  );
}

function App() {
  return <WalletShelf name="DOGBOT" />;
}

export default App;
