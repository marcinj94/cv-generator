# Next.js + Typescript + Jest starter Template

---

## This repository is 🔋 battery packed with:

- ⚡️ Next.js v14 with App Router
- ⚛️ React v18
- ✨ TypeScript
- 🃏 Jest — Configured for unit testing
- 📏 ESLint & AirBnb Style Guide — Find and fix problems in your code, also will auto sort your imports
- 💖 Prettier — Format your code consistently
- 🐶 Husky & Lint Staged — Run scripts on your staged files before they are committed
- 🤖 Conventional Commit Lint — Make sure you & your teammates follow conventional commit
- 🔥 Conventional Branch Lint - Make sure you & your teammates follow conventional branch names
- 🐙 CHANGELOG automatization - create .md file based on commit history

## Incoming ✨ features :

- 📈 Absolute Import and Path Alias — Import components using @/ prefix
- 📖 Storybook - Components UI lib & tests
- 🏭 Hygen - The scalable code generator that saves you time.
- 👷 Github Actions — Lint your code on PR
- ⏰ Release Please — Generate your changelog by activating the release-please workflow

---

## Additional 💡 informations:

### Scripts 📝:

#### Prettier

- check - verify app code to prettier rules

```bash
yarn prettier:check
```

- fix - update app code to prettier rules

```bash
yarn prettier:fix
```

#### Eslint + AirBnb Style Guide

- check - verify app code to eslint & airBnb rules

```bash
yarn eslint:check
```

- fix - update app code to eslint & airBnb rules

```bash
yarn eslint:fix
```

#### Jest

- test - run all app tests

```bash
yarn test
```

- test:watch - run all your tests and wait for any updates

```bash
yarn test:watch
```

For that it's used **validate-branch-name** package, configuration is available on **.validate-branch-namerc.json** file

#### 🐙 CHANGELOG automatization

From now on after you commit your changes you will be able to run

```bash
yarn release:minor
```

or

```bash
yarn release:patch
```

or

```bash
yarn release:major
```

depending on your changes (according to [NPM docs](https://docs.npmjs.com/about-semantic-versioning) tutorial).

### Husky with:

#### 🔥 Conventional Commit Lint

For that it's used **commitizen** & **commitlint** packages. To commit your changes instead of using tradition **git commit** command, use (interactive helper):

```bash
yarn save:commit
```

#### 🤖 Conventional Branch Lint

---

⚠️ How to fix **TypeError: \_prettier.resolveConfig.sync is not a function** error:

Downgrade according packages to specific versions [https://github.com/prettier/eslint-plugin-prettier/issues/562#issuecomment-1772512836]:

```
"eslint-plugin-prettier": "^4.2.1",
"prettier": "^2.8.8",
"pretty-quick": "^3.1.3",
```

---

## Getting Started

1. Install dependencies
   It is encouraged to use yarn so the husky hooks can work properly.

```bash
yarn install
```

1. Run the development server
   You can start the server using this command:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
