/**
 * AlertDialog: AlertDialog, Button, Modal (+ React Aria re-exports: DialogTrigger)
 *
 * Imports from the package built from the `main` branch (identical to the
 * published 0.9.1 types). Hover over any component name, or over
 * `Example` below, to see the inferred return type.
 */
import type { JSX } from "react";
import {
  AlertDialog,
  Button,
  DialogTrigger,
  Modal,
} from "@bcgov/design-system-react-components";
import type { Equal, Expect } from "../type-utils";

// No return annotation: hover `AlertDialogExample` to see what TypeScript infers.
export function AlertDialogExample() {
  return (
    <DialogTrigger>
      <Button>Delete record</Button>
      <Modal isDismissable>
        <AlertDialog
          variant="destructive"
          title="Delete this record?"
          buttons={<Button slot="close" danger>Delete</Button>}
        >
          This cannot be undone.
        </AlertDialog>
      </Modal>
    </DialogTrigger>
  );
}

// Each line fails `npm run check` if that component's declared return type is
// not exactly `JSX.Element`.
export type AlertDialogReturnsJsxElement = Expect<Equal<ReturnType<typeof AlertDialog>, JSX.Element>>;
export type ButtonReturnsJsxElement = Expect<Equal<ReturnType<typeof Button>, JSX.Element>>;
export type ModalReturnsJsxElement = Expect<Equal<ReturnType<typeof Modal>, JSX.Element>>;
