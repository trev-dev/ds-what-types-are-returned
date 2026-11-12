/**
 * TimeField: TimeField
 *
 * Imports from the package built from the `main` branch (identical to the
 * published 0.9.1 types). Hover over any component name, or over
 * `Example` below, to see the inferred return type.
 */
import type { JSX } from "react";
import {
  TimeField,
} from "@bcgov/design-system-react-components";
import type { Equal, Expect } from "../type-utils";

// No return annotation: hover `TimeFieldExample` to see what TypeScript infers.
export function TimeFieldExample() {
  return (
    <TimeField label="Start time" />
  );
}

// Each line fails `npm run check` if that component's declared return type is
// not exactly `JSX.Element`.
export type TimeFieldReturnsJsxElement = Expect<Equal<ReturnType<typeof TimeField>, JSX.Element>>;
