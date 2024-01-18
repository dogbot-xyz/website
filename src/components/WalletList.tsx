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
          <span
            onClick={() => props.onSearchButtonClick(wallet.address)}
            style={{ cursor: 'pointer' }}
          >
            {wallet.title}
          </span>
        </li>
      ))}
    </ul>
  );
};
