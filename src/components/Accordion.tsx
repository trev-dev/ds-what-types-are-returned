/**
 * Accordion: Accordion, AccordionGroup
 *
 * Imports from the package built from the `main` branch (identical to the
 * published 0.9.1 types). Hover over any component name, or over
 * `Example` below, to see the inferred return type.
 */
import type { JSX } from "react";
import {
  Accordion,
  AccordionGroup,
} from "@bcgov/design-system-react-components";
import type { Equal, Expect } from "../type-utils";

// No return annotation: hover `AccordionExample` to see what TypeScript infers.
export function AccordionExample() {
  return (
    <AccordionGroup title="Frequently asked questions">
      <Accordion label="What is this?">An exhaustive type demo.</Accordion>
      <Accordion label="Why?">To show inferred return types.</Accordion>
    </AccordionGroup>
  );
}

// Each line fails `npm run check` if that component's declared return type is
// not exactly `JSX.Element`.
export type AccordionReturnsJsxElement = Expect<Equal<ReturnType<typeof Accordion>, JSX.Element>>;
export type AccordionGroupReturnsJsxElement = Expect<Equal<ReturnType<typeof AccordionGroup>, JSX.Element>>;
