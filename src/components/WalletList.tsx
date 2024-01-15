import { For } from "solid-js";
import { Wallet } from "../App";

interface WalletListProps {
  wallets: Wallet[];
}

export function WalletList(props: WalletListProps) {
  const totalWallets = () => props.wallets.length;
  
  return (
    <>
      <h2>My Wallets ({totalWallets()})</h2>
      <ul>
        <For each={props.wallets}>
          {(wallet) => {
            return (
              <li>
                {wallet.title}
                <span style={{ "font-style": "italic" }}> ({wallet.address})</span>
              </li>
            );
          }}
        </For>
      </ul>
    </>
  );
}