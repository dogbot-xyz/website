import dogImage from '../assets/dog.png';

export function DogBot() {
  return (
    <>
      <div>
        <a href="https://github.com/dogbot-xyz/website" target="_blank">
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
