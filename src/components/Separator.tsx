/**
 * Separator: Separator
 *
 * Imports from the package built from the `main` branch (identical to the
 * published 0.9.1 types). Hover over any component name, or over
 * `Example` below, to see the inferred return type.
 */
import type { JSX } from "react";
import {
  Separator,
} from "@bcgov/design-system-react-components";
import type { Equal, Expect } from "../type-utils";

// No return annotation: hover `SeparatorExample` to see what TypeScript infers.
export function SeparatorExample() {
  return (
    <Separator size="small" />
  );
}

// Each line fails `npm run check` if that component's declared return type is
// not exactly `JSX.Element`.
export type SeparatorReturnsJsxElement = Expect<Equal<ReturnType<typeof Separator>, JSX.Element>>;
