/**
 * Tooltip: Button, Tooltip (+ React Aria re-exports: TooltipTrigger)
 *
 * Imports from the package built from the `main` branch (identical to the
 * published 0.9.1 types). Hover over any component name, or over
 * `Example` below, to see the inferred return type.
 */
import type { JSX } from "react";
import {
  Button,
  Tooltip,
  TooltipTrigger,
} from "@bcgov/design-system-react-components";
import type { Equal, Expect } from "../type-utils";

// No return annotation: hover `TooltipExample` to see what TypeScript infers.
export function TooltipExample() {
  return (
    <TooltipTrigger>
      <Button>Hover me</Button>
      <Tooltip>Helpful hint</Tooltip>
    </TooltipTrigger>
  );
}

// Each line fails `npm run check` if that component's declared return type is
// not exactly `JSX.Element`.
export type ButtonReturnsJsxElement = Expect<Equal<ReturnType<typeof Button>, JSX.Element>>;
export type TooltipReturnsJsxElement = Expect<Equal<ReturnType<typeof Tooltip>, JSX.Element>>;
