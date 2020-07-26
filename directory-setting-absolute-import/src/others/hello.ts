export const helloWorld = (name: string): string => {
  return `Hello ${name}`
}

// 割り算の商を返す関数、整数で返す
export const calculateQuotient = (
  dividend: number,
  divisor: number
): number => {
  return Math.floor(dividend / divisor)
}
