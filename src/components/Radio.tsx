/**
 * Radio: Radio, RadioGroup
 *
 * Imports from the package built from the `main` branch (identical to the
 * published 0.9.1 types). Hover over any component name, or over
 * `Example` below, to see the inferred return type.
 */
import type { JSX } from "react";
import {
  Radio,
  RadioGroup,
} from "@bcgov/design-system-react-components";
import type { Equal, Expect } from "../type-utils";

// No return annotation: hover `RadioExample` to see what TypeScript infers.
export function RadioExample() {
  return (
    <RadioGroup label="Delivery" defaultValue="standard">
      <Radio value="standard">Standard</Radio>
      <Radio value="express" description="Arrives tomorrow">Express</Radio>
    </RadioGroup>
  );
}

// Each line fails `npm run check` if that component's declared return type is
// not exactly `JSX.Element`.
export type RadioReturnsJsxElement = Expect<Equal<ReturnType<typeof Radio>, JSX.Element>>;
export type RadioGroupReturnsJsxElement = Expect<Equal<ReturnType<typeof RadioGroup>, JSX.Element>>;
