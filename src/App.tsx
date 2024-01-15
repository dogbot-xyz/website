import './App.css';
import { createSignal, Show } from 'solid-js';
import { AddWallet } from './components/AddWallet';
import { DogBot } from './components/DogBot';
import { WalletList } from './components/WalletList';

export type Wallet = {
  title: string;
  address: string;
};

const initialWallets: Wallet[] = [
  {
    title: 'trader-joe',
    address: 'HexkqtFMmBJXUHco9KoXKocQcLSgfCf2Hdz1Qa3jcSEA',
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
  return (
    <div>
      <DogBot />
      <h1>{props.name}</h1>
      <WalletList wallets={wallets()} />
      <Show
        when={showForm()}
        fallback={<button onClick={toggleForm}>Add Wallet</button>}
      >
        <AddWallet setWallets={setWallets} />
        <button onClick={toggleForm}>Close</button>
      </Show>
    </div>
  );
}

function App() {
  return <WalletShelf name="DOGBOT" />;
}

export default App;
