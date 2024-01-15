import './App.css';
import { createSignal } from "solid-js";
import { AddWallet } from "./components/AddWallet";
import { DogBot } from "./components/DogBot";
import { WalletList } from "./components/WalletList";

export type Wallet = {
  title: string;
  address: string;
};

const initialWallets: Wallet[] = [
  { title: "trader-joe", address: "HexkqtFMmBJXUHco9KoXKocQcLSgfCf2Hdz1Qa3jcSEA" },
  { title: "karolek", address: "4xGXnb561iCe15GcqBUUeUPySxMR1RpNwdotF7vE2qzu" },

];


interface BookshelfProps {
  name: string;
}

function Bookshelf(props: BookshelfProps) {
  const [wallets, setWallets] = createSignal(initialWallets);
  return (
    <div>
      <DogBot />
      <h1>{props.name}</h1>
      <WalletList wallets={wallets()}/>
      <AddWallet setWallets={setWallets}/>
    </div>
  );
}

function App() {
  return (
    <Bookshelf name="DOGBOT"/>
  );

}

export default App;
