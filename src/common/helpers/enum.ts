/**
 * Type-guard: checks at runtime whether `val` is a member of the given
 * string-enum `enumObj`.  In the `true` branch `val` is narrowed to
 * E[keyof E], e.g. `"TypeA" | "TypeB"`.
 *
 * @param enumObj  The enum object (e.g. `Type` or `Role`)
 * @param val      The unknown value you want to check
 */
export function isEnum<E extends Record<string, string>>(
    enumObj: E,
    val: unknown
  ): val is E[keyof E] {
    return (
      typeof val === "string" &&
      (Object.values(enumObj) as string[]).includes(val)
    );
  }
  
/**
 * Attempts to parse `val` as a member of `enumObj`.  Returns the enum
 * value (typed E[keyof E]) on success, or `undefined` on failure.
 *
 * @param enumObj  The enum object
 * @param val      The unknown value
 */
export function parseEnum<E extends Record<string, string>>(
    enumObj: E,
    val: unknown
  ): E[keyof E] | undefined {
    return isEnum(enumObj, val) ? val : undefined;
}
  
/**
 * Asserts that `val` is a valid member of `enumObj`.  Returns the enum
 * value (typed E[keyof E]) on success, or throws an Error on failure.
 *
 * @param enumObj      The enum object
 * @param val          The unknown value
 * @param errorMessage Optional custom error message
 */
export function assertEnum<E extends Record<string, string>>(
    enumObj: E,
    val: unknown,
    errorMessage?: string
  ): E[keyof E] {
    if (!isEnum(enumObj, val)) {
      throw new Error(errorMessage ?? `Invalid enum value: ${String(val)}`);
    }
    return val;
}

/**
 * Converts a string into the corresponding member of a string‐based enum,
 * or throws an Error if the string isn’t one of its values.
 *
 * @param str       The incoming string to convert
 * @param enumObj   The enum object (e.g. `Role` or `Type`)
 * @param errorMsg  Optional custom error message
 * @returns         The matched enum member (typed E[keyof E])
 */
export function stringToEnum<E extends Record<string, string>>(
  str: string,
  enumObj: E,
  errorMsg?: string
): E[keyof E] {
  const values = Object.values(enumObj) as string[];
  if (values.includes(str)) {
    // safe to cast: we’ve checked it’s one of the enum’s values
    return str as E[keyof E];
  }
  throw new Error(errorMsg ?? `Invalid enum value: ${str}`);
}