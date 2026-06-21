# @tempo/antarmuka

Tempo's shared global UI component library for React products.

_Antarmuka_ means "interface" in Bahasa Indonesia — this package is Tempo's shared user interface layer, providing consistent, accessible, reusable components across React-based Tempo products (TanStack Start, Next.js, Astro React, Laravel Inertia React, internal tools).

Built with **React + TypeScript + Vite (Library Mode) + Tailwind CSS v4 + Storybook + Vitest**.

## Installation

```bash
npm install @tempo/antarmuka
```

`react` and `react-dom` (>= 18) are peer dependencies.

## Usage

Import the stylesheet once at your app's entry point, then use components anywhere:

```tsx
// app entry (e.g. main.tsx)
import '@tempo/antarmuka/styles.css'
```

```tsx
import { Button, Input, MemberzonePanel } from '@tempo/antarmuka'

export default function Page() {
  return (
    <form>
      <Input label="Email" placeholder="you@tempo.co" />
      <Button variant="primary">Submit</Button>
    </form>
  )
}
```

### Memberzone (Tempo account drawer)

```tsx
import { MemberzonePanel } from '@tempo/antarmuka'

<MemberzonePanel
  user={{
    id: 9896432,
    fullname: 'Anjar Pratama',
    email: 'anjar@tempo.co',
    initial: 'An',
    firstLetterOfName: 'A',
    vipSubscription: false,
    contentAccess: ['tempo_plus', 'teras_plus'],
  }}
  templateFor="tempo"        // or "teras"
  ssoUrl="https://sso.tempo.co"
  side="right"
  onLogout={() => signOut()} // optional; falls back to an SSO logout link
/>
```

The Memberzone is framework-agnostic: it has no router dependency. Active menu highlighting uses `window.location.pathname` by default, or pass `currentPath` explicitly.

## Components

| Group     | Components                                                       |
| --------- | ---------------------------------------------------------------- |
| Form      | `Button`, `Input`, `Textarea`                                    |
| Display   | `Badge`, `Card`, `Alert`, `Spinner`, `Avatar`                    |
| Feature   | `MemberzonePanel` + `Memberzone.*` primitives, `SocialMedia`     |

Design tokens (`colors`, `typography`, `spacing`, `radius`, `shadows`, `zIndex`, `breakpoints`), the `cn` class-merge helper, and all icons are also exported.

## Development

```bash
npm install
npm run dev          # Storybook on http://localhost:6006
npm run test         # Vitest
npm run lint         # ESLint
npm run typecheck    # tsc --noEmit
npm run build        # build dist/ (ESM + CJS + d.ts + style.css)
```

## Publishing

Publishing is automated via GitHub Actions on `v*` tags (see `.github/workflows/publish.yml`), running lint → typecheck → test → build → `npm publish --access restricted`. Requires the `NPM_TOKEN` secret.

Manual publish:

```bash
npm login
npm run build
npm publish --access restricted
```

## Versioning

This package follows [Semantic Versioning](https://semver.org/). See [CHANGELOG.md](./CHANGELOG.md).

## License

MIT
