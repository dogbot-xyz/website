import { Setter, JSX } from "solid-js";
import { Wallet } from "../App";

export interface AddWalletProps {
  setWallets: Setter<Wallet[]>;
}
export function AddWallet(props: AddWalletProps) {
  const addWallet: JSX.EventHandler<HTMLButtonElement, MouseEvent> = (event) => {
    event.preventDefault();
    props.setWallets([]);
  };
  return (
    <form>
      <div>
        <label for="title">wallet name</label>
        <input id="title" />
      </div>
      <div>
        <label for="address">Address</label>
        <input id="address" />
      </div>
      <button type="submit" onClick={addWallet}>
        Add wallet
      </button>
    </form>
  );
}