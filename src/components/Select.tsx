/**
 * Select: Select
 *
 * Imports from the package built from the `main` branch (identical to the
 * published 0.9.1 types). Hover over any component name, or over
 * `Example` below, to see the inferred return type.
 */
import type { JSX } from "react";
import {
  Select,
} from "@bcgov/design-system-react-components";
import type { Equal, Expect } from "../type-utils";

// No return annotation: hover `SelectExample` to see what TypeScript infers.
export function SelectExample() {
  return (
    <Select
      label="Province"
      items={[
        { id: "bc", label: "British Columbia" },
        { id: "ab", label: "Alberta" },
      ]}
    />
  );
}

// Each line fails `npm run check` if that component's declared return type is
// not exactly `JSX.Element`.
export type SelectReturnsJsxElement = Expect<Equal<ReturnType<typeof Select>, JSX.Element>>;
