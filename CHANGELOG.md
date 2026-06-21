# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-06-18

### Added

Initial MVP release — rewritten from the previous Nuxt 3 kit into a React component library.

- **Tooling**: Vite Library Mode (ESM + CJS + TypeScript declarations + `style.css`), Tailwind CSS v4, Storybook, Vitest + React Testing Library, ESLint + Prettier, GitHub Actions CI and tag-based publish.
- **Core components**: `Button`, `Input`, `Textarea`, `Badge`, `Card`, `Alert`, `Spinner`, `Avatar` — each with stories, tests, `className` support, and accessibility attributes.
- **Feature components**: `MemberzonePanel` and `Memberzone.*` Radix-based drawer primitives, `SocialMedia` — ported from the Nuxt Memberzone with the router/Nuxt coupling removed.
- **Design tokens**: colors, typography, spacing, radius, shadows, z-index, breakpoints.
- **Utilities**: `cn` class-merge helper; exported icon set.
