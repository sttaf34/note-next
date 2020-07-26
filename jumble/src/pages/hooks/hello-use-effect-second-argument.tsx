import React from "react"
import { NextPage } from "next"

type Props = {
  value: number
}

const Component: React.FC<Props> = ({ value }: Props) => {
  // 第二引数の値が変わったときは実行される
  // 前回と同じ value が渡ってきた場合は実行されないということ
  // 当然、ログの表示も 0 と 1 が交互に並ぶことになる
  React.useEffect(() => {
    console.log(`useEffect! value => ${value}`)
  }, [value])

  return (
    <>
      <p>value: {value}</p>
    </>
  )
}

type ZeroOrOne = 0 | 1

const getRandomNumberZeroOrOne = (): ZeroOrOne => {
  return Math.floor(Math.random() * 2) as ZeroOrOne
}

const Page: NextPage = () => {
  const [value, setValue] = React.useState<ZeroOrOne>(0)

  const onClick = () => {
    const zeroOrOne = getRandomNumberZeroOrOne()
    setValue(zeroOrOne)
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
