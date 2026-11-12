/**
 * Checkbox: Checkbox, CheckboxGroup
 *
 * Imports from the package built from the `main` branch (identical to the
 * published 0.9.1 types). Hover over any component name, or over
 * `Example` below, to see the inferred return type.
 */
import type { JSX } from "react";
import {
  Checkbox,
  CheckboxGroup,
} from "@bcgov/design-system-react-components";
import type { Equal, Expect } from "../type-utils";

// No return annotation: hover `CheckboxExample` to see what TypeScript infers.
export function CheckboxExample() {
  return (
    <CheckboxGroup label="Notify me by">
      <Checkbox value="email">Email</Checkbox>
      <Checkbox value="sms" description="Standard rates apply">Text message</Checkbox>
    </CheckboxGroup>
  );
}

// Each line fails `npm run check` if that component's declared return type is
// not exactly `JSX.Element`.
export type CheckboxReturnsJsxElement = Expect<Equal<ReturnType<typeof Checkbox>, JSX.Element>>;
export type CheckboxGroupReturnsJsxElement = Expect<Equal<ReturnType<typeof CheckboxGroup>, JSX.Element>>;
