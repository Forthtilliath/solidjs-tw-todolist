/**
 * The `wait` function returns a promise that resolves after a specified duration of time.
 * @param {number} duration - The duration parameter is a number that represents the amount of time in
 * milliseconds that the function should wait before resolving the promise.
 * @returns A Promise object is being returned.
 */
export function wait(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}
