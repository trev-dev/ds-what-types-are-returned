/**
 * Text: Text
 *
 * Imports from the package built from the `main` branch (identical to the
 * published 0.9.1 types). Hover over any component name, or over
 * `Example` below, to see the inferred return type.
 */
import type { JSX } from "react";
import {
  Text,
} from "@bcgov/design-system-react-components";
import type { Equal, Expect } from "../type-utils";

// No return annotation: hover `TextExample` to see what TypeScript infers.
export function TextExample() {
  return (
    <Text size="medium" color="secondary">Body text</Text>
  );
}

// Each line fails `npm run check` if that component's declared return type is
// not exactly `JSX.Element`.
export type TextReturnsJsxElement = Expect<Equal<ReturnType<typeof Text>, JSX.Element>>;
