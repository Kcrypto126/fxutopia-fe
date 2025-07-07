import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Change the number type
export const formatLargeNumber = (num: number): string => {
  const absNum = Math.abs(num);

  if (absNum >= 1e9) {
    return num / 1e9 + "B";
  }
  if (absNum >= 1e6) {
    return num / 1e6 + "M";
  }
  if (absNum >= 1e3) {
    return num / 1e3 + "K";
  }

  return num.toString();
};
