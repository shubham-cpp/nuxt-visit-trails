# Visit Trails

A WebApp built using Nuxt 3 to keep your travel memories in one place

## Setup

Check the `.env.example` file and create a `.env`.
Then make sure to install dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev:web
```

To run `pnpm dev` you need to install turso cli, which you can do by following [official docs](https://docs.turso.tech/cli/installation)

```bash
pnpm dev # this will run pnpm dev:db and pnpm dev:web using concurrently
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```
