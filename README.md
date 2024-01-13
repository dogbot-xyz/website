# dogbot.xyz

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Run ts scripts

```shell
npx esrun src/helius/get-assets-by-owner.ts
```

### Tech Stack

- [Node](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [tRPC](https://trpc.io/)
- [SolidStart](https://start.solidjs.com/)
- [SolidJS](https://www.solidjs.com/)
- [Tailwind](https://tailwindcss.com/)
- [DaisyUI Components](https://daisyui.com/)
- [Vercel](https://vercel.com/)
- [Helius-SDK](https://github.com/helius-labs/helius-sdk)
- [Surrealdb-SDK](https://docs.surrealdb.com/docs/integration/sdks/javascript)

## 🤝 Contribute

- Fork website onto your own GitHub
- Clone it and make sure you're on the `dev` branch.
- Create a new branch named `[feat|fix]/[description]` off of `dev`. Example `feat/added-a-cool-thing`.

### Create PR

When you're ready for your changes to be reviewed, create a PR with your new branch to be merged into the `dev` branch on the official repo.

### Test

To save time, run tests locally, but they will also run on all PRs to `dev` and `main`. Tests will need to be passing for your changes to be merged.

### Auto merge `dev` -> `main`\*\*

Once changes are approved and merged into `dev`, they will be assumed as good and auto merged to `main`. From here they can be deployed by merging to either the `vercel/staging` or `vercel/prod` branches.

#### [Temp] Auto merge `main` -> `vercel/staging`

For now we are auto deploying everything in main to staging.

### Setup Environment

In the root of the project, create a `.env` file with the values mentioned in `.env.template`.

### Install

Run the install command from the root of the project to install dependencies for all apps and packages.

```
npm install

```

### Dev

Start all packages and apps in dev mode which watches for changes and adds your local environment.

```sh
npm run dev
```

### Lint

It's reccomended you use VSCode beacuase if you do, ESLint is setup to auto fix/format as you're working.

```sh
npm run lint
```

### Format

Formats files based on the Prettier and ESlint settings.

```sh
npm run format
```

### Audit

```sh
npm audit fix
```

### Test

Tests the code, determines if it should be allowed to merge. We recommend running this locally before creating PRs.

```sh
npm run test
```

### Build

Build all apps and packages for production.

```sh
npm run build
```

### Build Local Environment

Build all apps and packages for production using your `.env` file.

```sh
npm run build:env
```

## 🚀 Deployments

| Environment | Description                                               | Directory                        |
| ----------- | --------------------------------------------------------- | -------------------------------- |
| Production  | The main deployment attached to the domain. `vercel/prod` | https://dogbot.xyz/              |
| Staging     | Staging branch based on contents of `vercel/staging`      | https://dogbot-eight.vercel.app/ |

## 👀 Want to learn more?
