/**
 * Callout: Button, Callout
 *
 * Imports from the package built from the `main` branch (identical to the
 * published 0.9.1 types). Hover over any component name, or over
 * `Example` below, to see the inferred return type.
 */
import type { JSX } from "react";
import {
  Button,
  Callout,
} from "@bcgov/design-system-react-components";
import type { Equal, Expect } from "../type-utils";

// No return annotation: hover `CalloutExample` to see what TypeScript infers.
export function CalloutExample() {
  return (
    <Callout
      variant="lightBlue"
      title="Did you know?"
      description="Callouts highlight helpful information."
      buttons={<Button size="small">Learn more</Button>}
    />
  );
}

// Each line fails `npm run check` if that component's declared return type is
// not exactly `JSX.Element`.
export type ButtonReturnsJsxElement = Expect<Equal<ReturnType<typeof Button>, JSX.Element>>;
export type CalloutReturnsJsxElement = Expect<Equal<ReturnType<typeof Callout>, JSX.Element>>;
