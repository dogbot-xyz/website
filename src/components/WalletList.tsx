// import { For } from 'solid-js';
import { Wallet } from '../App';

interface WalletListProps {
  wallets: Wallet[];
  onSearchButtonClick: (address: string) => void; // Function prop
}

export const WalletList = (props: WalletListProps) => {
  return (
    <ul>
      {props.wallets.map((wallet) => (
        <li class="wallet-title">{wallet.title}</li>
      ))}
    </ul>
  );
};
