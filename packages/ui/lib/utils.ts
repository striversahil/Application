// utils.ts
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to conditionally merge class names.
 * It uses `clsx` to conditionally apply class names and `twMerge` to merge Tailwind CSS classes.
 *
 * @param inputs - An array of class values.
 * @returns A single string of combined class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
