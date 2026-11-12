/**
 * TextField: TextField
 *
 * Imports from the package built from the `main` branch (identical to the
 * published 0.9.1 types). Hover over any component name, or over
 * `Example` below, to see the inferred return type.
 */
import type { JSX } from "react";
import {
  TextField,
} from "@bcgov/design-system-react-components";
import type { Equal, Expect } from "../type-utils";

// No return annotation: hover `TextFieldExample` to see what TypeScript infers.
export function TextFieldExample() {
  return (
    <TextField label="Email" type="email" description="We will not share it" />
  );
}

// Each line fails `npm run check` if that component's declared return type is
// not exactly `JSX.Element`.
export type TextFieldReturnsJsxElement = Expect<Equal<ReturnType<typeof TextField>, JSX.Element>>;
