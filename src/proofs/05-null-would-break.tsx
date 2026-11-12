/**
 * PROOF 5: changing our return types to React Aria's `ReactElement | null`
 * would be a type-level breaking change for some consumer code.
 *
 * `npm run check` passes only because each `@ts-expect-error` line really does
 * error. Delete one and the check fails, proving the error is real.
 *
 * Fair caveat: ordinary JSX usage (`<Button />`) is NOT affected (see the end
 * of this file). The break is for code that uses the return type directly.
 */
import type { JSX, ReactElement } from "react";
import { Button } from "@bcgov/design-system-react-components";
import type { Equal, Expect } from "../type-utils";

type ButtonProps = Parameters<typeof Button>[0];

// What `Button` would look like if it adopted React Aria's convention:
declare function ButtonWithRacConvention(props: ButtonProps): ReactElement | null;

// 1. Assigning the result to a JSX.Element.
export const today: JSX.Element = Button({ children: "Save" });
// @ts-expect-error Type 'ReactElement | null' is not assignable to type 'Element'.
export const proposed: JSX.Element = ButtonWithRacConvention({ children: "Save" });

// 2. Reading from the result without a null check.
export const todayProps = Button({}).props;
// @ts-expect-error 'ButtonWithRacConvention(...)' is possibly 'null'.
export const proposedProps = ButtonWithRacConvention({}).props;

// 3. Code typed with `ReturnType<typeof Button>`, e.g. a helper that must
//    return "whatever Button returns":
type ButtonResult = ReturnType<typeof Button>;
export function renderToday(): ButtonResult {
  return Button({ children: "OK" });
}
// Under the proposal, such a helper's callers start receiving `null` in their
// types:
type ProposedResult = ReturnType<typeof ButtonWithRacConvention>;
export type ResultsDiffer = Expect<Equal<Equal<ButtonResult, ProposedResult>, false>>;

// 4. Only `| null` matters. A plain `ReactElement` return would be fine:
declare function ButtonReturningReactElement(props: ButtonProps): ReactElement<any, any>;
export const fine: JSX.Element = ButtonReturningReactElement({});

// Caveat: normal JSX usage compiles either way, because JSX allows components
// returning `JSX.Element | null`:
export const jsxToday = <Button>Save</Button>;
export const jsxProposed = <ButtonWithRacConvention>Save</ButtonWithRacConvention>;
