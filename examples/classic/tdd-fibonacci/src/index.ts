
export function fibonacci (index: number) {
  return index === 0 || index === 1 
    ? index 
    : fibonacci(index - 1) + fibonacci(index - 2);
}