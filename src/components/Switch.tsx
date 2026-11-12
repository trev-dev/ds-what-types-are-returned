/**
 * Switch: Switch
 *
 * Imports from the package built from the `main` branch (identical to the
 * published 0.9.1 types). Hover over any component name, or over
 * `Example` below, to see the inferred return type.
 */
import type { JSX } from "react";
import {
  Switch,
} from "@bcgov/design-system-react-components";
import type { Equal, Expect } from "../type-utils";

// No return annotation: hover `SwitchExample` to see what TypeScript infers.
export function SwitchExample() {
  return (
    <Switch description="Receive updates">Notifications</Switch>
  );
}

// Each line fails `npm run check` if that component's declared return type is
// not exactly `JSX.Element`.
export type SwitchReturnsJsxElement = Expect<Equal<ReturnType<typeof Switch>, JSX.Element>>;
