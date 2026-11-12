/**
 * Subheader: Subheader
 *
 * Imports from the package built from the `main` branch (identical to the
 * published 0.9.1 types). Hover over any component name, or over
 * `Example` below, to see the inferred return type.
 */
import type { JSX } from "react";
import {
  Subheader,
} from "@bcgov/design-system-react-components";
import type { Equal, Expect } from "../type-utils";

// No return annotation: hover `SubheaderExample` to see what TypeScript infers.
export function SubheaderExample() {
  return (
    <Subheader size="medium">Secondary navigation</Subheader>
  );
}

// Each line fails `npm run check` if that component's declared return type is
// not exactly `JSX.Element`.
export type SubheaderReturnsJsxElement = Expect<Equal<ReturnType<typeof Subheader>, JSX.Element>>;
