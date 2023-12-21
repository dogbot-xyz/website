import { createSignal } from 'solid-js';
import './App.css';
import dogImage from './assets/dog.png';

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <div>
        <a href="https://solana.fm/address/HexkqtFMmBJXUHco9KoXKocQcLSgfCf2Hdz1Qa3jcSEA/transactions?cluster=mainnet-alpha" target="_blank">
          <img src={dogImage} class="logo solid" alt="Dog image" style={{ width: '200px' }} />
        </a>
      </div>
      <h1>DOGBOT</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
      </div>
      <p class="read-the-docs">
        site in progress
      </p>
    </>
  );
}

export default App;
