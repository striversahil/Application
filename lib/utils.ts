export const cn = <T extends string[]>(...classNames: T) =>
  classNames.filter(Boolean).join(" ") as T extends string ? string : never;
