export const fizzbuzz = (end: number): string[] => {
  if (Number.isSafeInteger(end) === false) {
    return []
  }

  if (end < 1) {
    return []
  }

  const numbers = Array.from({ length: end }, (_, index) => index + 1)
  return numbers.map((aNumber) => {
    if (aNumber % 15 === 0) {
      return "fizzbuzz"
    } else if (aNumber % 5 === 0) {
      return "buzz"
    } else if (aNumber % 3 === 0) {
      return "fizz"
    } else {
      return String(aNumber)
    }
  })
}
