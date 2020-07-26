import React from "react"
import { NextPage } from "next"

// アクションの列挙
const Action = {
  Increment: "I",
  Decrement: "D",
} as const
type Action = typeof Action[keyof typeof Action]

// 前の状態とアクションを元に、次の状態を返す関数
// eslint-disable-next-line consistent-return
const reducer = (count: number, action: Action): number => {
  switch (action) {
    case Action.Increment:
      return count + 1
    case Action.Decrement:
      return count - 1
  }
}

const Page: NextPage = () => {
  const initialCount = 0
  const [currentCount, dispatch] = React.useReducer(reducer, initialCount)

  return (
    <div>
      <p>ボタンを {currentCount} 回押しましたね</p>
      <button type="button" onClick={(): void => dispatch(Action.Increment)}>
        ボタン
      </button>
      <button type="button" onClick={(): void => dispatch(Action.Decrement)}>
        ボタン
      </button>
    </div>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
