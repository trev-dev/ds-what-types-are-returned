# ds-lsp-poc: proving the `JSX.Element` return types

A type-only project for exploring with an editor/LSP. Every component exported
by `@bcgov/design-system-react-components` is used in real JSX, and each claim
is backed by a compile-time assertion.

```sh
npm run check     # tsc --noEmit: passes only if every assertion holds
npm run emit-dts  # shows the .d.ts tsc infers for src/proofs/04-inferred-wrapper.tsx
```

## What's installed

| Import name                             | Source                                                                                                  |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `@bcgov/design-system-react-components` | Built from `main` (f9de3ff) with the Rollup build. `index.d.ts` is byte-identical to the published 0.9.1 |
| `ds-branch`                             | Built from `feature/migrate-to-vite` (b301f7e), used only in proof 6                                     |
| `react-aria-components`                 | 1.22.1, the version both builds depend on                                                               |
| `@types/react` / `typescript`           | 19.3.0 / 6.0.3, the versions `main` uses                                                                |

The two tarballs are in `vendor/`.

## Where to look

### `src/components/`: every component in use (62 functions + 6 React Aria re-exports)

One file per component family. In each file:

- Hover a component name (`Button`, `Header`, …) to see its signature from the published types, e.g.
  `function Button({ ... }: ButtonProps): JSX.Element`.
- Hover `<Name>Example` (no return annotation) to see what TypeScript infers for a consumer's component.
- The `…ReturnsJsxElement` lines assert the exact return type.

### `src/proofs/`: the argument, step by step

| File                                  | Claim                                                                                                           |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `01-published-return-types.ts`        | All 62 exported functions return exactly `JSX.Element`; none include `null`                                     |
| `02-jsx-element-is-react-element.ts`  | `JSX.Element` extends `ReactElement<any, any>`; the only real difference from React Aria's type is `\| null`   |
| `03-jsx-expression-type.tsx`          | React Aria components are declared `ReactElement \| null`, but `<RACButton />` is a `JSX.Element`               |
| `04-inferred-wrapper.tsx`             | Wrapping a React Aria component (our pattern) infers `JSX.Element`; returning `null` would infer `\| null`      |
| `05-null-would-break.tsx`             | Switching to `ReactElement \| null` breaks code that uses return values (with the honest caveat for plain JSX) |
| `06-main-vs-branch.ts`                | The branch's explicit annotations produce identical return and prop types to `main`'s inferred ones             |

## Checking the checks

The assertions are not vacuous:

- Changing any `Expect<Equal<…, JSX.Element>>` to `ReactElement | null` or `JSX.Element | null` makes `npm run check` fail.
- Removing either `@ts-expect-error` in proof 5 makes it fail with TS2322 ("Type 'null' is not assignable to type 'ReactElement<any, any>'") or TS2531 ("Object is possibly 'null'").

## Primary sources

- Published types: `npm pack @bcgov/design-system-react-components@0.9.1`, then `package/dist/index.d.ts`
- `JSX.Element` definition: `node_modules/@types/react/index.d.ts`, `interface Element extends React.ReactElement<any, any> {}`
- JSX expression type: TypeScript Handbook, [JSX → "The JSX result type"](https://www.typescriptlang.org/docs/handbook/jsx.html)
- React Aria's signatures: `node_modules/react-aria-components/dist/types/src/*.d.ts`
