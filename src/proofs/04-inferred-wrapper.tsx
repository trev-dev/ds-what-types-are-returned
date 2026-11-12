/**
 * PROOF 4: what TypeScript infers for a component that wraps a React Aria
 * component. This is the same pattern every component on `main` uses, e.g.
 *
 *     export default function Button({ ...props }: ButtonProps) {
 *       return <ReactAriaButton {...props} />;
 *     }
 *
 * Hover the function names below (none have a return annotation), or run
 * `npm run emit-dts` to see the `.d.ts` that `tsc` generates for this file:
 * the same process the `main` build uses.
 */
import type { JSX } from "react";
import { Button as RACButton, type ButtonProps } from "react-aria-components";
import type { Equal, Expect } from "../type-utils";

// Wraps React Aria, as our Button does. Inferred: JSX.Element
export function WrapsReactAria(props: ButtonProps) {
  return <RACButton {...props} />;
}

// Plain markup, like our Header/Footer. Inferred: JSX.Element
export function PlainMarkup() {
  return <footer>Footer</footer>;
}

// If a component could return null, inference would say so. Inferred:
// JSX.Element | null. (No component on `main` returns null.)
export function CanReturnNull(props: { show: boolean }) {
  if (!props.show) return null;
  return <div />;
}

export type Wrapper = Expect<Equal<ReturnType<typeof WrapsReactAria>, JSX.Element>>;
export type Plain = Expect<Equal<ReturnType<typeof PlainMarkup>, JSX.Element>>;
export type Nullable = Expect<
  Equal<ReturnType<typeof CanReturnNull>, JSX.Element | null>
>;
