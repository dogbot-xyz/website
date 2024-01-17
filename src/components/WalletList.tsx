import { Wallet } from '../App';

interface WalletListProps {
  wallets: Wallet[];
  onSearchButtonClick: (address: string) => void;
}

export const WalletList = (props: WalletListProps) => {
  return (
    <ul>
      {props.wallets.map((wallet) => (
        <li class="wallet-title">
          {wallet.title}
          <button onClick={() => props.onSearchButtonClick(wallet.address)}>
            Search
          </button>
        </li>
      ))}
    </ul>
  );
};
