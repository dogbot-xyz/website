import dogImage from '../assets/dog.png';

export function DogBot() {
  return (
    <>
      <div>
        <a
          href="https://solana.fm/address/HexkqtFMmBJXUHco9KoXKocQcLSgfCf2Hdz1Qa3jcSEA/transactions?cluster=mainnet-alpha"
          target="_blank"
        >
          <img
            src={dogImage}
            class="logo solid"
            alt="Dog image"
            style={{ width: '200px' }}
          />
        </a>
      </div>
    </>
  );
}
