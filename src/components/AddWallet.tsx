import { createSignal, Setter, JSX } from "solid-js";
import { Wallet } from "../App";

export interface AddWalletProps {
  setWallets: Setter<Wallet[]>;
}

const emptyWallet: Wallet = { title: "", address: "" };


export function AddWallet(props: AddWalletProps) {

  const [newWallet, setNewWallet] = createSignal(emptyWallet);

  const addWallet: JSX.EventHandler<HTMLButtonElement, MouseEvent> = (event) => {
    event.preventDefault();
    props.setWallets((wallets) => [...wallets, newWallet()]);
    setNewWallet(emptyWallet);
  };

  return (
    <form>
      <div>
        <label for="title">Wallet name</label>
        <input
          id="title"
          value={newWallet().title}
          onInput={(e) => {
            setNewWallet({ ...newWallet(), title: e.currentTarget.value });
          }}
        />
      </div>
      <div>
        <label for="address">Address</label>
        <input
          id="author"
          value={newWallet().address}
          onInput={(e) => {
            setNewWallet({ ...newWallet(), address: e.currentTarget.value });
          }}
        />
      </div>
      <button type="submit" onClick={addWallet}>
        Add book
      </button>
    </form>
  );
}