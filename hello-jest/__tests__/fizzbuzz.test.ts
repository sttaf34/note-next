import { fizzbuzz } from "../src/fizzbuzz"

test("function fizzbuzz", () => {
  // 素朴な書き方
  const result = fizzbuzz(16)
  expect(result.length).toBe(16)
  expect(result[0]).toBe("1")
  expect(result[1]).toBe("2")
  expect(result[2]).toBe("fizz")
  expect(result[3]).toBe("4")
  expect(result[4]).toBe("buzz")
  expect(result[5]).toBe("fizz")

  // 空っぽの配列のときは
  expect(fizzbuzz(0)).toEqual([])
  expect(fizzbuzz(-1)).toEqual([])
  expect(fizzbuzz(2.2)).toEqual([])
  expect(fizzbuzz(2 ** 54)).toEqual([])
})
