[![CodeFactor](https://www.codefactor.io/repository/github/sozonome/nextarter-chakra/badge)](https://www.codefactor.io/repository/github/sozonome/nextarter-chakra)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=sozonome_nextarter-chakra&metric=alert_status)](https://sonarcloud.io/dashboard?id=sozonome_nextarter-chakra) [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=sozonome_nextarter-chakra&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=sozonome_nextarter-chakra) [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=sozonome_nextarter-chakra&metric=bugs)](https://sonarcloud.io/dashboard?id=sozonome_nextarter-chakra) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=sozonome_nextarter-chakra&metric=code_smells)](https://sonarcloud.io/dashboard?id=sozonome_nextarter-chakra) [![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=sozonome_nextarter-chakra&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=sozonome_nextarter-chakra)

[![Depfu](https://badges.depfu.com/badges/9e426e58f99c3bd470987a3c6b014a96/overview.svg)](https://depfu.com/github/sozonome/nextarter-chakra?project_id=26148) [![Depfu](https://badges.depfu.com/badges/9e426e58f99c3bd470987a3c6b014a96/count.svg)](https://depfu.com/github/sozonome/nextarter-chakra?project_id=26148)

## Pre-requisites

1. [Node.js](https://nodejs.org/en/) or nvm installed.
2. `yarn` installed.

## Getting Started

1. You can either click `Use this template` button on this repository and clone the repo or directly from your terminal:

```bash
npx degit sozonome/nextarter-chakra <YOUR_APP_NAME>
```

2. After cloning the project, run this command: `yarn` or `yarn install`

3. Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/lib/pages/index.tsx`. The page auto-updates as you edit the file.

## How to Run e2e Test (in local machine)

1. Build production with `yarn build`, then run the production build using `yarn start`.
2. Open another terminal (or new terminal tab, don't cancel / close the production server), then run the test with `yarn test:e2e`.

References:

- https://nextjs.org/docs/testing#playwright
  - https://nextjs.org/docs/testing#running-your-playwright-tests
