// テスト対象の関数等が書かれたファイルを import する
import helloWorld, { calculateQuotient } from "../src/hello-test-world"

test("function helloWorld", (): void => {
  expect(helloWorld("John")).toBe("Hello John")
})

test("function calculate", (): void => {
  expect(calculateQuotient(5, 2)).toBe(2)
  expect(calculateQuotient(4, 2)).toBe(2)
  expect(calculateQuotient(5, 100)).toBe(0)
})

// 設定の参考URL
// https://typescript-jp.gitbook.io/deep-dive/intro-1/jest
// https://qiita.com/mangano-ito/items/99dedf88d972e7e631b7
// https://wp-kyoto.net/testing-typescript-by-jest
