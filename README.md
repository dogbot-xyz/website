## 🤝 Contribute

- Fork website onto your own GitHub
- Clone it and make sure you're on the `dev` branch.
- Create a new branch named `[initials]/[feature]` off of `dev`. Example `q/added-a-cool-thing`.

### Create PR

When you're ready for your changes to be reviewed, create a PR with your new branch to be merged into the `dev` branch on the official repo.

### Test

To save time, run tests locally, but they will also run on all PRs to `dev` and `main`. Tests will need to be passing for your changes to be merged.

### Auto merge `dev` -> `main`\*\*

Once changes are approved and merged into `dev`, they will be assumed as good and auto merged to `main`. From here they can be deployed by merging to either the `vercel/staging` or `vercel/prod` branches.

#### [Temp] Auto merge `main` -> `vercel/staging`

For now we are auto deploying everything in main to staging.

## 🏃🏽‍♂️ Runbook

This is a TurboRepo monorepo that can run and build all apps/packages in parallel. Apps like the UI are located in `/apps`. Packages used across apps are located in `/packages`.

### Reccomended VSCode Extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)

### Tech Stack

- [Node](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [tRPC](https://trpc.io/)
- [SolidStart](https://start.solidjs.com/)
- [SolidJS](https://www.solidjs.com/)
- [Tailwind](https://tailwindcss.com/)
- [DaisyUI Components](https://daisyui.com/)

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

| Environment | Description                                               | Directory                                              |
| ----------- | --------------------------------------------------------- | ------------------------------------------------------ |
| Production  | The main deployment attached to the domain. `vercel/prod` | https://xray.helius.xyz/                               |
| Staging     | Staging branch based on contents of `vercel/staging`      | https://xray-web-git-vercel-staging-helius.vercel.app/ |

## Important Files & Folders

|                           |                                                                                                                                                                                                             |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 📁 `./src/lib`            | Common components, utilities, and libraries used throughout the app. Import things from this directory using the `$lib/` alias.                                                                             |
| 📁 `./src/lib/trpc`       | The tRPC server which has all of our backend endpoints. See `trpc/routes`.                                                                                                                                  |
| 📁 `./src/lib/components` | Shared components used throughout the app.                                                                                                                                                                  |
| 📁 `./src/lib/trpc`       | The tRPC server which has all of our backend endpoints.                                                                                                                                                     |
| 📁 `./src/lib/types`      | Global types                                                                                                                                                                                                |
| 📁 `./src/lib/configs`    | Config definitions for things like the icons, modals, and generating other types.                                                                                                                           |
| 📁`./src/routes`          | Any `+page` or `+server` file in this directory becomes a page or an endpoint based on the folder structure.                                                                                                |
| 📁`./static`              | A place to put any static assets. The files in this directory are hosted at the root of the domain. When using images, try to import them in the `<script>` vs put them in `./static` when you can help it. |
| 📄`./app.postcss`         | Initialize/config Tailwind + global styles.                                                                                                                                                                 |
| 📄`./app.html`            | The top level HTML template that wrapps all pages. Routes are injected into the `%sveltekit.body%` tag.                                                                                                     |

## Routes

|                    |                                                                                                                                                                                                    |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                | Home                                                                                                                                                                                               |
| `/api`             | REST endpoints (This is mostly replaces by tRPC now)                                                                                                                                               |
| `/[search]`        | From the home page, users can navigate to `/anything` which attempts to resolve the search and then redirect them to `/[search]/tx`, `/[search]/wallet`, or `/[search]/token` based on the search. |
| `/[search]/tx`     | Details about a particular transaction where `[search]` is a transaction signature.                                                                                                                |
| `/[search]/wallet` | Details about a particular wallet where `[search]` is a public key.                                                                                                                                |
| `/[search]/token`  | Details about a particular token where `[search]` is a token mint address.                                                                                                                         |

## Vercel Config

|                 |        |
| --------------- | ------ |
| Build Command   | `TODO` |
| Output Director | `TODO` |
| Install Command | `TODO` |

## Styles

[TailwindCSS](https://tailwindcss.com/) is used for base utilies and [DaisyUI](https://daisyui.com/) contains helpful UI components.

## Icons

See list of available icons in `$lib/config`.

### Use Icons

```js
<script>
    import Icon from "$lib/components/icon.svelte";
</script>

<Icon id="paper-plane">
```

### Add Icons

1. Find the icon you want on [IconMon](https://iconmonstr.com/). Most of these should render fine.
2. Click "Embed" -> "Inline" and copy only the `<path>`.
3. Add a new key to `$lib/config.ts` that is similar to the Icon Monsters name for the icon and add your `<path>`.

## State Management

- `TODO`

## Important Files & Folders

|                                         |                                                                                                                                                                      |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 📄`./src/lib/parser/index.ts`           | UI calls the function in this file to parse transactions                                                                                                             |
| 📄`./src/lib/parser/types.ts`           | Contains the types, interfaces, and enums needed to understand to work on the parser.                                                                                |
| 📁`./src/lib/parser/parsers`            | Contains all parser methods.                                                                                                                                         |
| 📄`./src/lib/parser/parsers/index.ts`   | Exports parser files in `./src/parsers`.                                                                                                                             |
| 📄`./src/lib/parser/parsers/unknown.ts` | If there is no dedicated parser file for a Helius transaction type, they are parsed in this file. Changing the label on the UI is in `./apps/web/src/lib/config.ts`. |
| 📁`./src/lib/parser/utils`              | Utility functions for the parser functions                                                                                                                           |
| 📄`./src/lib/search.ts`                 | The function that resolves search inputs to a URL parameter.                                                                                                         |

# 📦 @dogbot-xyz/website-database [WIP]

A database for saving metadata like transaction views or user details.
