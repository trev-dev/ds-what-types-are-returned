/**
 * Header: Button, Header
 *
 * Imports from the package built from the `main` branch (identical to the
 * published 0.9.1 types). Hover over any component name, or over
 * `Example` below, to see the inferred return type.
 */
import type { JSX } from "react";
import {
  Button,
  Header,
} from "@bcgov/design-system-react-components";
import type { Equal, Expect } from "../type-utils";

// No return annotation: hover `HeaderExample` to see what TypeScript infers.
export function HeaderExample() {
  return (
    <Header
      title="Service name"
      titleElement="h1"
      skipLinks={[<a key="main" href="#main">Skip to main content</a>]}
    >
      <Button variant="secondary" size="small">Log in</Button>
    </Header>
  );
}

// Each line fails `npm run check` if that component's declared return type is
// not exactly `JSX.Element`.
export type ButtonReturnsJsxElement = Expect<Equal<ReturnType<typeof Button>, JSX.Element>>;
export type HeaderReturnsJsxElement = Expect<Equal<ReturnType<typeof Header>, JSX.Element>>;
