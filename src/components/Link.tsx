/**
 * Link: Link
 *
 * Imports from the package built from the `main` branch (identical to the
 * published 0.9.1 types). Hover over any component name, or over
 * `Example` below, to see the inferred return type.
 */
import type { JSX } from "react";
import {
  Link,
} from "@bcgov/design-system-react-components";
import type { Equal, Expect } from "../type-utils";

// No return annotation: hover `LinkExample` to see what TypeScript infers.
export function LinkExample() {
  return (
    <Link href="https://gov.bc.ca" size="medium">gov.bc.ca</Link>
  );
}

// Each line fails `npm run check` if that component's declared return type is
// not exactly `JSX.Element`.
export type LinkReturnsJsxElement = Expect<Equal<ReturnType<typeof Link>, JSX.Element>>;
