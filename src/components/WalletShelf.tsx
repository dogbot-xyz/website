// WalletShelf.tsx
import { createSignal, Show, For } from 'solid-js';
import { AddWallet } from './AddWallet';
import { DogBot } from './DogBot';
import { WalletList } from './WalletList';
import { Assets, searchWallets, TokenInfo } from './searchWallets';
import PieChart from './PieChart';

export type Wallet = {
  title: string;
  address: string;
};

interface WalletShelfProps {
  name: string;
}

const WalletShelf = (props: WalletShelfProps) => {
  const initialWallets: Wallet[] = [
    {
      title: 'trader-joe',
      address: 'HexkqtFMmBJXUHco9KoXKocQcLSgfCf2Hdz1Qa3jcSEA',
    },
    {
      title: 'toly.sol',
      address: '86xCnPeV69n6t3DnyGvkKobf9FdN2H9oiVDdaMpo2MMY',
    },
    {
      title: 'karolek',
      address: '4xGXnb561iCe15GcqBUUeUPySxMR1RpNwdotF7vE2qzu',
    },
  ];

  const [wallets, setWallets] = createSignal<Wallet[]>(initialWallets);
  const [showForm, setShowForm] = createSignal(false);
  const [assets, setAssets] = createSignal<Assets | null>(null);
  const [showChart, setShowChart] = createSignal(false);

  const toggleForm = () => setShowForm(!showForm());
  const toggleView = () => setShowChart(!showChart());

  const handleSearchButtonClick = async (address: string) => {
    try {
      const results = await searchWallets(address);
      const filteredAndSortedAssets = {
        ...results,
        assets: results.assets
          .filter((asset) => asset.price_info?.total_price >= 10)
          .sort((a, b) => b.price_info.total_price - a.price_info.total_price),
      };
      setAssets(filteredAndSortedAssets);
    } catch (error) {
      console.error('Error fetching assets', error);
      setAssets(null);
    }
  };

  const samplePieChartData = {
    labels: ['Sample 1', 'Sample 2', 'Sample 3'],
    values: [300, 50, 100],
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
      <button onClick={toggleView}>
        {showChart() ? 'Show Table' : 'Show Pie Chart'}
      </button>
      <Show when={assets()}>
        <Show
          when={showChart()}
          fallback={
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
                  <For each={assets()?.assets}>
                    {(asset: TokenInfo) => (
                      <tr>
                        <td>{asset.symbol}</td>
                        <td>{asset.balance}</td>
                        <td>{`$${asset.price_info.price_per_token.toFixed(2)}`}</td>
                        <td>{`$${asset.price_info.total_price.toFixed(2)}`}</td>
                      </tr>
                    )}
                  </For>
                </tbody>
              </table>
            </div>
          }
        >
          <PieChart data={samplePieChartData} />
        </Show>
      </Show>
    </div>
  );
};

export default WalletShelf;
