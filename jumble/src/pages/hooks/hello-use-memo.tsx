import React from "react"
import { NextPage } from "next"

const fibonacci = (aNumber: number): number => {
  if (aNumber === 0) {
    return 0
  }
  if (aNumber === 1) {
    return 1
  }
  return fibonacci(aNumber - 1) + fibonacci(aNumber - 2)
}

type Props = {
  value: number
}

const Component: React.FC<Props> = ({ value }: Props) => {
  // 第二引数の値が変わったときは実行される
  // 「前回と同じ value が渡ってきた場合だけ」キャッシュを返す
  // value で渡ってきたすべての過去の値と計算結果をメモしているわけではない
  const result = React.useMemo(() => {
    console.log(`value => ${value}`)
    return fibonacci(value)
  }, [value])

  // キャッシュが返されたときはここも通らない
  console.log("render")
  return (
    <p>
      {value} → {result}
    </p>
  )
}

const getRandomNumberForFibonacci = (): number => {
  // フィボナッチ数を素朴に計算したときに適度に秒数がかかる範囲
  const zeroToTwo = Math.floor(Math.random() * 3)
  return zeroToTwo + 38 // 38 - 40
}

const Page: NextPage = () => {
  const [value, setValue] = React.useState(0)

  const onClick = () => {
    const newValue = getRandomNumberForFibonacci()
    console.log(`click newValue => ${newValue}`)
    setValue(newValue)
  }

  return (
    <>
      <p>{value}</p>
      <button type="button" onClick={onClick}>
        ボタン
      </button>
      <hr />
      <Component value={value} />
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
