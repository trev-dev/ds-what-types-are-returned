/**
 * Tag: Tag, TagGroup, TagList
 *
 * Imports from the package built from the `main` branch (identical to the
 * published 0.9.1 types). Hover over any component name, or over
 * `Example` below, to see the inferred return type.
 */
import type { JSX } from "react";
import {
  Tag,
  TagGroup,
  TagList,
} from "@bcgov/design-system-react-components";
import { TagList as RACTagList } from "react-aria-components";
import type { Equal, Expect } from "../type-utils";

// No return annotation: hover `TagExample` to see what TypeScript infers.
export function TagExample() {
  return (
    <>
      <TagGroup label="Statuses">
        <TagList
          items={[
            { id: "new", textValue: "New", color: "bc-blue" },
            { id: "done", textValue: "Done", color: "green" },
          ]}
        />
      </TagGroup>
      <TagGroup label="Single tag">
        <RACTagList>
          <Tag id="draft" textValue="Draft" color="gray" />
        </RACTagList>
      </TagGroup>
    </>
  );
}

// Each line fails `npm run check` if that component's declared return type is
// not exactly `JSX.Element`.
export type TagReturnsJsxElement = Expect<Equal<ReturnType<typeof Tag>, JSX.Element>>;
export type TagGroupReturnsJsxElement = Expect<Equal<ReturnType<typeof TagGroup>, JSX.Element>>;
export type TagListReturnsJsxElement = Expect<Equal<ReturnType<typeof TagList>, JSX.Element>>;
