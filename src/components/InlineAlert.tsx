/**
 * InlineAlert: InlineAlert
 *
 * Imports from the package built from the `main` branch (identical to the
 * published 0.9.1 types). Hover over any component name, or over
 * `Example` below, to see the inferred return type.
 */
import type { JSX } from "react";
import {
  InlineAlert,
} from "@bcgov/design-system-react-components";
import type { Equal, Expect } from "../type-utils";

// No return annotation: hover `InlineAlertExample` to see what TypeScript infers.
export function InlineAlertExample() {
  return (
    <InlineAlert variant="success" title="Saved" description="Your changes were saved." />
  );
}

// Each line fails `npm run check` if that component's declared return type is
// not exactly `JSX.Element`.
export type InlineAlertReturnsJsxElement = Expect<Equal<ReturnType<typeof InlineAlert>, JSX.Element>>;
