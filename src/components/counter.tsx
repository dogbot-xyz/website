import { createSignal } from 'solid-js';
import './Counter.css';

export default function Counter() {
	const [count, setCount] = createSignal(0);
	const add = () => setCount(count() + 1);
	const subtract = () => setCount(count() - 1);

	return (
		<>
			<div class="counter">
				<button onClick={subtract}>-</button>
				<pre>{count()}</pre>
				<button onClick={add}>+</button>
			</div>
			<div class="counter-message">{}</div>
		</>
	);
}




// import { createSignal } from 'solid-js';

// export default function Counter() {
//   const [count, setCount] = createSignal(0);

//   return (
//     <>
//       <div>
//         <a href="https://solana.fm/address/HexkqtFMmBJXUHco9KoXKocQcLSgfCf2Hdz1Qa3jcSEA/transactions?cluster=mainnet-alpha" target="_blank">
//           {/* <img src={dogImage} class="logo solid" alt="Dog image" style={{ width: '200px' }} /> */}
//         </a>
//       </div>
//       <h1>DOGBOT</h1>
//       <div class="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count()}
//         </button>
//       </div>
//       <p class="read-the-docs">
//         site in progress
//       </p>
//     </>
//   );
// }

