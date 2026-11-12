/**
 * Compile-time type assertions. `npm run check` fails if any of them is false.
 *
 * `Equal` is the strict "identical types" check used by type-challenges and
 * DefinitelyTyped: it is only `true` when X and Y are mutually identical, not
 * merely assignable one way.
 */
export type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;

export type Expect<T extends true> = T;

/** `true` when A can be assigned to B (one direction only). */
export type Assignable<A, B> = [A] extends [B] ? true : false;
