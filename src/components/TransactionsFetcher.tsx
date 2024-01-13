// src/components/TransactionsFetcher.tsx
import { createSignal, For } from 'solid-js';
import { Helius } from 'helius-sdk';


type Transaction = {
    interface: string;
    id: string;
    content: {
      '$schema': string;
      json_uri: string;
      files: any[]; // Replace 'any' with a more specific type if the structure of files is known
      metadata: Record<string, any>; // Replace 'any' with specific type if metadata structure is known
      links: Record<string, string>;
    };
    authorities: any[]; // Replace 'any' with a specific type if the structure is known
    compression: {
      eligible: boolean;
      compressed: boolean;
      data_hash: string;
      creator_hash: string;
      asset_hash: string;
      tree: string;
      seq: number;
      leaf_id: number;
    };
    grouping: any[]; // Replace 'any' with a specific type if the structure is known
    royalty: {
      royalty_model: string;
      target: string | null;
      percent: number;
      basis_points: number;
      primary_sale_happened: boolean;
      locked: boolean;
    };
    creators: any[]; // Replace 'any' with a specific type if the structure is known
    ownership: {
      frozen: boolean;
      delegated: boolean;
      delegate: string | null;
      ownership_model: string;
      owner: string;
    };
    supply: {
      print_max_supply: number;
      print_current_supply: number;
      edition_nonce: number | null;
    };
    mutable: boolean;
    burnt: boolean;
  };
  

export default function TransactionsFetcher() {
  const [transactions, setTransactions] = createSignal<Transaction[]>([]);
  const [ownerAddress, setOwnerAddress] = createSignal('');

  const fetchTransactions = async () => {
    const heliusApiKey: string = import.meta.env.PUBLIC_HELIOUS_API_KEY || '';
    const helius = new Helius(heliusApiKey);
    try {
      const response = await helius.rpc.getTransactionsByOwner({
        ownerAddress: ownerAddress(),
        page: 1, // or other parameters as needed
      });
      setTransactions(response.items);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Address"
        onInput={(e) => setOwnerAddress(e.currentTarget.value)}
      />
      <button onClick={fetchTransactions}>Get Transactions</button>
      <div>
        <For each={transactions()}>
          {(transaction) => (
            <div>
              Transaction ID: {transaction.id}
              {/* Render other transaction details */}
            </div>
          )}
        </For>
      </div>
    </>
  );
}
