/**
 * Menu: Button, Menu, MenuItem (+ React Aria re-exports: MenuTrigger, MenuSection, MenuSectionHeader, SubmenuTrigger)
 *
 * Imports from the package built from the `main` branch (identical to the
 * published 0.9.1 types). Hover over any component name, or over
 * `Example` below, to see the inferred return type.
 */
import type { JSX } from "react";
import {
  Button,
  Menu,
  MenuItem,
  MenuSection,
  MenuSectionHeader,
  MenuTrigger,
  SubmenuTrigger,
} from "@bcgov/design-system-react-components";
import type { Equal, Expect } from "../type-utils";

// No return annotation: hover `MenuExample` to see what TypeScript infers.
export function MenuExample() {
  return (
    <MenuTrigger>
      <Button>Actions</Button>
      <Menu>
        <MenuItem label="Edit" description="Change this item" />
        <MenuSection>
          <MenuSectionHeader>Danger zone</MenuSectionHeader>
          <MenuItem label="Delete" />
        </MenuSection>
        <SubmenuTrigger>
          <MenuItem label="Share" />
          <Menu>
            <MenuItem label="Email" />
          </Menu>
        </SubmenuTrigger>
      </Menu>
    </MenuTrigger>
  );
}

// Each line fails `npm run check` if that component's declared return type is
// not exactly `JSX.Element`.
export type ButtonReturnsJsxElement = Expect<Equal<ReturnType<typeof Button>, JSX.Element>>;
export type MenuReturnsJsxElement = Expect<Equal<ReturnType<typeof Menu>, JSX.Element>>;
export type MenuItemReturnsJsxElement = Expect<Equal<ReturnType<typeof MenuItem>, JSX.Element>>;
