/**
 * PROOF 2: `JSX.Element` is React's `ReactElement<any, any>`.
 *
 * Source: @types/react (19.3.0) index.d.ts:
 *
 *     namespace JSX {
 *         interface Element extends React.ReactElement<any, any> {}
 *
 * It's an empty interface that extends `ReactElement<any, any>`. It adds no
 * members, so the two types are interchangeable in both directions.
 *
 * Cmd/Ctrl-click `JSX` or `Element` below to jump to that definition.
 */
import type { JSX, ReactElement } from "react";
import type { Assignable, Equal, Expect } from "../type-utils";

type JsxElement = JSX.Element;
type AnyReactElement = ReactElement<any, any>;

// Assignable in both directions:
export type JsxToReact = Expect<Assignable<JsxElement, AnyReactElement>>;
export type ReactToJsx = Expect<Assignable<AnyReactElement, JsxElement>>;

// So the ONLY meaningful difference between our `JSX.Element` and React
// Aria's `ReactElement | null` is the `| null`:
export type NullIsTheDifference = Expect<
  Equal<Assignable<null, JsxElement>, false>
>;
export type NullIsAllowedByRac = Expect<
  Equal<Assignable<null, ReactElement | null>, true>
>;
