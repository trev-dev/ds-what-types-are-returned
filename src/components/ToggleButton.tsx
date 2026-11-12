/**
 * ToggleButton: ToggleButton, ToggleButtonGroup
 *
 * Imports from the package built from the `main` branch (identical to the
 * published 0.9.1 types). Hover over any component name, or over
 * `Example` below, to see the inferred return type.
 */
import type { JSX } from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
} from "@bcgov/design-system-react-components";
import type { Equal, Expect } from "../type-utils";

// No return annotation: hover `ToggleButtonExample` to see what TypeScript infers.
export function ToggleButtonExample() {
  return (
    <ToggleButtonGroup label="View" defaultSelectedKeys={["list"]}>
      <ToggleButton id="list">List</ToggleButton>
      <ToggleButton id="grid">Grid</ToggleButton>
    </ToggleButtonGroup>
  );
}

// Each line fails `npm run check` if that component's declared return type is
// not exactly `JSX.Element`.
export type ToggleButtonReturnsJsxElement = Expect<Equal<ReturnType<typeof ToggleButton>, JSX.Element>>;
export type ToggleButtonGroupReturnsJsxElement = Expect<Equal<ReturnType<typeof ToggleButtonGroup>, JSX.Element>>;
