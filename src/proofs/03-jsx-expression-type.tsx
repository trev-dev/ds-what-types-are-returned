/**
 * PROOF 3: a JSX expression is typed `JSX.Element`, regardless of what the
 * rendered component's function signature returns.
 *
 * TypeScript Handbook, JSX, "The JSX result type":
 *   "By default the result of a JSX expression is typed as `any`. You can
 *    customize the type by specifying the `JSX.Element` interface."
 *   https://www.typescriptlang.org/docs/handbook/jsx.html
 *
 * React's types specify `JSX.Element` (see proof 2), so every `<Foo />` is a
 * `JSX.Element`.
 */
import type { JSX, ReactElement } from "react";
import { Button as RACButton, TextField as RACTextField } from "react-aria-components";
import type { Equal, Expect } from "../type-utils";

// React Aria's own components are declared as returning `ReactElement | null`.
// Hover `RACButton` to see:
//   const RACButton: (props: ButtonProps & RefAttributes<HTMLButtonElement>) => ReactElement | null
export type RacButtonSignature = Expect<
  Equal<ReturnType<typeof RACButton>, ReactElement | null>
>;
export type RacTextFieldSignature = Expect<
  Equal<ReturnType<typeof RACTextField>, ReactElement | null>
>;

// But rendering one with JSX produces a `JSX.Element`. Hover `racButtonElement`:
const racButtonElement = <RACButton>Save</RACButton>;
export type RacJsxExpression = Expect<
  Equal<typeof racButtonElement, JSX.Element>
>;

// The same for an intrinsic element:
const divElement = <div />;
export type DivJsxExpression = Expect<Equal<typeof divElement, JSX.Element>>;

export { racButtonElement, divElement };
