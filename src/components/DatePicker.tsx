/**
 * DatePicker: DatePicker
 *
 * Imports from the package built from the `main` branch (identical to the
 * published 0.9.1 types). Hover over any component name, or over
 * `Example` below, to see the inferred return type.
 */
import type { JSX } from "react";
import {
  DatePicker,
} from "@bcgov/design-system-react-components";
import { parseDate } from "@internationalized/date";
import type { Equal, Expect } from "../type-utils";

// No return annotation: hover `DatePickerExample` to see what TypeScript infers.
export function DatePickerExample() {
  return (
    <DatePicker label="Start date" defaultValue={parseDate("2026-11-12")} />
  );
}

// Each line fails `npm run check` if that component's declared return type is
// not exactly `JSX.Element`.
export type DatePickerReturnsJsxElement = Expect<Equal<ReturnType<typeof DatePicker>, JSX.Element>>;
