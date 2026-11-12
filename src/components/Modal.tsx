/**
 * Modal: Button, Dialog, Modal (+ React Aria re-exports: DialogTrigger)
 *
 * Imports from the package built from the `main` branch (identical to the
 * published 0.9.1 types). Hover over any component name, or over
 * `Example` below, to see the inferred return type.
 */
import type { JSX } from "react";
import {
  Button,
  Dialog,
  DialogTrigger,
  Modal,
} from "@bcgov/design-system-react-components";
import type { Equal, Expect } from "../type-utils";

// No return annotation: hover `ModalExample` to see what TypeScript infers.
export function ModalExample() {
  return (
    <DialogTrigger>
      <Button>Open modal</Button>
      <Modal isDismissable>
        <Dialog aria-label="Modal content">Modal body</Dialog>
      </Modal>
    </DialogTrigger>
  );
}

// Each line fails `npm run check` if that component's declared return type is
// not exactly `JSX.Element`.
export type ButtonReturnsJsxElement = Expect<Equal<ReturnType<typeof Button>, JSX.Element>>;
export type DialogReturnsJsxElement = Expect<Equal<ReturnType<typeof Dialog>, JSX.Element>>;
export type ModalReturnsJsxElement = Expect<Equal<ReturnType<typeof Modal>, JSX.Element>>;
