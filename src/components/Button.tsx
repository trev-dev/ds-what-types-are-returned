/**
 * Button: Button, ButtonGroup
 *
 * Imports from the package built from the `main` branch (identical to the
 * published 0.9.1 types). Hover over any component name, or over
 * `Example` below, to see the inferred return type.
 */
import type { JSX } from "react";
import {
  Button,
  ButtonGroup,
} from "@bcgov/design-system-react-components";
import type { Equal, Expect } from "../type-utils";

// No return annotation: hover `ButtonExample` to see what TypeScript infers.
export function ButtonExample() {
  return (
    <ButtonGroup alignment="start" ariaLabel="Actions">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="link">Link</Button>
      <Button danger>Danger</Button>
    </ButtonGroup>
  );
}

// Each line fails `npm run check` if that component's declared return type is
// not exactly `JSX.Element`.
export type ButtonReturnsJsxElement = Expect<Equal<ReturnType<typeof Button>, JSX.Element>>;
export type ButtonGroupReturnsJsxElement = Expect<Equal<ReturnType<typeof ButtonGroup>, JSX.Element>>;
