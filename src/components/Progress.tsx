/**
 * Progress: ProgressBar, ProgressCircle
 *
 * Imports from the package built from the `main` branch (identical to the
 * published 0.9.1 types). Hover over any component name, or over
 * `Example` below, to see the inferred return type.
 */
import type { JSX } from "react";
import {
  ProgressBar,
  ProgressCircle,
} from "@bcgov/design-system-react-components";
import type { Equal, Expect } from "../type-utils";

// No return annotation: hover `ProgressExample` to see what TypeScript infers.
export function ProgressExample() {
  return (
    <>
      <ProgressBar aria-label="Uploading" value={40} />
      <ProgressCircle aria-label="Loading" isIndeterminate />
    </>
  );
}

// Each line fails `npm run check` if that component's declared return type is
// not exactly `JSX.Element`.
export type ProgressBarReturnsJsxElement = Expect<Equal<ReturnType<typeof ProgressBar>, JSX.Element>>;
export type ProgressCircleReturnsJsxElement = Expect<Equal<ReturnType<typeof ProgressCircle>, JSX.Element>>;
