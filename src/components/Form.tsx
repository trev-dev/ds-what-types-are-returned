/**
 * Form: Button, Form, TextField
 *
 * Imports from the package built from the `main` branch (identical to the
 * published 0.9.1 types). Hover over any component name, or over
 * `Example` below, to see the inferred return type.
 */
import type { JSX } from "react";
import {
  Button,
  Form,
  TextField,
} from "@bcgov/design-system-react-components";
import type { Equal, Expect } from "../type-utils";

// No return annotation: hover `FormExample` to see what TypeScript infers.
export function FormExample() {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <TextField label="Name" isRequired />
      <Button type="submit">Submit</Button>
    </Form>
  );
}

// Each line fails `npm run check` if that component's declared return type is
// not exactly `JSX.Element`.
export type ButtonReturnsJsxElement = Expect<Equal<ReturnType<typeof Button>, JSX.Element>>;
export type FormReturnsJsxElement = Expect<Equal<ReturnType<typeof Form>, JSX.Element>>;
export type TextFieldReturnsJsxElement = Expect<Equal<ReturnType<typeof TextField>, JSX.Element>>;
